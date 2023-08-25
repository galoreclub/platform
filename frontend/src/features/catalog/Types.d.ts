import { type Product } from '@shopify/hydrogen-react/storefront-api-types'
import type { PartialDeep } from 'type-fest'

export type PartialObjectDeep = PartialDeep<
  Product,
  {
    recurseIntoArrays: true
  }
>
