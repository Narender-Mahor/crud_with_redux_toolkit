import * as Yup from "yup";
export const StudentvalidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string().required(),
  age: Yup.string().required(),
  gender: Yup.string().required(),
  dateOfBirth: Yup.date().required(),
  address: Yup.string().required(),
  course: Yup.string().required(),
});
