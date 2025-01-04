type UserInformation = {
  email: string;
  password: string;
};

function validateLogin(values: UserInformation) {
  const errors = {
    email: '',
    password: '',
  };

  if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(values.email)) {
    errors.email = 'Invalid email address.';
  }
  if (!(values.password.length >= 8 && values.password.length < 20)) {
    errors.password = 'Password should be between 8 to 20 characters.';
  }

  return errors;
}

export {validateLogin};
