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
     Formulario,
     ButtonNext,
     ButtonPrevious
} from './styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import NavbarEmp from '../NavbarEmp';
import CountrySelect from './Country';
import LimitTags from './Tags';
import UploadButtons from './Camara';
import MinHeightTextarea from './Text';
import LimitCity from './City';
import { StartDatePickers } from './DatePicker';
import InputCurrency from './InputCurrency';


const FormProject: FC = () => {
     const navigate = useNavigate();
     const [step, setStep] = useState(1);

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

                         {step === 1 && (<><Formulario>
                              {
                                   <BackButton onClick={handleGoToBack}>
                                        <ArrowBackIcon />
                                   </BackButton>
                              }
                              <BasicInformation>
                                   <DivIcon1>
                                        <LooksOneIcon />
                                   </DivIcon1>
                                   Basic information
                              </BasicInformation>

                              <Field name="image">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Upload the images for your project* </Label>
                                                  <UploadButtons />
                                             </LabelContainer>{' '}

                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                              <Field name="name">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Write the name of your project* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="text"
                                                  placeholder="Write your name on..."
                                                  onKeyDown={(event) => {
                                                       if (event.key === 'Enter') {
                                                            event.preventDefault(); // Evita que se recargue la página
                                                       }
                                                  }}
                                                  {...field}
                                             />

                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}

                                        </InputContainer>
                                   )}
                              </Field>
                              <Field name="country">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Indicate your country* </Label>
                                                  <CountrySelect />


                                             </LabelContainer>
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                              <Field name="City">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Indicate your city* </Label>
                                                  <LimitCity />
                                             </LabelContainer>

                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>

                         </Formulario>


                              <ButtonNext onClick={() => setStep(2)}>Next</ButtonNext>
                         </>
                         )}


                         {step === 2 && (<><Formulario>
                              <BasicInformation>
                                   <DivIcon>
                                        <LooksTwoIcon />
                                   </DivIcon>
                                   Project Information                              </BasicInformation>
                              <Field name="history">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Writte your history* </Label>
                                                  <MinHeightTextarea />
                                             </LabelContainer>

                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                              <Field name="description">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Writte a description* </Label>
                                                  <MinHeightTextarea />

                                             </LabelContainer>

                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                              <Field name="proposal">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Indicate your proposal* </Label>
                                             </LabelContainer>
                                             <MinHeightTextarea />

                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>

                                   )}

                              </Field>
                              <Field name="duration">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>
                                                       How long will your project last?*
                                                  </Label>
                                             </LabelContainer>
                                             <StartDatePickers />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                              {/* <Field name="miniInvest">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>MiniInvest* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="text"
                                                  placeholder="Write your miniInvest on..."
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                              <Field name="totalInvest">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>TotalInvest* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="text"
                                                  placeholder="Write your totalInvest on..."
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field> */}

                              <Field name="commerce">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Indicate your type project* </Label>
                                                  <LimitTags />
                                             </LabelContainer>

                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                         </Formulario>
                              <ButtonPrevious onClick={() => setStep(1)}>Previous</ButtonPrevious>
                              <ButtonNext onClick={() => setStep(3)}>Next</ButtonNext>
                         </>
                         )}
                         {step === 3 && (<> <Formulario>
                              <BasicInformation>
                                   <DivIcon>
                                        <Looks3Icon />
                                   </DivIcon>
                                   Economic Information                              </BasicInformation>
                              <Field name="goal">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Indicate yout goal* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="number"
                                                  placeholder="Write your proposal on..."
                                                  {...field}
                                             />                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}

                                        </InputContainer>
                                   )}
                              </Field>
                              <Field name="currency">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>What type of currency do you use?* </Label>
                                             </LabelContainer>
                                             <InputCurrency />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                              {/* <Field name="actionPerCredit">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>ActionPerCredit* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="text"
                                                  placeholder="Write your actionPerCredit on..."
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field> */}
                              <Field name="cost">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Cost* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="number"
                                                  placeholder="Write your proposal on..."
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>



                              <FormButton type="submit">Save</FormButton>
                         </Formulario>
                              <ButtonPrevious onClick={() => setStep(2)}>Previous</ButtonPrevious>

                         </>
                         )}
                    </Form>
               </Formik>
          </FormContainer>
     );
};

export default memo(FormProject);
