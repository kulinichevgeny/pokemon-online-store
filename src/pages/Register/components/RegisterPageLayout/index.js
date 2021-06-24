import { Box, Button, TextField } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import styles from "./style.module.scss";
import paint from "../../../../static/img/signupBackground.png";

const RegisterPageLayout = ({ registerValues, setRegisterValues, handleSubmit }) => {
  return (
      <Box>
        <h1>Sign Up</h1>

        <Box className={styles.authWrapper}>
          <img className={styles.authBrowser} src={paint} alt=""/>
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <Box className={styles.registerColumn}>
              <Box>
                <Box>
                  <TextField
                      className={styles.loginInput}
                      name='email'
                      onChange={setRegisterValues}
                      placeholder='Email ∗'
                      type="email"
                      variant="filled"
                  />
                </Box>
                <Box>
                  <TextField
                      className={styles.loginInput}
                      name='password'
                      onChange={setRegisterValues}
                      placeholder='Password ∗'
                      type="password"
                      variant="filled"
                  />
                </Box>
                <Box>
                  <TextField
                      className={styles.loginInput}
                      name='confirmedPassword'
                      onChange={setRegisterValues}
                      placeholder='Confirm password ∗'
                      type="password"
                      variant="filled"
                  />
                </Box>
              </Box>
              <Box>
                <Box>
                  <TextField
                      className={styles.loginInput}
                      name='firstName'
                      onChange={setRegisterValues}
                      placeholder='First Name ∗'
                      type="text"
                      variant="filled"
                  />
                </Box>
                <Box>
                  <TextField
                      className={styles.loginInput}
                      name='lastName'
                      onChange={setRegisterValues}
                      placeholder='Last Name ∗'
                      type="text"
                      variant="filled"
                  />
                </Box>
                <Box>
                  <TextField
                      className={styles.loginInput}
                      name='phone'
                      onChange={setRegisterValues}
                      placeholder='Phone Number ∗'
                      type="tel"
                      variant="filled"
                  />
                </Box>
              </Box>
            </Box>
            <FormControl>
              <InputLabel id="demo-simple-select-label" />
              <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={registerValues.gender}
                  onChange={setRegisterValues}
                  name={'gender'}
              >
                <MenuItem value={'male'}>Male</MenuItem>
                <MenuItem value={'female'}>Female</MenuItem>
              </Select>
            </FormControl>
            <Button className={styles.loginButton} type='submit'>Sign Up</Button>
          </form>
        </Box>
      </Box>
  );
};

export default RegisterPageLayout;