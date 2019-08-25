import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import history from "../util/history.js";
import axios from "axios";
import queryString from "query-string";

const GoogleLogin = () => {
  useEffect(() => {
    const values = queryString.parse(window.location.search);
    if (values && values.code) {
      const code = decodeURIComponent(values.code);
      axios
        .post(
          "http://osp.shobhitagarwal.me/api/user/login/google",
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
    <Button variant="contained" color="primary" style={{ marginRight: "10px" }}>
      <a
        href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.me%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=538251364150-kg2713vshgkc3uvlqprirg47bq8s74pu.apps.googleusercontent.com&redirect_uri=http%3A%2F%2F127.0.0.1%3A3000"
        className="no-underline white"
      >
        Google Login
      </a>
    </Button>
  );
};
export default GoogleLogin;
