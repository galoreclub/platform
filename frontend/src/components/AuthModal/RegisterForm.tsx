import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { TextInput } from '../TextInput'
import { PasswordInput } from '../PasswordInput'

export const RegisterForm = ({ toggle, setNewUser }: any) => {
  return (
    <>
      <div className="m-auto flex w-10/12 flex-col items-center justify-center gap-4 bg-white p-6 md:w-6/12 lg:w-4/12 lg:p-10">
        <div className="flex w-full flex-row items-center justify-between">
          <button
            onClick={() => setNewUser(false)}
            className="h-4 w-4 flex-shrink-0 cursor-pointer"
          >
            <svg
              width="13"
              height="16"
              viewBox="0 0 13 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1L1 12.5L12 24"
                stroke="black"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => toggle(false)}
            className="h-4 w-4 flex-shrink-0 cursor-pointer text-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              fill="none"
              viewBox="0 0 18 17"
            >
              <path
                d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        <h1 className="text-md font-helvetica-bold uppercase">
          create an account
        </h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            signUp: false,
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
            passwordConfirmation: Yup.string().oneOf(
              [Yup.ref('password')],
              'Passwords must match'
            ),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
              toggle()
            }, 400)
          }}
        >
          <Form className="mx-4 flex w-full flex-col gap-4 lg:px-10">
            <div className="self-start text-xs">
              *Indicates a required field
            </div>

            <TextInput label="*First Name" name="firstName" type="text" />
            <TextInput label="*Last Name" name="lastName" type="text" />
            <TextInput label="*Email Address" name="email" type="email" />
            <PasswordInput label="*Password" name="password" />
            <PasswordInput
              label="*Confirm Password"
              name="passwordConfirmation"
            />
            <div className="my-2 flex flex-row items-center justify-start text-xs">
              <label>
                <Field type="checkbox" name="signUp" />
                <span className="ml-1">
                  Sign up to receive our monthly news letter, updates on new
                  arrivals, promotions and more!
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="mx-auto mt-2 flex items-center justify-center bg-black px-10 py-2 text-xs uppercase text-white"
            >
              create account
            </button>
            <div className="m-auto p-2 text-center text-[10px]">
              By registering your details, you agree with our{' '}
              <a className="underline" href="#">
                Terms & Conditions
              </a>{' '}
              and{' '}
              <a className="underline" href="#">
                Privacy and Cookie Policy
              </a>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  )
}
