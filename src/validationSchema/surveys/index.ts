import * as yup from 'yup';

export const surveyValidationSchema = yup.object().shape({
  title: yup.string().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
