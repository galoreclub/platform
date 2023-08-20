import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addFilter, removeFilter } from './catalogSlice'

type InputProps = {
  label: string
  name: string
  type: string
  id?: string
  value?: string | number
  placeholder?: string
}

export const FilterInput = ({ label, ...props }: InputProps) => {
  const productFilters = useAppSelector((state) => state.catalog.productFilters)
  const dispatch = useAppDispatch()
  const checked = productFilters.includes(props.value)

  const filterHandler = (e: any) => {
    const { value, checked } = e.target
    if (checked) {
      dispatch(addFilter({ value }))
    }
    if (!checked) {
      dispatch(removeFilter({ value }))
    }
  }

  return (
    <>
      <label
        className="mb-0 flex flex-1 gap-2 text-sm"
        htmlFor={props.id || props.name}
      >
        <input
          {...props}
          type={props.type}
          onChange={filterHandler}
          checked={checked}
        />
        <span className="flex w-full">{label}</span>
      </label>
    </>
  )
}
