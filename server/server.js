const Response = require("./ErrorHandling");
const express = require("express");
const request = require("request");
const bycrypt = require("bcrypt");
const ApiRequest = require("./functions");
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listen on port ${port}`));

//// login
const saltRounds = 10;
app.post("/login", async ({ body: { username, password } }, res) => {
  if (!(username || "").trim() || !(password || "").trim()) {
    res.send(Response.error("incorrect username or password"));
    return;
  }
  await client.connect();
  const db = client.db("newdb");
  const UsersCollection = db.collection("users");
  const user = await UsersCollection.findOne({ username });
  client.close();
  if (user) {
    bycrypt.compare(password, user.password, async (err, result) => {
      if (result) {
        res.send(
          Response.success(
            { token: user.password, logged_in: true },
            "login successfull"
          )
        );
      } else {
        res.send(Response.error("incorrect username or password"));
      }
    });
  } else {
    res.send(Response.error("incorrect username or password"));
  }
});

///// check user is login
app.post("/check_login", async ({ body: { token } }, res) => {
  if (!(token || "").trim()) {
    res.send(Response.error("please login to your account"));
    return;
  }
  await client.connect();
  const db = client.db("newdb");
  const UsersCollection = db.collection("users");
  const user = await UsersCollection.findOne({ password: token });
  client.close();
  if (user) {
    res.send(Response.error("you're logged in before", { logged_in: true }));
  } else {
    res.send(Response.error("please login to your account"));
  }
});

//////// get user by age
app.post("/get_user", async ({ body: { age } }, res) => {
  await client.connect();
  const database = client.db("newdb");
  const UsersCollection = database.collection("users");
  const query = { age: age };
  const options = {
    projection: { _id: 0 },
  };
  const users = await UsersCollection.findOne(query, options);
  client.close();
  if (users) {
    res.send(Response.success(users));
  } else {
    res.send(Response.error("no item found"));
  }
});

/////set user in user collection
app.post("/set_user", async ({ body: { name, age } }, res) => {
  if (!name || !age) {
    res.send(Response.error("age or name is empty"));
  } else {
    await client.connect();
    const database = client.db("newdb");
    const UsersCollection = database.collection("users");
    const check = await UsersCollection.findOne({
      $or: [{ age: age }, { name: name }],
    });
    if (check) {
      res.send(Response.error("your information were exists in db"));
    } else {
      const result = await UsersCollection.insertOne({ age, name });
      res.send(Response.success(result));
    }
  }
});

///// filter countries by external api
app.post("/countries", ({ body: { country } }, res) => {
  request(
    {
      uri: "https://restcountries.eu/rest/v2/name/" + country,
    },
    function (error, response, body) {
      res.send(body);
    }
  );
});

////get user location
app.get("/get_location", (body, res) => {
  request(
    {
      uri: "https://location.services.mozilla.com/v1/geolocate?key=test",
    },
    function (err, response, body) {
      res.send(body);
    }
  );
});

///// get covid 19 cases

app.post("/get_cases", async ({ body: { days } }, res) => {
  console.log(days);
  const all = await ApiRequest.do("https://disease.sh/v3/covid-19/all");
  const countries = await ApiRequest.do(
    "https://disease.sh/v3/covid-19/countries"
  );
  const lastdays = await ApiRequest.do(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=" + days
  );
  if ((all && countries, lastdays)) {
    res.send(
      Response.success(
        {
          all: JSON.parse(all),
          countries: JSON.parse(countries),
          lastdays: JSON.parse(lastdays),
        },
        "done"
      )
    );
  } else {
    res.send(Response.error("error in api calls"));
  }
});
