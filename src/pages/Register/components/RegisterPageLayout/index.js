import { Box, TextField } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import styles from "./style.module.scss";

const RegisterPageLayout = ({ registerValues, setRegisterValues, handleSubmit }) => {
  return (
      <Box>
        <h1>Sign Up</h1>

        <Box className={styles.signUpWrapper}>
          <form className={styles.signUpForm} onSubmit={handleSubmit}>
            <Box className={styles.signUpColumn}>
              <Box>
                <Box>
                  <TextField
                      className={styles.signUpInput}
                      name='email'
                      onChange={setRegisterValues}
                      placeholder='Email ∗'
                      type="email"
                      variant="filled"
                      required={true}
                      autoComplete="on"
                  />
                </Box>
                <Box>
                  <TextField
                      className={styles.signUpInput}
                      name='password'
                      onChange={setRegisterValues}
                      placeholder='Password ∗'
                      type="password"
                      variant="filled"
                      required={true}
                      autoComplete="password"
                  />
                </Box>
                <Box>
                  <TextField
                      className={styles.signUpInput}
                      name='confirmedPassword'
                      onChange={setRegisterValues}
                      placeholder='Confirm password ∗'
                      type="password"
                      variant="filled"
                      required={true}
                      autoComplete="on"
                  />
                </Box>
              </Box>
              <Box>
                <Box>
                  <TextField
                      className={styles.signUpInput}
                      name='firstName'
                      onChange={setRegisterValues}
                      placeholder='First Name ∗'
                      type="text"
                      variant="filled"
                      required={true}
                      autoComplete="on"
                  />
                </Box>
                <Box>
                  <TextField
                      className={styles.signUpInput}
                      name='lastName'
                      onChange={setRegisterValues}
                      placeholder='Last Name ∗'
                      type="text"
                      variant="filled"
                      required={true}
                      autoComplete="on"
                  />
                </Box>
                <Box>
                  <TextField
                      className={styles.signUpInput}
                      name='phone'
                      onChange={setRegisterValues}
                      placeholder='Phone Number ∗'
                      type="tel"
                      variant="filled"
                      required={true}
                      autoComplete="on"
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
                  title='Select your gender'
              >
                <MenuItem value={'male'}>Male</MenuItem>
                <MenuItem value={'female'}>Female</MenuItem>
              </Select>
            </FormControl>
            <button className={styles.signUpButton} type='submit'>Sign Up</button>
          </form>
        </Box>
      </Box>
  );
};

export default RegisterPageLayout;