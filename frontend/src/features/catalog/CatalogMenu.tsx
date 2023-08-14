import { Formik, Field, Form } from 'formik'
import { GET_VENDORS } from '../../app/graphql/queries'
import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { flattenConnection } from '@shopify/hydrogen-react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { loadVendors } from './catalogSlice'

export const CatalogMenu = ({ data }: { data: any }) => {
  const { data: vendors } = useQuery(GET_VENDORS)
  const dispatch = useAppDispatch()
  const vendorList = useAppSelector((state) => state.catalog.vendors)
  const [dropdownStates, setDopdownStates] = useState({})

  useEffect(() => {
    if (vendors) {
      const vendorArray = flattenConnection(vendors.products).map(
        (node: any) => {
          return node.vendor
        }
      )
      const uniqueVendors = [...new Set(vendorArray)]
      dispatch(loadVendors(uniqueVendors))
    }
  }, [])

  return (
    <>
      <nav className="flex w-full flex-row justify-start gap-2 text-xs md:my-10">
        <div className="flex flex-col items-start">
          <div>SORT BY</div>
        </div>
        <div className="flex flex-col">
          BRAND
          <div className="hidden"></div>
        </div>
        <div>SIZE</div>
        <div>COLOUR</div>
        <div>PRICE</div>
        <div className="ml-auto flex gap-1">
          <span>{data.products.edges.length} items</span>
          <span>(1/1)</span>
        </div>
      </nav>
    </>
  )
}
