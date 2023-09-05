import { GET_VENDORS } from '../../app/graphql/queries'
import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import { flattenConnection } from '@shopify/hydrogen-react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { loadVendors, toggleMenu } from './catalogSlice'
import { FilterInput } from './FilterInput'
import React from 'react'
import { SortInput } from './SortInput'
import { LoadingPage } from '../../components/Loading'

const sizeList = ['XS', 'S', 'M', 'L', 'XL ']
const colorList = [
  'black',
  'white',
  'grey',
  'red',
  'pink',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'brown',
  'beige',
  'gold',
  'silver',
  'multi',
]
const priceList = [
  { min: 0, max: 150 },
  { min: 150, max: 300 },
  { min: 300, max: 500 },
  { min: 500, max: 1000 },
  { min: 1000 },
]

export const CatalogMenu = ({ data }: { data: any }) => {
  const { data: vendorsData, loading, error } = useQuery(GET_VENDORS)
  const vendorList = useAppSelector((state) => state.catalog.vendors)
  const menus = useAppSelector((state) => state.catalog.openMenus)
  const dispatch = useAppDispatch()

  let content: React.JSX.Element | undefined

  useEffect(() => {
    if (vendorsData) {
      const vendorArray = flattenConnection(vendorsData.products).map(
        (node: any) => {
          return node.vendor
        }
      )
      const uniqueVendors = [...new Set(vendorArray)]
      dispatch(loadVendors(uniqueVendors))
    }
  }, [vendorsData])

  if (loading && vendorList.length < 1) {
    content = <LoadingPage />
  } else if (error) {
    content = <>{error.message}</>
  } else {
    content = (
      <>
        <nav className="flex w-full flex-row justify-evenly gap-2 text-xs md:my-10 md:justify-start">
          <div>
            <button
              id="sort-menu"
              onClick={(e: any) => dispatch(toggleMenu(e.target.id))}
            >
              SORT BY
            </button>
            <div className="relative">
              <div
                className={`${
                  menus.includes('sort-menu') ? 'block' : 'hidden'
                } absolute -mr-[9999999999px] flex-1 flex-col bg-white p-2 text-black`}
              >
                <SortInput
                  label="Newest"
                  name="sort"
                  type="radio"
                  value="CREATED_AT"
                />
                <SortInput
                  label="Lowest Priced"
                  name="sort"
                  type="radio"
                  value="PRICE"
                />
                <SortInput
                  label="Highest Priced"
                  name="sort"
                  type="radio"
                  value="PRICE_REVERSE"
                />
              </div>
            </div>
          </div>
          <div>
            <button
              id="vendor-menu"
              onClick={(e: any) => dispatch(toggleMenu(e.target.id))}
            >
              BRAND
            </button>
            <div className="relative">
              <div
                className={`${
                  menus.includes('vendor-menu') ? 'block' : 'hidden'
                } absolute -mr-[9999999999px] flex-1 flex-col bg-white p-2 text-black`}
              >
                {vendorList.map((vendor) => (
                  <FilterInput
                    key={vendor}
                    label={vendor}
                    name="vendor"
                    type="checkbox"
                    value={vendor}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <button
              id="size-menu"
              onClick={(e: any) => dispatch(toggleMenu(e.target.id))}
            >
              SIZE
            </button>
            <div className="relative flex flex-col gap-2">
              <div
                className={`${
                  menus.includes('size-menu') ? '' : 'hidden'
                } absolute -mr-[9999999999px] flex-1 flex-col border-border/20 bg-white p-2 text-black`}
              >
                {sizeList.map((size) => (
                  <FilterInput
                    key={size}
                    label={size}
                    name="size"
                    type="checkbox"
                    value={size}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <button
              id="color-menu"
              onClick={(e: any) => dispatch(toggleMenu(e.target.id))}
            >
              COLOR
            </button>
            <div className="relative flex flex-col gap-2">
              <div
                className={`${
                  menus.includes('color-menu') ? '' : 'hidden'
                } absolute -mr-[9999999999px] flex-1 flex-col border-border/20 bg-white p-2 capitalize text-black`}
              >
                {colorList.map((color) => (
                  <FilterInput
                    key={color}
                    label={color}
                    name="color"
                    type="checkbox"
                    value={color}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <button
              id="price-menu"
              onClick={(e: any) => dispatch(toggleMenu(e.target.id))}
            >
              PRICE
            </button>
            <div className="relative flex flex-col gap-2">
              <div
                className={`${
                  menus.includes('price-menu') ? '' : 'hidden'
                } absolute -mr-[9999999999px] flex-1 flex-col border-border/20 bg-white p-2 text-black`}
              >
                {priceList.map((price) => (
                  <FilterInput
                    key={price.min}
                    label={`${price.min} ${price.max ? `- ${price.max}` : '+'}`}
                    name="price"
                    type="checkbox"
                    value={`(variants.price:>${price.min} ${
                      price.max ? `variants.price:<=${price.max}` : ''
                    })`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="ml-auto flex gap-1">
            <span>{data.products.edges.length} items</span>
            <span>(1/1)</span>
          </div>
        </nav>
      </>
    )
  }

  return content
}
