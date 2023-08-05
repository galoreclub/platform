import { useField } from 'formik'
import { useState } from 'react'

type InputProps = {
  label: string
  name: string
  validate?: (value: any) => undefined | string | Promise<any>
  id?: string
  type?: string
  multiple?: boolean
  value?: string
  placeholder?: string
}

export const PasswordInput = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props)
  const [type, setType] = useState('password')

  const handleToggle = (e: any) => {
    e.preventDefault()
    if (type === 'password') {
      setType('text')
    } else {
      setType('password')
    }
  }

  return (
    <>
      <label
        className="-m-1 h-1 w-1 overflow-hidden border-0 p-0"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <div className="relative m-0 flex w-full flex-row items-center p-0">
        <input
          {...field}
          {...props}
          type={type}
          className="w-full border-[1px] border-border p-2 text-[12px] text-black md:text-xs lg:text-sm"
        />
        <button
          className="absolute right-0 mr-2 flex items-center justify-around"
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
        </button>
      </div>
      {meta.touched && meta.error ? (
        <div className="text-sm text-error">{meta.error}</div>
      ) : null}
    </>
  )
}
