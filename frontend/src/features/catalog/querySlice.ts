import { PayloadAction, createSlice, current } from '@reduxjs/toolkit'
import { addFilter, removeFilter } from './catalogSlice'

export interface QueryState {
  queryBuilder: any[]
  sortKey: SortKey
  reverse: Boolean
}

export type SortKey = 'TITLE' | 'CREATED_AT' | 'PRICE' | 'PRICE_REVERSE'

const initialState: QueryState = {
  queryBuilder: [],
  sortKey: 'TITLE',
  reverse: false,
}

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    updateSortKey: (state, action: PayloadAction<any>) => {
      state.sortKey = action.payload
    },
    updateSortDirection: (state, action: PayloadAction<any>) => {
      state.reverse = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addFilter, (state, action) => {
        state.queryBuilder.push(action.payload.value)
        console.log(current(state.queryBuilder))
      })
      .addCase(removeFilter, (state, action) => {
        state.queryBuilder = state.queryBuilder.filter(
          (filter) => filter !== action.payload.value
        )
      })
  },
})

export const { updateSortKey, updateSortDirection } = querySlice.actions

export default querySlice.reducer
