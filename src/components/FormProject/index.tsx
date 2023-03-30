import { FC, memo, useState } from 'react';
import { initialValues } from './constants';
import { Field, FieldProps, Formik } from 'formik';
import { validationSchema } from './constants';
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
     ButtonSignUp,
     Error,
     NameContainer,

} from './styles';
import { createProject } from '../../services/api/project';









const FormProjectNew: FC = () => {

     const [tags, setTags] = useState([]);


     const onSubmit = async (values: any, newTags: any) => {
          setTags(newTags);
          await createProject(values)
          console.log(values, newTags);
          // do something with the form values here
     };


     return (
          <>
               <MainFormContainer>
                    <Formik
                         validationSchema={validationSchema}
                         onSubmit={onSubmit}
                         initialValues={initialValues}
                    >
                         <Form>
                              <SignUpTitle>Create new Project</SignUpTitle>
                              <Field name="url">
                                   {({ field, meta }: FieldProps) => (
                                        <NameContainer>
                                             <LabelContainer>
                                                  <Label>URL Video</Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="url"
                                                  placeholder="Insert your URL"
                                                  {...field}
                                             />
                                             {!!meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </NameContainer>
                                   )}
                              </Field>
                              <Field name="title">
                                   {({ field, meta }: FieldProps) => (
                                        <NameContainer>
                                             <LabelContainer>
                                                  <Label>Project title</Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="title"
                                                  placeholder="Insert your ProjectTitle"
                                                  {...field}
                                             />
                                             {!!meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </NameContainer>
                                   )}
                              </Field>
                              <Field name="description">
                                   {({ field, meta }: FieldProps) => (
                                        <NameContainer>
                                             <LabelContainer>
                                                  <Label>Description</Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="description"
                                                  placeholder="Insert your Description"
                                                  {...field}
                                             />
                                             {!!meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </NameContainer>
                                   )}
                              </Field>
                              <Field name="country">
                                   {({ field, meta }: FieldProps) => (
                                        <EmailContainer>
                                             <LabelContainer>
                                                  <Label>Country* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="country"
                                                  placeholder="Insert your Country"
                                                  {...field}
                                             />
                                             {!!meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </EmailContainer>
                                   )}
                              </Field>
                              <Field name="city">
                                   {({ field, meta }: FieldProps) => (
                                        <NameContainer>
                                             <LabelContainer>
                                                  <Label>City* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="city"
                                                  placeholder="Insert your City"
                                                  {...field}
                                             />{' '}
                                             {!!meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </NameContainer>
                                   )}
                              </Field>
                              <Field name="duration">
                                   {({ field, meta }: FieldProps) => (
                                        <NameContainer>
                                             <LabelContainer>
                                                  <Label>Duration* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="duration"
                                                  placeholder="Insert your Duration"
                                                  {...field}
                                             />
                                             {!!meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </NameContainer>
                                   )}
                              </Field>
                              <Field name="history">
                                   {({ field, meta }: FieldProps) => (
                                        <NameContainer>
                                             <LabelContainer>
                                                  <Label>History* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="history"
                                                  placeholder="Insert your History"
                                                  {...field}
                                             />
                                             {!!meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </NameContainer>
                                   )}
                              </Field>
                              <Field name="commerce">
                                   {({ field, meta }: FieldProps) => (
                                        <PasswordContainer>
                                             <LabelContainer>
                                                  <Label>Commerce* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="commerce"
                                                  placeholder="Insert Commerce"
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </PasswordContainer>
                                   )}
                              </Field>
                              <Field name="proposal">
                                   {({ field, meta }: FieldProps) => (
                                        <PasswordContainer>
                                             <LabelContainer>
                                                  <Label>Proposal* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="proposal"
                                                  placeholder="Insert Proposal"
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </PasswordContainer>
                                   )}
                              </Field>
                              <Field name="cost">
                                   {({ field, meta }: FieldProps) => (
                                        <PasswordContainer>
                                             <LabelContainer>
                                                  <Label>Cost* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="cost"
                                                  placeholder="Insert Cost"
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </PasswordContainer>
                                   )}
                              </Field>
                              <Field name="currency">
                                   {({ field, meta }: FieldProps) => (
                                        <PasswordContainer>
                                             <LabelContainer>
                                                  <Label>Currency* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="currency"
                                                  placeholder="Insert Currency"
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </PasswordContainer>
                                   )}
                              </Field>
                              <Field name="MinimumInvestment">
                                   {({ field, meta }: FieldProps) => (
                                        <PasswordContainer>
                                             <LabelContainer>
                                                  <Label>Minimun Invest* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="MinimumInvestment"
                                                  placeholder="Insert MinInvest"
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </PasswordContainer>
                                   )}
                              </Field>
                              <Field name="ActionPerCredits">
                                   {({ field, meta }: FieldProps) => (
                                        <PasswordContainer>
                                             <LabelContainer>
                                                  <Label>Action per Credit </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="ActionPerCredits"
                                                  placeholder="Insert ActionPerCredit"
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </PasswordContainer>
                                   )}
                              </Field>
                              <Field name="ReturnOnInvestment">
                                   {({ field, meta }: FieldProps) => (
                                        <PasswordContainer>
                                             <LabelContainer>
                                                  <Label>ROI </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="ReturnOnInvestment"
                                                  placeholder="Insert ROI"
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </PasswordContainer>
                                   )}
                              </Field>
                              <Field name="goal">
                                   {({ field, meta }: FieldProps) => (
                                        <PasswordContainer>
                                             <LabelContainer>
                                                  <Label>Goal </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="goal"
                                                  placeholder="Insert Goal"
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </PasswordContainer>
                                   )}
                              </Field>
                              <Field name="tags">
                                   {({ field, meta }: FieldProps) => (
                                        <PasswordContainer>
                                             <LabelContainer>
                                                  <Label>Tags </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="tags"
                                                  placeholder="Insert Tags"
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </PasswordContainer>
                                   )}
                              </Field>
                              <ButtonSignUpContainer>
                                   <ButtonSignUp type="submit">
                                        Create new Project
                                   </ButtonSignUp>
                              </ButtonSignUpContainer>
                         </Form>
                    </Formik>
               </MainFormContainer>
          </>
     );

}



export default memo(FormProjectNew)
