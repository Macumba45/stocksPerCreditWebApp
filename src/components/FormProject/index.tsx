import {FC, memo, useCallback, useEffect, useState} from 'react';
import {initialValues} from './constants';
import {Field, FieldProps, Formik} from 'formik';
import {validationSchema} from './constants';
import {createProject} from '../../services/api/project';
import Search from '../../components/Search';
import {getTags} from '../../services/api/tag';
import {Tag} from '../../models/tag';
import {TextField} from '@mui/material';
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
     ButtonSignUpContainer,
     ButtonSignUp,
     Error,
     NameContainer,
     MainFormContainerDivisor,
     MainFormContainerStart,
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
                              style={{
                                   backgroundColor: '#7E1B75',
                                   color: 'white',
                              }}
                              color="primary"
                              autoFocus
                         >
                              Close
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
                                                  <TextField
                                                       error={!!meta?.error}
                                                       helperText={meta?.error}
                                                       type="url"
                                                       placeholder="Insert your URL"
                                                       {...field}
                                                       style={{width: '350px'}}
                                                  />
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
                                                  <TextField
                                                       error={!!meta?.error}
                                                       helperText={meta?.error}
                                                       type="text"
                                                       placeholder="Insert your title here"
                                                       {...field}
                                                       style={{width: '350px'}}
                                                  />
                                             </NameContainer>
                                        )}
                                   </Field>
                                   <Field name="description">
                                        {({field, meta}: FieldProps) => (
                                             <NameContainer>
                                                  <LabelContainer>
                                                       <Label>
                                                            Description*
                                                       </Label>
                                                  </LabelContainer>
                                                  <TextField
                                                       error={!!meta?.error}
                                                       helperText={meta?.error}
                                                       multiline
                                                       rows={4} // aquí se define el número de filas
                                                       placeholder="Insert your Description"
                                                       {...field}
                                                       style={{width: '350px'}}
                                                  />
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
                                                  <TextField
                                                       error={!!meta?.error}
                                                       helperText={meta?.error}
                                                       multiline
                                                       rows={1} // aquí se define el número de filas
                                                       placeholder="Insert your Country"
                                                       {...field}
                                                       style={{width: '350px'}}
                                                  />
                                             </EmailContainer>
                                        )}
                                   </Field>
                                   <Field name="city">
                                        {({field, meta}: FieldProps) => (
                                             <EmailContainer>
                                                  <LabelContainer>
                                                       <Label>City* </Label>
                                                  </LabelContainer>
                                                  <TextField
                                                       error={!!meta?.error}
                                                       helperText={meta?.error}
                                                       multiline
                                                       rows={1} // aquí se define el número de filas
                                                       placeholder="Insert your City"
                                                       {...field}
                                                       style={{width: '350px'}}
                                                  />
                                             </EmailContainer>
                                        )}
                                   </Field>
                                   <Field name="duration">
                                        {({field, meta}: FieldProps) => (
                                             <NameContainer>
                                                  <LabelContainer>
                                                       <Label>Duration* </Label>
                                                  </LabelContainer>
                                                  <TextField
                                                       error={!!meta?.error}
                                                       type="date"
                                                       placeholder="Insert Duration Project"
                                                       style={{width: '350px'}}
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
                                                       <Label>
                                                            History of your
                                                            Project*
                                                       </Label>
                                                  </LabelContainer>
                                                  <TextField
                                                       error={!!meta?.error}
                                                       helperText={meta?.error}
                                                       multiline
                                                       rows={4} // aquí se define el número de filas
                                                       placeholder="Insert your History"
                                                       {...field}
                                                       style={{width: '350px'}}
                                                  />
                                             </NameContainer>
                                        )}
                                   </Field>
                              </MainFormContainerDivisor>
                              <MainFormContainerDivisor>
                                   <Field name="commerce">
                                        {({field, meta}: FieldProps) => (
                                             <EmailContainer>
                                                  <LabelContainer>
                                                       <Label>Commerce* </Label>
                                                  </LabelContainer>
                                                  <TextField
                                                       error={!!meta?.error}
                                                       helperText={meta?.error}
                                                       multiline
                                                       rows={4} // aquí se define el número de filas
                                                       placeholder="Insert your commerce"
                                                       {...field}
                                                       style={{width: '350px'}}
                                                  />
                                             </EmailContainer>
                                        )}
                                   </Field>
                                   <Field name="proposal">
                                        {({field, meta}: FieldProps) => (
                                             <EmailContainer>
                                                  <LabelContainer>
                                                       <Label>Proposal* </Label>
                                                  </LabelContainer>
                                                  <TextField
                                                       error={!!meta?.error}
                                                       helperText={meta?.error}
                                                       multiline
                                                       rows={4} // aquí se define el número de filas
                                                       placeholder="Insert your proposals"
                                                       {...field}
                                                       style={{width: '350px'}}
                                                  />
                                             </EmailContainer>
                                        )}
                                   </Field>
                                   <Field name="cost">
                                        {({field, meta}: FieldProps) => (
                                             <EmailContainer>
                                                  <LabelContainer>
                                                       <Label>
                                                            Estimated Cost
                                                            Project*{' '}
                                                       </Label>
                                                  </LabelContainer>
                                                  <TextField
                                                       error={!!meta?.error}
                                                       helperText={meta?.error}
                                                       multiline
                                                       rows={1} // aquí se define el número de filas
                                                       placeholder="Insert your Cost Project"
                                                       {...field}
                                                       style={{width: '350px'}}
                                                  />
                                             </EmailContainer>
                                        )}
                                   </Field>
                                   <Field name="currency">
                                        {({field, meta}: FieldProps) => (
                                             <EmailContainer>
                                                  <LabelContainer>
                                                       <Label>Currency* </Label>
                                                  </LabelContainer>
                                                  <TextField
                                                       error={!!meta?.error}
                                                       helperText={meta?.error}
                                                       multiline
                                                       rows={1} // aquí se define el número de filas
                                                       placeholder="Insert your currency"
                                                       {...field}
                                                       style={{width: '350px'}}
                                                  />
                                             </EmailContainer>
                                        )}
                                   </Field>
                              </MainFormContainerDivisor>
                              <MainFormContainerDivisor>
                                   <Field name="minimuminvestment">
                                        {({field, meta}: FieldProps) => (
                                             <EmailContainer>
                                                  <LabelContainer>
                                                       <Label>
                                                            Minimun Inversion:*{' '}
                                                       </Label>
                                                  </LabelContainer>
                                                  <TextField
                                                       error={!!meta?.error}
                                                       helperText={meta?.error}
                                                       multiline
                                                       rows={1} // aquí se define el número de filas
                                                       placeholder="Insert your Min invest"
                                                       {...field}
                                                       style={{width: '350px'}}
                                                  />
                                             </EmailContainer>
                                        )}
                                   </Field>
                                   <Field name="actionPerCredit">
                                        {({field, meta}: FieldProps) => (
                                             <EmailContainer>
                                                  <LabelContainer>
                                                       <Label>
                                                            Action per Credit:*{' '}
                                                       </Label>
                                                  </LabelContainer>
                                                  <TextField
                                                       error={!!meta?.error}
                                                       helperText={meta?.error}
                                                       multiline
                                                       rows={1} // aquí se define el número de filas
                                                       placeholder="Insert your Action per Credit"
                                                       {...field}
                                                       style={{width: '350px'}}
                                                  />
                                             </EmailContainer>
                                        )}
                                   </Field>
                                   <Field name="ReturnOnInvestment">
                                        {({field, meta}: FieldProps) => (
                                             <PasswordContainer>
                                                  <LabelContainer>
                                                       <Label>ROI </Label>
                                                  </LabelContainer>
                                                  <TextField
                                                       error={!!meta?.error}
                                                       type="date"
                                                       placeholder="Insert ROI"
                                                       style={{width: '350px'}}
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
                                             <EmailContainer>
                                                  <LabelContainer>
                                                       <Label>
                                                            Your Goal Project:*{' '}
                                                       </Label>
                                                  </LabelContainer>
                                                  <TextField
                                                       error={!!meta?.error}
                                                       helperText={meta?.error}
                                                       multiline
                                                       rows={1} // aquí se define el número de filas
                                                       placeholder="Insert your Your goal Project"
                                                       {...field}
                                                       style={{width: '350px'}}
                                                  />
                                             </EmailContainer>
                                        )}
                                   </Field>
                                   <PasswordContainer>
                                        <LabelContainer>
                                             <Label>Tags </Label>
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
