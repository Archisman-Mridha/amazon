import { FormikProvider, useFormik } from "formik"
import { AiOutlineUser } from "react-icons/ai"
import { FormField } from "./formfield.component"

export default {

    title: "FormField",
    component: FormField
}

export const RegularFormField= ( ) => {

    const formik= useFormik({

        initialValues: { name: "" },
        onSubmit: ( ) => { }
    })

    return (
        <FormikProvider value= {formik}>
            <FormField
                fieldName= "name"
                placeholder= "Full Name"
                inputLeftElement= {<AiOutlineUser />}
            />
        </FormikProvider>
    )
}