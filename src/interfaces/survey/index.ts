import { QuestionInterface } from 'interfaces/question';
import { VendorInterface } from 'interfaces/vendor';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SurveyInterface {
  id?: string;
  title: string;
  status: string;
  organization_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  question?: QuestionInterface[];
  vendor?: VendorInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    question?: number;
    vendor?: number;
  };
}

export interface SurveyGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  status?: string;
  organization_id?: string;
  user_id?: string;
}
