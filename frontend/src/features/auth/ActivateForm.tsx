import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { TextInput } from '../../components/TextInput'
import { Dialog } from '../../components/Dialog'
import { useState } from 'react'
import { PasswordInput } from '../../components/PasswordInput'

export const ActivateForm = () => {
  const [showDialog, setShowDialog] = useState(false)

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
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
          passwordConfirmation: Yup.string().oneOf(
            [Yup.ref('password')],
            'Passwords must match'
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
            setShowDialog(true)
          }, 400)
        }}
      >
        <Form className="flex w-full flex-col gap-2 lg:px-10">
          <h1 className="font-helvetica-bold text-lg uppercase">
            Activate Account
          </h1>
          <p className="text-xs">*Indicates a required field</p>
          <TextInput label="*Email" name="email" type="email" />
          <PasswordInput label="*Password" name="password" />
          <PasswordInput
            label="*Confirm Password"
            name="passwordConfirmation"
          />
          <p className="text-xs">
            Must be 10 or more characters and contain at least one uppercase
            letter, lowercase letter, number, and symbol.
          </p>
          <button
            type="submit"
            className="mx-auto mt-2 flex items-center justify-center bg-black px-10 py-2 text-xs uppercase text-white"
          >
            Activate Account
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
