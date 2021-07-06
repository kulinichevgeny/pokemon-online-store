import { Box, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../../routes/routeNames";

import styles from "./style.module.scss";

const LoginPageLayout = ({ setLoginValues, handleSubmit }) => {
  return (
      <Box>
        <h1>Sign In</h1>

        <Box className={styles.signInFolderWrapper}>
          <form className={styles.signInFolderForm} onSubmit={handleSubmit}>
            <h2>Did not have an Account? <Link to={ROUTES.SIGN_UP}>Create</Link> one!</h2>
            <Box>
              <TextField
                  className={styles.signInFormInput}
                  name='email'
                  onChange={setLoginValues}
                  placeholder='Email'
                  type="email"
                  variant="filled"
                  required={true}
                  autoComplete="on"
              />
            </Box>
            <Box>
              <TextField
                  className={styles.signInFormInput}
                  name='password'
                  onChange={setLoginValues}
                  placeholder='Password'
                  type="password"
                  variant="filled"
                  required={true}
                  autoComplete="on"
              />
            </Box>
            <button className={styles.loginButton} type='submit'>Sign In</button>
          </form>
        </Box>

      </Box>
  );
};

export default LoginPageLayout;