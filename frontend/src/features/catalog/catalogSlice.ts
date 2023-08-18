import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CatalogState {
  openMenus: any[]
  products: any[]
  vendors: any[]
  productFilters: any[]
  query: any[]
  loading: boolean
  error: any
}

const initialState: CatalogState = {
  openMenus: [],
  products: [],
  vendors: [],
  productFilters: [],
  query: [],
  loading: false,
  error: null,
}

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    loadProducts: (state, action: PayloadAction<any>) => {
      state.products = action.payload
    },
    loadVendors: (state, action: PayloadAction<any>) => {
      state.vendors = action.payload
    },
    addFilter: (state, action: PayloadAction<any>) => {
      state.productFilters.push(action.payload.value)
    },
    removeFilter: (state, action: PayloadAction<any>) => {
      state.productFilters = state.productFilters.filter(
        (filter) => filter !== action.payload.value
      )
    },
    toggleMenu: (state, action: PayloadAction<any>) => {
      if (state.openMenus.includes(action.payload)) {
        state.openMenus = state.openMenus.filter(
          (menu) => menu !== action.payload
        )
      } else {
        state.openMenus.push(action.payload)
        state.openMenus = state.openMenus.filter(
          (menu) => menu == action.payload
        )
      }
    },
  },
})

export const {
  loadProducts,
  loadVendors,
  addFilter,
  removeFilter,
  toggleMenu,
} = catalogSlice.actions

export default catalogSlice.reducer
