import { FC, memo, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { initialValues, validationSchema } from './constants';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import NavbarEmp from '../NavbarEmp';
import CountrySelect from './Country';
import LimitTags from './Tags';
import MinHeightTextarea from './Text';
import LimitCity from './City';
import { StartDatePickers } from './DatePicker';
import InputCurrency from './InputCurrency';
import {
     FormContainer,
     TitleForm,
     BasicInformation,
     InputContainer,
     Input,
     Error,
     FormButton,
     LabelContainer,
     Label,
     DivIcon,
     DivIcon1,
     Formulario,
     ButtonNext,
     ButtonPrevious
} from './styles';



const FormProject: FC = () => {
     const [step, setStep] = useState(1);

     const onSubmitForm = (
          values: any,
          { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
     ) => {
          // Handle submitting the form data
          setSubmitting(false);
     };



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

                              <BasicInformation>
                                   <DivIcon1>
                                        <LooksOneIcon />
                                   </DivIcon1>
                                   Basic information
                              </BasicInformation>

                              <Field name="url">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Upload the url for your project* </Label>
                                                  <Input
                                                       $hasError={!!meta?.error}
                                                       type="url"
                                                       placeholder="Write your url on..."
                                                       onKeyDown={(event) => {
                                                            if (event.key === 'Enter') {
                                                                 event.preventDefault(); // Evita que se recargue la página
                                                            }
                                                       }}
                                                       {...field}
                                                  />                                             </LabelContainer>{' '}

                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                              <Field name="title">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Write the title of your project* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="text"
                                                  placeholder="Write your title on..."
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
                              <Field name="city">
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
                                                  <MinHeightTextarea />

                                             </LabelContainer>

                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>


                              <Field name="tags">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Choose your favorite tags* </Label>
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
                              <Field name="actionPerCredit">
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
                              </Field>
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
                                                  placeholder="Write your cost on..."
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>
                              <Field name="MinimumInvestment">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Minimum Investment* </Label>
                                             </LabelContainer>
                                             <Input
                                                  $hasError={!!meta?.error}
                                                  type="number"
                                                  placeholder="Write your Minimum Investment on..."
                                                  {...field}
                                             />
                                             {meta?.error && (
                                                  <Error>{meta.error}</Error>
                                             )}
                                        </InputContainer>
                                   )}
                              </Field>     <Field name="ReturnOnInvestment">
                                   {({
                                        field,
                                        meta,
                                   }: {
                                        field: any;
                                        meta: any;
                                   }) => (
                                        <InputContainer>
                                             <LabelContainer>
                                                  <Label>Return On Investment* </Label>
                                             </LabelContainer>
                                             <StartDatePickers />

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
