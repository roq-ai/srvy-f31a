import * as yup from 'yup';

export const answerValidationSchema = yup.object().shape({
  response: yup.string().required(),
  question_id: yup.string().nullable().required(),
  vendor_id: yup.string().nullable().required(),
});
