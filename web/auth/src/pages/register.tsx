import { Button, Center } from "@chakra-ui/react"
import { FC } from "react"
import { AiOutlineUser } from "react-icons/ai"
import { Formik, Form } from "formik"
import { FormField } from "../components/formfield/formfield.component"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { BsArrowRightCircle, BsTelephone } from "react-icons/bs"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { FiKey } from "react-icons/fi"
import { registerValidationSchema } from "../validators/register.validationschema"

const initialValues= {

    name: "",
    email: "",
    phone: "",
    address: "",
    password: ""
}

function submitHandler( ) { }

export const Register: FC= ( ) => {

    return (
        <Center>

            <Formik
                initialValues= {initialValues}
                validationSchema= {registerValidationSchema}
                onSubmit= {submitHandler}
            >
                {
                    ({ isSubmitting, handleSubmit }) => (

                        <Form>

                            <FormField
                                fieldName= "name"
                                placeholder= "Full Name"
                                inputLeftElement= {<AiOutlineUser />}
                            />

                            <FormField
                                fieldName= "email"
                                placeholder= "Personal Email"
                                inputLeftElement= {<MdOutlineAlternateEmail />}
                            />

                            <FormField
                                fieldName= "phone"
                                placeholder= "Phone Number"
                                inputLeftElement= {<BsTelephone />}
                            />

                            <FormField
                                fieldName= "address"
                                placeholder= "Delivery Address"
                                inputLeftElement= {<HiOutlineLocationMarker />}
                            />

                            <FormField
                                fieldName= "password"
                                placeholder= "Secure Password"
                                inputLeftElement= {<FiKey />}
                            />

                            <Button
                                type= "submit"
                                rightIcon= {<BsArrowRightCircle />}
                                isLoading= {isSubmitting}
                                onSubmit={( ) => handleSubmit( )}
                            >
                                Submit
                            </Button>

                        </Form>
                    )
                }
            </Formik>

        </Center>
    )
}