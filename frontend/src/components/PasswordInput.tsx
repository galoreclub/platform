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
    e.stopPropagation()
    if (type === 'password') {
      setType('text')
    } else {
      setType('password')
    }
  }

  return (
    <>
      <div className="flex flex-col">
        <label className="mb-0 text-sm" htmlFor={props.id || props.name}>
          {label}
        </label>
        <div className="relative m-0 flex w-full flex-row items-center p-0">
          <input
            {...field}
            {...props}
            type={type}
            className="w-full border-[0.4px] border-border/50 p-2 text-[12px] text-black md:text-xs lg:text-sm"
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
        {meta.touched && meta.error ? (
          <div className="text-sm text-error">{meta.error}</div>
        ) : null}
      </div>
    </>
  )
}
