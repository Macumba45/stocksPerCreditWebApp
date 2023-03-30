import {FC, memo, useCallback, useEffect, useState} from 'react';
import {initialValues} from './constants';
import {Field, FieldProps, Formik} from 'formik';
import {validationSchema} from './constants';
import {createProject} from '../../services/api/project';
import Search from '../../components/Search';
import {getTags} from '../../services/api/tag';
import {Tag} from '../../models/tag';
import {useNavigate} from 'react-router-dom';
import {
     Dialog,
     DialogTitle,
     DialogContent,
     DialogActions,
     Button,
} from '@material-ui/core';
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
     MainFormContainerDivisor,
     MainFormContainerStart,
     LabelTags,
} from './styles';

const FormProjectNew: FC = () => {
     const navigate = useNavigate();
     const [tags, setTags] = useState<Tag[]>([]);
     const [modalOpen, setModalOpen] = useState(false);
     const [tagsByFilter, setTagsByFilter] = useState<Tag[]>([]);
     const handleFiltersTagsChange = useCallback((newTags: Tag[]) => {
          const newTagId = newTags.map((tag) => tag.id);
          setTagsByFilter(newTagId);
     }, []);

     const getTagsData = useCallback(async () => {
          const data = await getTags();
          if (data) {
               setTags(data);
          }
     }, []);

     useEffect(() => {
          getTagsData();
     }, [getTagsData]);

     const handleModalOpen = () => {
          setModalOpen(true);
     };

     const handleModalClose = () => {
          setModalOpen(false);
     };

     const handleSubmit = async (values: any) => {
          const data = {
               ...values,
               tags: tagsByFilter,
          };
          console.log(data);
          await createProject(data);
          handleModalOpen();
          setTimeout(() => {
               navigate('/dashboard');
          }, 2000);
     };

     return (
          <>
               <Dialog open={modalOpen} onClose={handleModalClose}>
                    <DialogTitle>Submission Successful</DialogTitle>
                    <DialogContent style={{fontFamily: 'Roboto'}}>
                         <p>Your project has been successfully submitted.</p>
                    </DialogContent>
                    <DialogActions style={{fontFamily: 'Roboto'}}>
                         <Button
                              onClick={handleModalClose}
                              color="primary"
                              autoFocus
                         >
                              OK
                         </Button>
                    </DialogActions>
               </Dialog>
               <MainFormContainer>
                    <SignUpTitle>Create new Project</SignUpTitle>
                    <Formik
                         validationSchema={validationSchema}
                         onSubmit={handleSubmit}
                         initialValues={initialValues}
                    >
                         <Form>
                              <MainFormContainerStart>
                                   <Field name="url">
                                        {({field, meta}: FieldProps) => (
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
                                                       <Error>
                                                            {meta.error}
                                                       </Error>
                                                  )}
                                             </NameContainer>
                                        )}
                                   </Field>
                                   <Field name="title">
                                        {({field, meta}: FieldProps) => (
                                             <NameContainer>
                                                  <LabelContainer>
                                                       <Label>
                                                            Project title
                                                       </Label>
                                                  </LabelContainer>
                                                  <Input
                                                       $hasError={!!meta?.error}
                                                       type="title"
                                                       placeholder="Insert your ProjectTitle"
                                                       {...field}
                                                  />
                                                  {!!meta?.error && (
                                                       <Error>
                                                            {meta.error}
                                                       </Error>
                                                  )}
                                             </NameContainer>
                                        )}
                                   </Field>
                                   <Field name="description">
                                        {({field, meta}: FieldProps) => (
                                             <NameContainer>
                                                  <LabelContainer>
                                                       <Label>
                                                            Description
                                                       </Label>
                                                  </LabelContainer>
                                                  <Input
                                                       $hasError={!!meta?.error}
                                                       type="description"
                                                       placeholder="Insert your Description"
                                                       {...field}
                                                  />
                                                  {!!meta?.error && (
                                                       <Error>
                                                            {meta.error}
                                                       </Error>
                                                  )}
                                             </NameContainer>
                                        )}
                                   </Field>
                              </MainFormContainerStart>
                              <MainFormContainerDivisor>
                                   <Field name="country">
                                        {({field, meta}: FieldProps) => (
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
                                                       <Error>
                                                            {meta.error}
                                                       </Error>
                                                  )}
                                             </EmailContainer>
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
                                                       placeholder="Insert your City"
                                                       {...field}
                                                  />{' '}
                                                  {!!meta?.error && (
                                                       <Error>
                                                            {meta.error}
                                                       </Error>
                                                  )}
                                             </NameContainer>
                                        )}
                                   </Field>
                                   <Field name="duration">
                                        {({field, meta}: FieldProps) => (
                                             <NameContainer>
                                                  <LabelContainer>
                                                       <Label>Duration* </Label>
                                                  </LabelContainer>
                                                  <Input
                                                       $hasError={!!meta?.error}
                                                       type="date"
                                                       placeholder="Insert your Duration"
                                                       min={
                                                            new Date()
                                                                 .toISOString()
                                                                 .split('T')[0]
                                                       }
                                                       {...field}
                                                  />
                                                  {!!meta?.error && (
                                                       <Error>
                                                            {meta.error}
                                                       </Error>
                                                  )}
                                             </NameContainer>
                                        )}
                                   </Field>

                                   <Field name="history">
                                        {({field, meta}: FieldProps) => (
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
                                                       <Error>
                                                            {meta.error}
                                                       </Error>
                                                  )}
                                             </NameContainer>
                                        )}
                                   </Field>
                              </MainFormContainerDivisor>
                              <MainFormContainerDivisor>
                                   <Field name="commerce">
                                        {({field, meta}: FieldProps) => (
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
                                                       <Error>
                                                            {meta.error}
                                                       </Error>
                                                  )}
                                             </PasswordContainer>
                                        )}
                                   </Field>
                                   <Field name="proposal">
                                        {({field, meta}: FieldProps) => (
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
                                                       <Error>
                                                            {meta.error}
                                                       </Error>
                                                  )}
                                             </PasswordContainer>
                                        )}
                                   </Field>
                                   <Field name="cost">
                                        {({field, meta}: FieldProps) => (
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
                                                       <Error>
                                                            {meta.error}
                                                       </Error>
                                                  )}
                                             </PasswordContainer>
                                        )}
                                   </Field>
                                   <Field name="currency">
                                        {({field, meta}: FieldProps) => (
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
                                                       <Error>
                                                            {meta.error}
                                                       </Error>
                                                  )}
                                             </PasswordContainer>
                                        )}
                                   </Field>
                              </MainFormContainerDivisor>
                              <MainFormContainerDivisor>
                                   <Field name="minimuminvestment">
                                        {({field, meta}: FieldProps) => (
                                             <PasswordContainer>
                                                  <LabelContainer>
                                                       <Label>
                                                            Minimun Invest*{' '}
                                                       </Label>
                                                  </LabelContainer>
                                                  <Input
                                                       $hasError={!!meta?.error}
                                                       type="MinimumInvestment"
                                                       placeholder="Insert MinInvest"
                                                       {...field}
                                                  />
                                                  {meta?.error && (
                                                       <Error>
                                                            {meta.error}
                                                       </Error>
                                                  )}
                                             </PasswordContainer>
                                        )}
                                   </Field>
                                   <Field name="actionPerCredit">
                                        {({field, meta}: FieldProps) => (
                                             <PasswordContainer>
                                                  <LabelContainer>
                                                       <Label>
                                                            Action per Credit{' '}
                                                       </Label>
                                                  </LabelContainer>
                                                  <Input
                                                       $hasError={!!meta?.error}
                                                       type="ActionPerCredits"
                                                       placeholder="Insert ActionPerCredit"
                                                       {...field}
                                                  />
                                                  {meta?.error && (
                                                       <Error>
                                                            {meta.error}
                                                       </Error>
                                                  )}
                                             </PasswordContainer>
                                        )}
                                   </Field>
                                   <Field name="ReturnOnInvestment">
                                        {({field, meta}: FieldProps) => (
                                             <PasswordContainer>
                                                  <LabelContainer>
                                                       <Label>ROI </Label>
                                                  </LabelContainer>
                                                  <Input
                                                       $hasError={!!meta?.error}
                                                       type="date"
                                                       placeholder="Insert ROI"
                                                       min={
                                                            new Date()
                                                                 .toISOString()
                                                                 .split('T')[0]
                                                       }
                                                       {...field}
                                                  />
                                                  {meta?.error && (
                                                       <Error>
                                                            {meta.error}
                                                       </Error>
                                                  )}
                                             </PasswordContainer>
                                        )}
                                   </Field>

                                   <Field name="goal">
                                        {({field, meta}: FieldProps) => (
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
                                                       <Error>
                                                            {meta.error}
                                                       </Error>
                                                  )}
                                             </PasswordContainer>
                                        )}
                                   </Field>
                                   <PasswordContainer>
                                        <LabelContainer>
                                             <LabelTags>Tags </LabelTags>
                                        </LabelContainer>
                                        <Search
                                             handleFiltersChange={
                                                  handleFiltersTagsChange
                                             }
                                             options={tags}
                                             value={tags.map((tag) => tag.id)}
                                        />
                                   </PasswordContainer>
                              </MainFormContainerDivisor>
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
};

export default memo(FormProjectNew);
