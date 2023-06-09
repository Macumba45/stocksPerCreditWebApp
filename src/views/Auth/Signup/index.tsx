import {FC, memo, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {initialValues} from '../SignUp/constants';
import {Field, FieldProps, Formik} from 'formik';
import {validationSchema} from './constants';
import type {SignUpProps} from './type';
import {setAuthenticatedToken} from '../../../services/storage/token';
import {hadledSubmitSignup} from '../../../services/api/auth';
import {UserRole} from '../../../models/user';
import {setUserRole} from '../../../services/storage/userRole';
import {
     MainFormContainer,
     Form,
     SignUpTitle,
     EmailContainer,
     PasswordContainer,
     LabelContainer,
     Label,
     Input,
     ButtonSignUpContainer,
     LinkLoginContainer,
     LinkLoginText,
     ButtonSignUp,
     Error,
     NameContainer,
     RadioGroup,
     RadioOption,
     RadioInput,
} from './styles';

const SignUp: FC = () => {
     const navigate = useNavigate();

     const handleSubmit = useCallback(
          async (values: SignUpProps) => {
               try {
                    const response: Response = await hadledSubmitSignup(values);
                    if (response.ok) {
                         const token = await response.json();
                         setAuthenticatedToken(token.token);
                         setUserRole(values.userRol);
                         navigate('/');
                    }
               } catch (error: any) {
                    console.log(error);
               }
          },
          [navigate]
     );

     const roleOptions = [
          {label: 'Entrepreneur', value: UserRole.ENTREPRENEUR},
          {label: 'Investor', value: UserRole.INVESTOR},
     ];

     const renderRoleOptions = (field: any) => {
          const {value, onChange} = field;
          return (
               <RadioGroup>
                    {roleOptions.map((option) => (
                         <RadioOption key={option.value}>
                              <RadioInput
                                   type="radio"
                                   id={option.value}
                                   name="userRol"
                                   value={option.value}
                                   checked={value === option.value}
                                   onChange={onChange}
                              />
                              <label htmlFor={option.value}>
                                   {option.label}
                              </label>
                         </RadioOption>
                    ))}
               </RadioGroup>
          );
     };

     return (
          <>
               <MainFormContainer>
                    <Formik
                         validationSchema={validationSchema}
                         onSubmit={handleSubmit}
                         initialValues={initialValues}
                    >
                         <Form>
                              <SignUpTitle>SignUp</SignUpTitle>
                              <Field name="name">
                                   {({field, meta}: FieldProps) => (
                                        <NameContainer>
                                             <LabelContainer>
                                                  <Label>Name* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="text"
                                                  placeholder="Insert your username"
                                                  {...field}
                                             />
                                             {!!meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </NameContainer>
                                   )}
                              </Field>
                              <Field name="lastName">
                                   {({field, meta}: FieldProps) => (
                                        <NameContainer>
                                             <LabelContainer>
                                                  <Label>Last Name* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="lastName"
                                                  placeholder="Insert your lastname"
                                                  autoComplete="lastName"
                                                  {...field}
                                             />
                                             {!!meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </NameContainer>
                                   )}
                              </Field>
                              <Field name="email">
                                   {({field, meta}: FieldProps) => (
                                        <EmailContainer>
                                             <LabelContainer>
                                                  <Label>Email* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="email"
                                                  placeholder="Insert your email"
                                                  autoComplete="email"
                                                  {...field}
                                             />
                                             {!!meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </EmailContainer>
                                   )}
                              </Field>
                              <Field name="country">
                                   {({field, meta}: FieldProps) => (
                                        <NameContainer>
                                             <LabelContainer>
                                                  <Label>Country* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="country"
                                                  placeholder="Insert your city"
                                                  autoComplete="city"
                                                  {...field}
                                             />{' '}
                                             {!!meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </NameContainer>
                                   )}
                              </Field>
                              <Field name="city">
                                   {({field, meta}: FieldProps) => (
                                        <NameContainer>
                                             <LabelContainer>
                                                  <Label>City* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="city"
                                                  placeholder="Insert your city"
                                                  autoComplete="city"
                                                  {...field}
                                             />
                                             {!!meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </NameContainer>
                                   )}
                              </Field>
                              <Field name="phone">
                                   {({field, meta}: FieldProps) => (
                                        <NameContainer>
                                             <LabelContainer>
                                                  <Label>Phone* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="phone"
                                                  placeholder="Insert your phone"
                                                  autoComplete="phone"
                                                  {...field}
                                             />
                                             {!!meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </NameContainer>
                                   )}
                              </Field>
                              <Field name="userRol">
                                   {({field, meta}: FieldProps) => (
                                        <NameContainer>
                                             <LabelContainer>
                                                  <Label>
                                                       Choose your Role*{' '}
                                                  </Label>
                                             </LabelContainer>
                                             {renderRoleOptions(field)}
                                             {!!meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </NameContainer>
                                   )}
                              </Field>
                              <Field name="password">
                                   {({field, meta}: FieldProps) => (
                                        <PasswordContainer>
                                             <LabelContainer>
                                                  <Label>Password* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="password"
                                                  autoComplete="current-password"
                                                  placeholder="Insert password"
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </PasswordContainer>
                                   )}
                              </Field>
                              <LinkLoginContainer>
                                   <LinkLoginText to="/login">
                                        If you are already SignUp,{<br />} click
                                        here to login!
                                   </LinkLoginText>
                              </LinkLoginContainer>
                              <ButtonSignUpContainer>
                                   <ButtonSignUp type="submit">
                                        Sign Up
                                   </ButtonSignUp>
                              </ButtonSignUpContainer>
                         </Form>
                    </Formik>
               </MainFormContainer>
          </>
     );
};

export default memo(SignUp);
