import { addressValidator, emailValidator, nameValidator, passwordValidator, phoneValidator } from "@./web"
import { object } from "yup"

export const registerValidationSchema= object( ).shape({

    name: nameValidator,
    email: emailValidator,
    phone: phoneValidator,
    address: addressValidator,
    password: passwordValidator
})