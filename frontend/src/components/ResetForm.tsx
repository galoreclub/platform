import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { TextInput } from './TextInput'
import { Dialog } from './Dialog'
import { useState } from 'react'
import { PasswordInput } from './PasswordInput'

export const ResetForm = () => {
  const [showDialog, setShowDialog] = useState(false)

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .max(64, 'Must be 64 characters or less.')
            .required('This field is required.'),
          password: Yup.string()
            .max(20, 'Must be 20 characters or less.')
            .min(10, 'Must be at least 10 characters.')
            .matches(/^(?=.*[a-z])/, 'Must contain one lowercase character.')
            .matches(/^(?=.*[A-Z])/, 'Must contain one uppercase character.')
            .matches(/^(?=.*[0-9])/, 'Must contain one number character.')
            .matches(
              /^(?=.*[!@#\$%\^&\*])/,
              'Must contain one special character.'
            )
            .required('This field is required.'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
            setShowDialog(true)
          }, 400)
        }}
      >
        <Form className="flex w-full flex-col gap-1 lg:px-10">
          <h1 className="font-helvetica-bold text-lg uppercase">
            reset your password
          </h1>
          <p className="text-xs">*Indicates a required field</p>
          <p className="font-helvetica-bold">*EMAIL</p>
          <TextInput label="email" name="email" type="email" />
          <p className="font-helvetica-bold">*PASSWORD</p>
          <PasswordInput label="password" name="password" />
          <p className="text-xs">
            Must be 10 or more characters and contain at least one uppercase
            letter, lowercase letter, number, and symbol.
          </p>
          <button
            type="submit"
            className="mx-auto mt-2 flex items-center justify-center bg-black px-10 py-2 text-xs uppercase text-white"
          >
            change password
          </button>
        </Form>
      </Formik>
      <Dialog
        showDialog={showDialog}
        setShowDialog={() => setShowDialog(false)}
        message="your password has been changed"
      />
    </>
  )
}
