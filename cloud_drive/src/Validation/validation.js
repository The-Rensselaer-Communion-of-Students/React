import * as yup from 'yup';

// Yup User Schema
export const userSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirmPassword: yup.string().min(6).required(),
    name: yup.string().required(),
  });