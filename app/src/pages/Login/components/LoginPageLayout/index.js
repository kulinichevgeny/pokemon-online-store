import React from 'react';
import { Box, Button, TextField } from '@material-ui/core';

const LoginPageLayout = ({ loginValues, setLoginValues, handleSubmit }) => {
  return (
      <Box>
        <form onSubmit={handleSubmit}>
          <Box>
            <TextField
                name='email'
                onChange={setLoginValues}
                label="Email"
                type="email"
                variant="outlined"
            />
          </Box>
          <Box>
            <TextField
                name='password'
                onChange={setLoginValues}
                label="Password"
                type="password"
                variant="outlined"
            />
          </Box>
          <Button type='submit'>Login</Button>
        </form>
      </Box>
  );
};

export default LoginPageLayout;