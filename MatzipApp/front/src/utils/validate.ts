type UserInformation = {
  email: string;
  password: string;
};

function validateUser(values: UserInformation) {
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

function validateLogin(values: UserInformation) {
  return validateUser(values);
}

function validateSignup(values: UserInformation & {passwordConfirm: string}) {
  const errors = validateUser(values);
  const signupErrors = {...errors, passwordConfirm: ''};

  if (values.password !== values.passwordConfirm) {
    signupErrors.passwordConfirm = 'Password do not match';
  }
  return signupErrors;
}

function validateAddPost(values: {title: string}) {
  const errors = {
    title: '',
    description: '',
  };

  if (values.title.trim() === '') {
    errors.title = '제목은 1~30자 이내로 입력해주세요.';
  }

  return errors;
}

export {validateLogin, validateSignup, validateAddPost};
