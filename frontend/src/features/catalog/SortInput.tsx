import { useAppDispatch } from '../../app/hooks'
import { SortKey, updateSortDirection, updateSortKey } from './querySlice'

type InputProps = {
  label: string
  name: string
  type: string
  id?: string
  value: SortKey
  placeholder?: string
}

export const SortInput = ({ label, ...props }: InputProps) => {
  const dispatch = useAppDispatch()

  const handleSort = (e: any) => {
    const { value } = e.target
    if (value === 'PRICE_REVERSE') {
      dispatch(updateSortDirection(true))
      dispatch(updateSortKey('PRICE'))
    } else {
      dispatch(updateSortDirection(false))
      dispatch(updateSortKey(value))
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
          onChange={handleSort}
          value={props.value}
        />
        <span className="flex w-full">{label}</span>
      </label>
    </>
  )
}
