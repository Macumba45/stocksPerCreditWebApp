import { FC, memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { initialValues, validationSchema } from './constants';
import {
     FormContainer,
     TitleForm,
     BasicInformation,
     InputContainer,
     Input,
     Error,
     FormButton,
     BackButton,
     LabelContainer,
     Label,
     DivIcon,
     DivIcon1,
     Formulario
} from './styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import NavbarEmp from '../NavbarEmp';

const FormProject: FC = () => {
     const navigate = useNavigate();

     const onSubmitForm = (
          values: any,
          { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
     ) => {
          // Handle submitting the form data
          setSubmitting(false);
     };

     const handleGoToBack = useCallback(() => {
          navigate('/dashboardemp');
     }, [navigate]);

     return (
          <FormContainer>
               <NavbarEmp />

               <Formik
                    validationSchema={validationSchema}
                    onSubmit={onSubmitForm} // quitar, solo esta para que deje de chillar la maricona
                    initialValues={initialValues}
               >

                    <Form>
                         <TitleForm>Create Your New Project</TitleForm>

                         <Formulario>
                              {
                                   <BackButton onClick={handleGoToBack}>
                                        <ArrowBackIcon />
                                   </BackButton>
                              }
                              <BasicInformation><DivIcon1><LooksOneIcon /></DivIcon1>Informacion Basica</BasicInformation>

                              <Field name="image">

                                   {({ field, meta }: { field: any; meta: any }) => (
                                        <InputContainer>

                                             <LabelContainer>
                                                  <Label>Image* </Label>
                                             </LabelContainer>                                        <Input
                                                  $hasError={!!meta?.error}
                                                  type="url"
                                                  placeholder="IMAGEN"
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                              <Field name="title">
                                   {({ field, meta }: { field: any; meta: any }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Title* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="text"
                                                  placeholder="Write your title on..."
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                              <Field name="country">
                                   {({ field, meta }: { field: any; meta: any }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Country* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="text"
                                                  placeholder="Write your country on..."
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                              <Field name="city">
                                   {({ field, meta }: { field: any; meta: any }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>City* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="text"
                                                  placeholder="Write your city on..."
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                         </Formulario>

                         <Formulario>
                              <BasicInformation><DivIcon><LooksTwoIcon /></DivIcon>Informacion Del Proyecto</BasicInformation>
                              <Field name="description">
                                   {({ field, meta }: { field: any; meta: any }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Description* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="text"
                                                  placeholder="Write your description on..."
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                              <Field name="categories">
                                   {({ field, meta }: { field: any; meta: any }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Categories* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="text"
                                                  placeholder="Write your categories on..."
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                              <Field name="collected">
                                   {({ field, meta }: { field: any; meta: any }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Collected* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="text"
                                                  placeholder="Write your collected on..."
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                              <Field name="investors">
                                   {({ field, meta }: { field: any; meta: any }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Investors* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="text"
                                                  placeholder="Write your investors on..."
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                         </Formulario>
                         <Formulario>

                              <BasicInformation><DivIcon><Looks3Icon /></DivIcon>Informacion Economica</BasicInformation>
                              <Field name="minimuminvestment">
                                   {({ field, meta }: { field: any; meta: any }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Minimum Investment* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="text"
                                                  placeholder="Write your minimuminvestment on..."
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                              <Field name="goals">
                                   {({ field, meta }: { field: any; meta: any }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Goals* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="text"
                                                  placeholder="Write your goals on..."
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                              <Field name="limitvalue">
                                   {({ field, meta }: { field: any; meta: any }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Limit Value* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="text"
                                                  placeholder="Write your limitvalue on..."
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                         </Formulario>
                         <FormButton type="submit">Create</FormButton>
                    </Form>
               </Formik>
          </FormContainer>
     );
};

export default memo(FormProject);
