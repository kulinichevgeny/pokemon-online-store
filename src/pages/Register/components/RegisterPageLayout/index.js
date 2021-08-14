import { Box, TextField } from "@material-ui/core"
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'

import styles from "./style.module.scss"

const RegisterPageLayout = ({ registerValues, setRegisterValues, handleSubmit }) => {
  return (
      <Box>
        <h1>Sign Up</h1>

        <Box className={styles.signUpFolderWrapper}>
          <form className={styles.signUpFolderForm} onSubmit={handleSubmit}>
            <h2>You have to <strong>Sign Up</strong> if you want to see <strong>more content</strong> 🙌🏼</h2>
            <Box className={styles.signUpFormColumn}>
              <Box>
                  <Box>
                    <TextField
                        className={styles.signUpFormInput}
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
                      className={styles.signUpFormInput}
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
                      className={styles.signUpFormInput}
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
                      className={styles.signUpFormInput}
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
                      className={styles.signUpFormInput}
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
                      className={styles.signUpFormInput}
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
              <Select
                  className={styles.signUpFormSelect}
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
            <button className={styles.signUpFormButton} type='submit'>Sign Up</button>
          </form>
        </Box>
      </Box>
  )
}

export default RegisterPageLayout
