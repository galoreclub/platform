import { useField } from 'formik'

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

export const TextInput = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label
        className="-m-1 h-1 w-1 overflow-hidden border-0 p-0"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        className="border-[1px] border-border p-2 text-[12px] text-black md:text-xs lg:text-sm"
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-error">{meta.error}</div>
      ) : null}
    </>
  )
}
