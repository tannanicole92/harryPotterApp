import React from 'react';
import { Grid, Container, FormControl, InputLabel, OutlinedInput, Button } from '@material-ui/core';

const UserCredsForm = (props) => {
  const { errors, submitText, onSubmitProp, userInputs, onChangeProp } = props;
  console.log(userInputs.firstName);
  return (
    <Container maxWidth="lg">
    <form onSubmit={onSubmitProp}>
      <Grid className="formContainer" container direction="column" justify="center" alignItems="center">
      { errors &&
        errors.map((err, index) => (
          <p key={index}>{err}</p>
        ))
      }
      { userInputs.firstName !== undefined &&
        <FormControl>
          <InputLabel>First Name</InputLabel>
          <OutlinedInput type="text" name="firstName" value={userInputs.firstName} onChange={onChangeProp} />
        </FormControl>
      }
      { userInputs.lastName !== undefined &&
        <FormControl>
          <InputLabel>Last Name</InputLabel>
          <OutlinedInput type="text" name="lastName" value={userInputs.lastName} onChange={onChangeProp} />
        </FormControl>
      }
      { userInputs.email !== undefined &&
        <FormControl>
          <InputLabel>Email</InputLabel>
          <OutlinedInput type="email" name="email" value={userInputs.email} onChange={onChangeProp} />
        </FormControl>
      }
      { userInputs.password !== undefined &&
        <FormControl>
          <InputLabel>Password</InputLabel>
          <OutlinedInput type="password" name="password" value={userInputs.password} onChange={onChangeProp} />
        </FormControl>
      }
      { userInputs.confirmPassword !== undefined &&
        <FormControl>
          <InputLabel>Confirm Password</InputLabel>
          <OutlinedInput type="password" name="confirmPassword" value={userInputs.confirmPassword} onChange={onChangeProp} />
        </FormControl>
      }
        <Button type="submit" variant="contained" color="primary">{submitText}
        </Button>
      </Grid>
    </form>
    </Container>
  );
}

export default UserCredsForm;
