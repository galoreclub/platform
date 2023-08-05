import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { TextInput } from './TextInput'

export const SignInForm = () => {
  return (
    <>
      <h1 className="text-md font-helvetica-bold uppercase">
        sign in or create an account
      </h1>
      <Formik
        initialValues={{
          email: 'EMAIL',
          password: 'PASSWORD',
          remember: false,
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .max(64, 'Must be 64 characters or less.')
            .required('This field is required.'),
          password: Yup.string()
            .max(20, 'Must be 20 characters or less.')
            .required('This field is required.'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        <Form className="mx-4 flex w-full flex-col gap-1 lg:px-10">
          <TextInput
            label="email"
            name="email"
            type="email"
            placeholder="EMAIL"
          />
          <TextInput
            label="email"
            name="password"
            type="password"
            placeholder="PASSWORD"
          />
          <div className="my-2 flex flex-row items-center justify-between text-xs">
            <label>
              <Field type="checkbox" name="remember" />
              <span className="ml-1">Remember Me</span>
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="mx-auto mt-2 flex items-center justify-center bg-black px-10 py-2 text-xs uppercase text-white"
          >
            log in
          </button>
        </Form>
      </Formik>
      <div className="mt-2 flex w-full flex-row gap-4 lg:px-10">
        <span className="w-full border-b-[2px] border-solid border-black"></span>
        <span className="-mb-[8px] text-xs">or</span>
        <span className="w-full border-b-[2px] border-solid border-black"></span>
      </div>
      <div className="m-4 flex flex-col items-center gap-4 text-sm">
        <a href="#">CONTINUE WITH FACEBOOK</a>
        <a href="#">CONTINUE WITH GOOGLE</a>
      </div>
      <div className="mx-auto flex flex-col items-center gap-4 text-xs">
        NOT A MEMBER?
        <a
          href="#"
          className="m-auto flex items-center justify-center bg-black px-10 py-2 uppercase text-white"
        >
          CREATE AN ACCOUNT
        </a>
      </div>
    </>
  )
}
