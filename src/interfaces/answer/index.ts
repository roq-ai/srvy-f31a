import { QuestionInterface } from 'interfaces/question';
import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface AnswerInterface {
  id?: string;
  response: string;
  question_id: string;
  vendor_id: string;
  created_at?: any;
  updated_at?: any;

  question?: QuestionInterface;
  vendor?: VendorInterface;
  _count?: {};
}

export interface AnswerGetQueryInterface extends GetQueryInterface {
  id?: string;
  response?: string;
  question_id?: string;
  vendor_id?: string;
}
