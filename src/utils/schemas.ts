const loginSchema = {
  password: {
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters long.',
    },
    required: {
      value: true,
      message: 'Password must be at least 8 characters long.',
    },
  },
  username: {
    maxLength: {
      value: 20,
      message: 'Username must be between 3 and 20 characters.',
    },
    minLength: {
      value: 3,
      message: 'Username must be between 3 and 20 characters.',
    },
    required: {
      value: true,
      message: 'Username must be between 3 and 20 characters.',
    },
  },
};

const signUpSchema = {
  email: {
    pattern: {
      value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
      message: 'Please fix your email to continue.',
    },
  },
  password: {
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters long.',
    },
    required: {
      value: true,
      message: 'Password must be at least 8 characters long.',
    },
  },
  username: {
    maxLength: {
      value: 20,
      message: 'Username must be between 3 and 20 characters.',
    },
    minLength: {
      value: 3,
      message: 'Username must be between 3 and 20 characters.',
    },
    required: {
      value: true,
      message: 'Username must be between 3 and 20 characters.',
    },
  },
};

export { loginSchema, signUpSchema };
