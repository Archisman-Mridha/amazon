import { string } from "yup"
import "yup-phone"

export const nameValidator= string( )
    .required("name is required")
    .min(5, "minimum size of name should be 5")

export const emailValidator= string( )
    .required("email is required")
    .email("email is invalid")

export const phoneValidator= string( )
    .required("phone is required")
    .phone(undefined, true, "phone number should is invalid")

export const addressValidator= string( )
    .required("address is required")

export const passwordValidator= string( )
    .required("password is required")
    .min(6, "minimum size of password should be 6")