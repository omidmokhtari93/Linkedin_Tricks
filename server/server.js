const Response = require("./ErrorHandling");
const express = require("express");
const request = require("request");
const bycrypt = require("bcrypt");
const { apiRequest, cookieParser } = require("./functions");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

const MongoClient = require("mongodb").MongoClient;
const {
  REST_COUTRIES_API,
  MOZILLA_LOCATION_API,
  COVID_19_ALL_API,
  COVID_19_ALL_COUNTRIES_API,
  COVID_19_LAST_DAYS_API,
  REST_COUTRIESNOW_API,
} = require("./routes");
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
        res.setHeader(
          "Set-Cookie",
          `token=${user.password}; HttpOnly; max-age=${60 * 60}` // max-age = value in seconds
        );
        res.send(Response.success({ logged_in: true }, "login successfull"));
      } else {
        res.send(Response.error("incorrect username or password"));
      }
    });
  } else {
    res.send(Response.error("incorrect username or password"));
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.send(Response.success({ logged_in: false }, "logout succesfully"));
});

///// check user is login
app.post("/check_login", async ({ headers: { cookie } }, res) => {
  const parsedCookie = cookieParser(cookie);
  if (!(parsedCookie && parsedCookie.token)) {
    res.send(Response.error("please login to your account"));
    return;
  }
  await client.connect();
  const db = client.db("newdb");
  const UsersCollection = db.collection("users");
  const user = await UsersCollection.findOne({ password: parsedCookie.token });
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
  if (!country.trim()) {
    res.send(Response.error("please fill country"));
  } else {
    request(
      {
        url: REST_COUTRIESNOW_API,
      },
      function (error, response, body) {
        const parsed = JSON.parse(body);
        if (parsed?.data) {
          res.send({
            ...parsed,
            data: parsed.data.filter((x) => {
              return x.name.toLowerCase().includes(country.toLowerCase());
            }),
          });
        } else {
          res.send(Response.error("no data founded"));
        }
      }
    );
  }
});

////get user location
app.get("/get_location", (body, res) => {
  request(
    {
      uri: MOZILLA_LOCATION_API,
      method: "GET",
    },
    function (err, response, body) {
      res.send(body);
    }
  );
});

///// get covid 19 cases

app.post("/get_cases", async ({ body: { days } }, res) => {
  const all = await apiRequest.send(COVID_19_ALL_API);
  const countries = await apiRequest.send(COVID_19_ALL_COUNTRIES_API);
  const lastdays = await apiRequest.send(COVID_19_LAST_DAYS_API + days);
  if (all && countries && lastdays) {
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

app.get("/events", function (request, response, next) {
  const headers = {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  };
  response.writeHead(200, headers);
  setInterval(() => {
    const d = new Date();
    d.getHours();
    d.getMinutes();
    d.getSeconds();
    const data = `data: ${JSON.stringify(
      d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds()
    )}\n\n`;
    response.write(data);
  }, 1000);

  request.on("close", () => {
    console.log("close");
  });
});
