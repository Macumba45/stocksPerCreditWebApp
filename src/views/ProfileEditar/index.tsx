import {FC, memo, useCallback, useEffect, useMemo, useState} from 'react';
import {Field, Form, Formik} from 'formik';
import {validationSchema, initialValues} from './constants';
import {useNavigate} from 'react-router-dom';
import {getUserInfo} from '../../services/api/profile';
import {User} from '../../models/profile';
import {
     Container,
     Error,
     EditButton,
     InputContainer,
     Label,
     Input,
} from './styles';

const EditProfile = () => {
     const [userinfo, setUserInfo] = useState<User | null>(null);
     const [isEditing, setIsEditing] = useState<boolean>(false);
     const navigate = useNavigate();

     const getProfileInfo = useCallback(async () => {
          const userprofile = await getUserInfo();
          setUserInfo(userprofile);
     }, []);

     useEffect(() => {
          getProfileInfo();
     }, [getProfileInfo]);

     const handleActiveEdition = useCallback(async () => {
          setIsEditing(true);
     }, []);

     return (
          <Container>
               {!isEditing && (
                    <EditButton onClick={handleActiveEdition}>
                         Active Edition
                    </EditButton>
               )}
               <Formik
                    type="edit"
                    validationSchema={validationSchema}
                    onSubmit={handleActiveEdition}
                    initialValues={initialValues}
               >
                    <Form>
                         {isEditing && (
                              <EditButton type="submit">Edit</EditButton>
                         )}
                         <Field name="name">
                              {({field, meta}: {field: any; meta: any}) => (
                                   <InputContainer>
                                        <Label>Name</Label>
                                        <Input
                                             placeholder={userinfo?.name}
                                             disabled={!isEditing}
                                             $hasError={!!meta?.error}
                                             type="text"
                                             {...field}
                                        />
                                        {meta?.error && (
                                             <Error>{meta.error}</Error>
                                        )}
                                   </InputContainer>
                              )}
                         </Field>
                         <Field name="lastName">
                              {({field, meta}: {field: any; meta: any}) => (
                                   <InputContainer>
                                        <Label>LastName</Label>
                                        <Input
                                             placeholder={userinfo?.lastName}
                                             disabled={!isEditing}
                                             $hasError={!!meta?.error}
                                             type="text"
                                             {...field}
                                        />
                                        {meta?.error && (
                                             <Error>{meta.error}</Error>
                                        )}
                                   </InputContainer>
                              )}
                         </Field>
                         <Field name="email">
                              {({field, meta}: {field: any; meta: any}) => (
                                   <InputContainer>
                                        <Label>Email</Label>
                                        <Input
                                             placeholder={userinfo?.email}
                                             disabled={!isEditing}
                                             $hasError={!!meta?.error}
                                             type="text"
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
                                        <Label>Country</Label>
                                        <Input
                                             placeholder={userinfo?.country}
                                             disabled={!isEditing}
                                             $hasError={!!meta?.error}
                                             type="text"
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
                                        <Label>City</Label>
                                        <Input
                                             placeholder={userinfo?.city}
                                             disabled={!isEditing}
                                             $hasError={!!meta?.error}
                                             type="text"
                                             {...field}
                                        />
                                        {meta?.error && (
                                             <Error>{meta.error}</Error>
                                        )}
                                   </InputContainer>
                              )}
                         </Field>
                         <Field name="phone">
                              {({field, meta}: {field: any; meta: any}) => (
                                   <InputContainer>
                                        <Label>Phone</Label>
                                        <Input
                                             placeholder={userinfo?.phone}
                                             disabled={!isEditing}
                                             $hasError={!!meta?.error}
                                             type="phone"
                                             {...field}
                                        />
                                        {meta?.error && (
                                             <Error>{meta.error}</Error>
                                        )}
                                   </InputContainer>
                              )}
                         </Field>
                    </Form>
               </Formik>
          </Container>
     );
};

export default memo(EditProfile);
