import { Types } from "mongoose";


export interface TCampus {
  campusName: string;
  addressLine1: string;
  addressLine2: string;
  college: string
  country: string
  timezone: string
  currency: string
  notificationEmail: string;
  contactPerson: string
  logo: string;
}
