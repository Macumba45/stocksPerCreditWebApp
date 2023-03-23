import { FC, memo, useCallback, useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { Formik, Field } from 'formik'
import { initialValues, validationSchema } from './constants'
import { FormContainer, InputContainer, Input, Error, FormButton, BackButton } from './styles'

const CreateProject: FC = () => {
    const navigate = useNavigate();

    const handleCreateProject = useCallback(() => {
        navigate('/dashboardemp');
    }, [navigate])
    // quitar, solo esta para que deje de chillar la maricona

    const handleGoToBack = useCallback(() => {
        navigate('/dashboardemp');
    }, [navigate])

    return (
        <FormContainer>
            <Formik
                validationSchema={validationSchema}
                onSubmit={handleCreateProject} // quitar, solo esta para que deje de chillar la maricona
                initialValues={initialValues}
            >
                <Form>
                    <Field name="image">
                        {({ field, meta }: { field: any; meta: any }) => (
                            <InputContainer>
                                <Input $hasError={!!meta?.error} type="url" placeholder="IMAGEN"
                                    {...field} />
                                {meta?.error && <Error>{meta.error}</Error>}
                            </InputContainer>
                        )}
                    </Field>
                    <Field name="title">
                        {({ field, meta }: { field: any; meta: any }) => (
                            <InputContainer>
                                <Input $hasError={!!meta?.error} type="text" placeholder="Write your title on..."
                                    {...field} />
                                {meta?.error && <Error>{meta.error}</Error>}
                            </InputContainer>
                        )}
                    </Field>
                    <Field name="description">
                        {({ field, meta }: { field: any; meta: any }) => (
                            <InputContainer>
                                <Input $hasError={!!meta?.error} type="text" placeholder="Write your description on..."
                                    {...field} />
                                {meta?.error && <Error>{meta.error}</Error>}
                            </InputContainer>
                        )}
                    </Field>
                    <Field name="country">
                        {({ field, meta }: { field: any; meta: any }) => (
                            <InputContainer>
                                <Input $hasError={!!meta?.error} type="text" placeholder="Write your country on..."
                                    {...field} />
                                {meta?.error && <Error>{meta.error}</Error>}
                            </InputContainer>
                        )}
                    </Field>
                    <Field name="city">
                        {({ field, meta }: { field: any; meta: any }) => (
                            <InputContainer>
                                <Input $hasError={!!meta?.error} type="text" placeholder="Write your city on..."
                                    {...field} />
                                {meta?.error && <Error>{meta.error}</Error>}
                            </InputContainer>
                        )}
                    </Field>
                    <Field name="categories">
                        {({ field, meta }: { field: any; meta: any }) => (
                            <InputContainer>
                                <Input $hasError={!!meta?.error} type="text" placeholder="Write your categories on..."
                                    {...field} />
                                {meta?.error && <Error>{meta.error}</Error>}
                            </InputContainer>
                        )}
                    </Field>
                    <Field name="collected">
                        {({ field, meta }: { field: any; meta: any }) => (
                            <InputContainer>
                                <Input $hasError={!!meta?.error} type="text" placeholder="Write your collected on..."
                                    {...field} />
                                {meta?.error && <Error>{meta.error}</Error>}
                            </InputContainer>
                        )}
                    </Field>
                    <Field name="investors">
                        {({ field, meta }: { field: any; meta: any }) => (
                            <InputContainer>
                                <Input $hasError={!!meta?.error} type="text" placeholder="Write your investors on..."
                                    {...field} />
                                {meta?.error && <Error>{meta.error}</Error>}
                            </InputContainer>
                        )}
                    </Field>
                    <Field name="minimuminvestment">
                        {({ field, meta }: { field: any; meta: any }) => (
                            <InputContainer>
                                <Input $hasError={!!meta?.error} type="text" placeholder="Write your minimuminvestment on..."
                                    {...field} />
                                {meta?.error && <Error>{meta.error}</Error>}
                            </InputContainer>
                        )}
                    </Field>
                    <Field name="goals">
                        {({ field, meta }: { field: any; meta: any }) => (
                            <InputContainer>
                                <Input $hasError={!!meta?.error} type="text" placeholder="Write your goals on..."
                                    {...field} />
                                {meta?.error && <Error>{meta.error}</Error>}
                            </InputContainer>
                        )}
                    </Field>
                    <Field name="limitvalue">
                        {({ field, meta }: { field: any; meta: any }) => (
                            <InputContainer>
                                <Input $hasError={!!meta?.error} type="text" placeholder="Write your limitvalue on..."
                                    {...field} />
                                {meta?.error && <Error>{meta.error}</Error>}
                            </InputContainer>
                        )}
                    </Field>
                    <FormButton type="submit">Create</FormButton>
                    {<BackButton onClick={handleGoToBack}>Back</BackButton>}
                </Form>
            </Formik>

        </FormContainer>
    );
};

export default memo(CreateProject);
