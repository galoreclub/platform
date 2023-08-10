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
      <div className="flex flex-col">
        <label className="mb-0 text-sm" htmlFor={props.id || props.name}>
          {label}
        </label>
        <input
          {...field}
          {...props}
          className="border-[0.4px] border-border/50 p-2 text-[12px] text-black md:text-xs lg:text-sm"
        />
        {meta.touched && meta.error ? (
          <div className="text-sm text-error">{meta.error}</div>
        ) : null}
      </div>
    </>
  )
}
