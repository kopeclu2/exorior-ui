import * as yup from "yup";
import React from "react";
const errors = {
  INVALID_EMAIL_ERROR: "INVALID_EMAIL_ERROR",
  FIELD_REQUIRED_ERROR: "FIELD_REQUIRED_ERROR",
  NO_NUMBER_ERROR: "NO_NUMBER_ERROR",
  MIN_9_ERROR: "MIN_9_ERROR",
  MIN_8_ERROR: "MIN_8_ERROR",
  MIN_6_ERROR: "MIN_6_ERROR",
  PASSWORD_ERROR: "PASSWORD_ERROR",
  PASSWORD_NO_MATCH: "PASSWORD_NO_MATCH",
  WRONG_PASSWORD: "WRONG_PASSWORD",
  NON_UNIQUE_USERNAME: "NON_UNIQUE_USERNAME",
  NON_UNIQUE_EMAIL: "NON_UNIQUE_EMAIL",
  GDPR_CONFIRM: "GDPR_CONFIRM",
};

export const cFieldNames = {
  firstName: 'firstName',
  lastName: 'lastName',
  username: 'username',
  email: 'email',
  phone: 'phone',
  role: 'role',
  date: 'date',
  time: 'time',
  check: 'check',
  switch: 'switch',
  gender: 'gender'

};

export const validationSchema = yup.object().shape({
  [cFieldNames.firstName]: yup.string().required("error"),
  [cFieldNames.lastName]: yup.string().required("error"),
  [cFieldNames.username]: yup.string().required("error"),
  [cFieldNames.email]: yup
    .string()
    .email("error")
    .required("error"),
  [cFieldNames.phone]: yup.string().required("error"),
  [cFieldNames.role]: yup.string().required("error"),
});
