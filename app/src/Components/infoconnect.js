import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import history from "../util/history.js";
import axios from "axios";
import queryString from "query-string";
// import history from "../util/history";
const Infoconnect = () => {
  const getUrl = () => {
    axios
      .get("http://osp.shobhitagarwal.me/api/user/login/infoconnecturl")
      .then(res => {
        console.log(res);
        window.location.replace(res.data.loginURL);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    const values = queryString.parse(window.location.search);
    if (values && values.code) {
      const code = decodeURIComponent(values.code);
      axios
        .post(
          "http://osp.shobhitagarwal.me/api/user/login/infoconnect",
          { code },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.headers["x-auth"]);
          localStorage.setItem("name", res.data.name);
          history.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);

  return (
    <Button
      variant="contained"
      color="primary"
      // className={classes.button}
      style={{ marginRight: "10px" }}
      onClick={getUrl}
    >
      Infoconnect Login
    </Button>
  );
};
export default Infoconnect;
