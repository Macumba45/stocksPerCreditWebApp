import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Formato de email no valido")
    .required("El campo email es requerido"),
  password: Yup.string()
    .min(4, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
});

export const initialValues = {
  email: "",
  password: "",
};
