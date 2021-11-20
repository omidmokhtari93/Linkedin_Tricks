import React, { ReactElement } from "react";

export const ImageLoading = (): ReactElement => {
  return (
    <React.Fragment>
      <p>Image Loading And Error Handling</p>
      <hr />
      <code>
        if src image does not load second image will load in onError function.
      </code>
      <br />
      <br />
      <img
        src="https://static.cdn.asset.aparat.com/avt/29569173-4949__9362.jpg"
        alt=""
        onError={(event: any) => {
          event.target.src =
            "https://static.cdn.asset.aparat.com/profile-photo/183180-m.jpg";
        }}
        loading="lazy"
      />
    </React.Fragment>
  );
};
