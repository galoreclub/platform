import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { GET_BAGS } from '../app/graphql/queries'
import { TRIGGER_PIPEDREAM_EVENT } from '../app/graphql/mutations'

interface Image {
  data: string
  mimetype: string
}

interface Bag {
  _id: string
  brand: string
  size: string
  condition: string
  serialNum: string
  material: string
  model: string
  images: Image[]
}

interface GetBagsResponse {
  bags: Bag[]
}

const BagList: React.FC = () => {
  const { loading, error, data } = useQuery<GetBagsResponse>(GET_BAGS)
  const [triggerPipedreamEvent] = useMutation(TRIGGER_PIPEDREAM_EVENT)

  // State for image zoom
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const handleClickImage = (imageData: string, imageType: string) => {
    setSelectedImage(`data:${imageType};base64,${imageData}`)
    setOpen(true)
  }

  const handleAddToShopify = async (_id: string) => {
    try {
      // console.log(bag_id);
      console.log(_id)

      const { data } = await triggerPipedreamEvent({
        variables: { _id },
      })
      if (data?.triggerPipedreamEvent?.success) {
        console.log('Successfully added to Shopify')
      } else {
        console.log(
          'Failed to add to Shopify: ',
          data?.triggerPipedreamEvent?.message
        )
      }
    } catch (err: unknown) {
      console.error('Error adding to Shopify:', (err as Error).message)
    }
  }

  if (loading) return <p className="text-center font-thin">Loading...</p>
  if (error)
    return (
      <p className="text-red-600 text-center font-thin">
        Error: {error.message}
      </p>
    )

  return (
    <section className="m-auto flex flex-col gap-6 py-6 md:w-10/12 lg:gap-20">
      {data?.bags.map((bag) => (
        <div
          key={bag._id}
          className="mx-4 grid auto-cols-fr grid-flow-col items-center justify-center gap-8"
        >
          <h3 className="flex items-center justify-center font-seasons text-2xl lg:text-4xl">
            {bag.brand} - {bag.model}
          </h3>
          {bag.images.map((image, index) => (
            <img
              key={index}
              onClick={() => handleClickImage(image.data, image.mimetype)}
              src={`data:${image.mimetype};base64,${image.data}`}
              alt={`Image ${index}`}
              className="h-24 w-24 cursor-pointer object-contain"
            />
          ))}
          <button
            onClick={() => handleAddToShopify(bag._id)}
            className="bg-blue-500 hover:bg-blue-700 rounded px-4 py-2 font-bold text-black"
          >
            Add to Shopify
          </button>
        </div>
      ))}

      <div
        onClick={() => setOpen(false)}
        className={`${
          open ? '' : 'hidden'
        } duration-3000 fixed bottom-0 left-0 right-0 top-0 z-[100] flex h-screen w-screen items-center bg-subdued/40 transition-all`}
      >
        <div className="relative ml-auto mr-auto">
          <img
            src={selectedImage}
            alt="zoomed-in"
            className="max-h-96 max-w-4xl object-contain"
          />
          <button
            onClick={() => setOpen(false)}
            className="bg-gray-300 hover:bg-gray-400 absolute -right-10 -top-10 rounded px-2 py-1 text-2xl font-bold text-black"
          >
            X
          </button>
        </div>
      </div>
    </section>
  )
}

export default BagList
