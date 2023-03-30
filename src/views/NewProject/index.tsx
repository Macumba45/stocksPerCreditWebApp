import {FC, memo, useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Formik, Field, Form} from 'formik';
import {initialValues, validationSchema} from './constants';
import {
     FormContainer,
     InputContainer,
     Input,
     Error,
     FormButton,
     BackButton,
} from './styles';
import Search from '../../components/Search';
import { getTags } from '../../services/api/tag';
import { Tag } from '../../models/tag';

const FormProject: FC = () => {
     const navigate = useNavigate();
     const [isLoading, setIsLoading] = useState(false);
     const [tags, setTags] = useState<Tag[]>([]);
     const [tagsByFilter, setTagsByFilter] = useState<{selectedTags: Tag[]}>({
          selectedTags: [],
     });


     const getTagsData = useCallback(async () => {
          setIsLoading(true);
          const data = await getTags();
          console.log(data)
          if (data) {
               setTags(data);
          }
          setIsLoading(false);
     }, []);

     const onSubmitForm = (
          values: any,
          {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}
     ) => {
          // Handle submitting the form data
          console.log(values)
          setSubmitting(false);
     };

     const handleFiltersTagsChange = useCallback((newTags: any) => {
          setTagsByFilter((prevTags) => ({
               ...prevTags,
               ...newTags,
          }));
     }, []);

     const handleGoToBack = useCallback(() => {
          navigate('/dashboardemp');
     }, [navigate]);

     useEffect(() => {
          getTagsData();
     }, [getTagsData]);

     return (
          <FormContainer>
               <Formik
                    validationSchema={validationSchema}
                    onSubmit={onSubmitForm} // quitar, solo esta para que deje de chillar la maricona
                    initialValues={initialValues}
               >
                    <Form>
                         
                         <Field name="title">
                              {({field, meta}: {field: any; meta: any}) => (
                                   <InputContainer>
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
                         <Field name="description">
                              {({field, meta}: {field: any; meta: any}) => (
                                   <InputContainer>
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
                         <Field name="country">
                              {({field, meta}: {field: any; meta: any}) => (
                                   <InputContainer>
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
                              {({field, meta}: {field: any; meta: any}) => (
                                   <InputContainer>
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
                         <Field name="categories">
                              {({field, meta}: {field: any; meta: any}) => (
                                   <InputContainer>
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
                              {({field, meta}: {field: any; meta: any}) => (
                                   <InputContainer>
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
                              {({field, meta}: {field: any; meta: any}) => (
                                   <InputContainer>
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
                         <Field name="minimuminvestment">
                              {({field, meta}: {field: any; meta: any}) => (
                                   <InputContainer>
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
                              {({field, meta}: {field: any; meta: any}) => (
                                   <InputContainer>
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
                              {({field, meta}: {field: any; meta: any}) => (
                                   <InputContainer>
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
                         <FormButton type="submit">Create</FormButton>
                         {
                              <BackButton onClick={handleGoToBack}>
                                   Back
                              </BackButton>
                         }
                    </Form>
               </Formik>
               <InputContainer>
                              <p>Select tags to filter your search </p>
                              <Search
                              handleFiltersChange={handleFiltersTagsChange}
                                   options={tags}
                              />
                              {/* <ContainedButtons/> */}
                         </InputContainer>
          </FormContainer>
     );
};

export default memo(FormProject);
