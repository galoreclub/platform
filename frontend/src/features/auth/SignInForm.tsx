import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { useMutation } from '@apollo/client'
import { CUSTOMER_LOGIN } from '../../app/graphql/mutations'
import { authSuccess } from './authSlice'

export const SignInForm = ({ toggle, setNewUser }: any) => {
  const [type, setType] = useState('password')
  const emailRef = useRef<HTMLInputElement>(null)
  const errRef = useRef<HTMLDivElement>(null)
  const [errMsg, setErrMsg] = useState('')
  const dispatch = useAppDispatch()
  const [submitSignIn, { data, loading, error }] = useMutation(CUSTOMER_LOGIN)

  const handleToggle = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    if (type === 'password') {
      setType('text')
    } else {
      setType('password')
    }
  }

  useEffect(() => {
    if (data) {
      dispatch(
        authSuccess({
          ...data.customerAccessTokenCreate.customerAccessToken,
        })
      )
    } else if (error) {
      setErrMsg(error.message)
      errRef.current?.focus()
    } else {
      emailRef.current?.focus()
    }
  }, [data, error])

  if (loading) {
    console.log('loading...')
  }

  return (
    <>
      <div className="m-auto flex flex-col items-center justify-center gap-4 bg-white p-6 lg:w-6/12 lg:p-10 xl:w-4/12">
        <button
          onClick={() => toggle(false)}
          className="ml-auto h-4 w-4 flex-shrink-0 cursor-pointer text-xl"
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
        <h1 className="font-helvetica-bold text-base uppercase">
          sign in or create an account
        </h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
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
          onSubmit={(credentials, { setSubmitting }) => {
            // destructure form submission values to exclude remember me option (not accepted by storefront api)
            const { remember, ...input } = credentials
            submitSignIn({
              variables: { input },
            })
            setSubmitting(false)
          }}
        >
          <Form className="mx-4 flex w-full flex-col gap-1 lg:px-10">
            <label
              className="-m-1 h-1 w-1 overflow-hidden border-0 p-0"
              htmlFor="email"
            >
              email
            </label>
            <Field
              className="border-[0.4px] border-solid border-border p-1 text-xs"
              type="text"
              name="email"
              placeholder="EMAIL"
              innerRef={emailRef}
            />
            <ErrorMessage
              className="text-xs text-error md:text-sm"
              name="email"
              component="div"
            />

            <label
              className="-m-1 h-1 w-1 overflow-hidden border-0 p-0"
              htmlFor="email"
            >
              password
            </label>
            <div className="relative m-0 flex w-full flex-row items-center p-0">
              <Field
                className="w-full border-[0.4px] border-solid border-border p-1 text-xs"
                type={type}
                name="password"
                placeholder="PASSWORD"
              />
              <div
                className="absolute right-0 mr-2 flex cursor-pointer items-center justify-around"
                onClick={handleToggle}
              >
                <span
                  className={`${
                    type === 'password' ? '' : 'hidden'
                  } material-symbols-outlined`}
                >
                  visibility
                </span>
                <span
                  className={`${
                    type === 'text' ? '' : 'hidden'
                  } material-symbols-outlined`}
                >
                  visibility_off
                </span>
              </div>
            </div>

            <ErrorMessage
              className="text-xs text-error md:text-sm"
              name="password"
              component="div"
            />
            <div className="my-2 flex flex-row items-center justify-between text-xs">
              <label>
                <Field type="checkbox" name="remember" />
                <span className="ml-1">Remember Me</span>
              </label>
              <a href="/account/recover">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="mx-auto mt-2 flex items-center justify-center bg-black px-10 py-2 text-xs uppercase text-white"
            >
              log in
            </button>
            <div
              ref={errRef}
              className={`${
                errMsg ? 'block' : 'hidden'
              } text-xs text-error md:text-sm`}
              aria-live="assertive"
            >
              {errMsg}
            </div>
          </Form>
        </Formik>
        <div className="mt-2 flex w-full flex-row gap-4 lg:px-10">
          <span className="w-full border-b-[2px] border-solid border-black"></span>
          <span className="-mb-[8px] text-xs">or</span>
          <span className="w-full border-b-[2px] border-solid border-black"></span>
        </div>
        <div className="m-4 flex flex-col items-center gap-4 text-sm">
          {/* Social logins not possible without multipass or app extension */}
          <a href="#">CONTINUE WITH FACEBOOK</a>
          <a href="#">CONTINUE WITH GOOGLE</a>
        </div>
        <div className="mx-auto flex flex-col items-center gap-4 text-xs">
          NOT A MEMBER?
          <button
            onClick={() => setNewUser(true)}
            className="m-auto flex items-center justify-center bg-black px-10 py-2 uppercase text-white"
          >
            CREATE AN ACCOUNT
          </button>
        </div>
      </div>
    </>
  )
}
