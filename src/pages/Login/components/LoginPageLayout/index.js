import React from "react";
import { Box, Button, TextField } from "@material-ui/core";

import styles from "./style.module.scss";
import browser from "../../../../static/img/authBackground.png";

const LoginPageLayout = ({ setLoginValues, handleSubmit }) => {
  return (
      <Box>
        <h1>Sign In</h1>

        <Box className={styles.authWrapper}>
          <img className={styles.authBrowser} src={browser} alt=""/>
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <Box>
              <TextField
                  className={styles.loginInput}
                  name='email'
                  onChange={setLoginValues}
                  placeholder='Email'
                  type="email"
                  variant="filled"
              />
            </Box>
            <Box>
              <TextField
                  className={styles.loginInput}
                  name='password'
                  onChange={setLoginValues}
                  placeholder='Password'
                  type="password"
                  variant="filled"
              />
            </Box>
            <Button className={styles.loginButton} type='submit'>Sign In</Button>
          </form>
        </Box>
      </Box>
  );
};

export default LoginPageLayout;