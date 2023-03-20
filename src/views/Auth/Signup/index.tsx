import { FC, memo, useCallback } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormButton,
  FormContainer,
  Input,
  Label,
  Error,
  InputContainer,
  StyledLink,
  Return,
} from "./styles";
import { Formik, Field } from "formik";
import { initialValues, validationSchema } from "./constants";
import { signup } from "../../../services/api/auth";

const SignupForm: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (values: typeof initialValues) => {
    const signupError = await signup(values);

    if (!signupError) {
      navigate("/landing");
    } else {
      setError(signupError);
    }
  };

  const goToBack = useCallback(() => {
    navigate("/landing");
  }, [navigate]);

  return (
    <FormContainer>
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleSignup}
        initialValues={initialValues}
      >
        <Form>
          <Field name="email">
            {({ field, meta }: { field: any; meta: any }) => (
              <InputContainer>
                <Label>Email</Label>
                <Input $hasError={!!meta?.error} type="text" {...field} />
                {meta?.error && <Error>{meta.error}</Error>}
              </InputContainer>
            )}
          </Field>
          <Field name="password">
            {({ field, meta }: { field: any; meta: any }) => (
              <InputContainer>
                <Label>Password</Label>
                <Input $hasError={!!meta?.error} {...field} type="password" />
                {meta?.error && <Error>{meta.error}</Error>}
              </InputContainer>
            )}
          </Field>
          <FormButton type="submit">SignUp</FormButton>
          <div style={{ marginTop: "10px" }}>
            <Return>
              Already have an account?{" "}
              <StyledLink href="/login">Go to login 👈 </StyledLink>
            </Return>
          </div>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default memo(SignupForm);
