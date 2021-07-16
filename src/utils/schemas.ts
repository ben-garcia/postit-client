const createCommunitySchema = {
  description: {
    maxLength: {
      value: 500,
      message: 'Description must be between 1 and 500 characters',
    },
    minLength: {
      value: 1,
      message: 'Description must be between 1 and 500 characters',
    },
  },
  name: {
    maxLength: {
      value: 21,
      message: 'Name must be between 1 and 21 characters',
    },
    minLength: {
      value: 1,
      message: 'Name must be between 1 and 21 characters',
    },
  },
  type: {
    matches: {
      value: /private|protected|public/,
      message: 'Type must be 1 of 3 values(private, protected, public)',
    },
  },
};

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
    matches: {
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

export { createCommunitySchema, loginSchema, signUpSchema };
