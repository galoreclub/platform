import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT } from '../../app/graphql/queries'
import { useEffect } from 'react'
import DOMPurify from 'dompurify'
import React from 'react'
import { Image } from '@shopify/hydrogen-react'

export const ProductDetail = () => {
  const { handle } = useParams()
  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { handle },
  })

  let description: string | undefined
  let content: React.JSX.Element | undefined

  useEffect(() => {
    if (data) {
      const sanitizedHtml = DOMPurify.sanitize(data.product.descriptionHtml)
      description = sanitizedHtml
    }
  }, [data])

  if (loading && !description) {
    content = <>Loading...</>
  } else if (error) {
    content = <>{error.message}</>
  } else if (data) {
    content = (
      <>
        <div className="m-auto flex w-full flex-col gap-4 p-4">
          <div className="mb-10 flex flex-row gap-1 self-start text-xs leading-4">
            <a href="/home">HOME</a>
            <span className="border-l-[1px] border-solid border-black pl-1">
              <a href="/buy">BUY</a>
            </span>
            <span className="border-l-[1px] border-solid border-black pl-1 uppercase">
              {data.product.vendor}
            </span>
            <span className="border-l-[1px] border-solid border-black pl-1 font-helvetica-bold uppercase">
              {data.product.title}
            </span>
          </div>
          <section className="flex flex-col-reverse justify-between gap-4 sm:flex-row">
            <div className="flex flex-1 flex-col gap-2">
              <div>
                <h3 className="font-helvetica-bold uppercase">
                  {data.product.vendor}
                </h3>
                <p>{data.product.title}</p>
              </div>
              {/* {description && (
                <div dangerouslySetInnerHTML={{ __html: description }} />
              )} */}
              <div
                className="flex flex-col gap-2 text-sm [&>ul]:list-disc [&>ul]:pl-6"
                dangerouslySetInnerHTML={{
                  __html: data.product.descriptionHtml,
                }}
              />
            </div>
            <div className="flex-1">
              <Image
                data={data.product.featuredImage}
                sizes="(min-width: 45em) 50vw, 100vw"
                aspectRatio="4/5"
                className="object-contain"
              />
            </div>
          </section>
        </div>
      </>
    )
  }

  return content
}
