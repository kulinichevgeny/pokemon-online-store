import React from "react";
import { Box, Button, TextField } from "@material-ui/core";

import styles from "./style.module.scss";

const LoginPageLayout = ({ setLoginValues, handleSubmit }) => {
  return (
      <Box>
        <h1>Sign In</h1>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <Box>
            <TextField
                className={styles.loginInput}
                name='email'
                onChange={setLoginValues}
                label="Email"
                type="email"
                variant="filled"
            />
          </Box>
          <Box>
            <TextField
                className={styles.loginInput}
                name='password'
                onChange={setLoginValues}
                label="Password"
                type="password"
                variant="filled"
            />
          </Box>
          <Button className={styles.loginButton} type='submit'>Login</Button>
        </form>
      </Box>
  );
};

export default LoginPageLayout;