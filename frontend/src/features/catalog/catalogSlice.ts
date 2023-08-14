import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CatalogState {
  products: any[]
  vendors: any[]
  sortKey: SortKey
  vendorFilters: any[]
  sizeFilters: any[]
  colorFilters: any[]
  priceFilters: any[]
  loading: boolean
  error: any
}

type SortKey = 'TITLE' | 'CREATED_AT' | 'PRICE'

const initialState: CatalogState = {
  products: [],
  vendors: [],
  sortKey: 'TITLE',
  vendorFilters: [],
  sizeFilters: [],
  colorFilters: [],
  priceFilters: [],
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
    addVendorFilter: (state, action: PayloadAction<any>) => {
      state.vendorFilters.push(action.payload)
    },
    removeVendorFilter: (state, action: PayloadAction<any>) => {
      state.vendorFilters.filter((filter) => filter !== action.payload)
    },
    addSizeFilter: (state, action: PayloadAction<any>) => {
      state.sizeFilters.push(action.payload)
    },
    addColorFilter: (state, action: PayloadAction<any>) => {
      state.colorFilters.push(action.payload)
    },
    addPriceFilter: (state, action: PayloadAction<any>) => {
      state.priceFilters.push(action.payload)
    },
  },
})

export const { loadProducts, loadVendors } = catalogSlice.actions

export default catalogSlice.reducer
