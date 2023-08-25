import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_BAGS = gql`
  query GetBags {
    bags {
      bag_id
      brand
      model
      images {
        data
        mimetype
      }
    }
  }
`;

interface Image {
  data: string;
  mimetype: string;
}

interface Bag {
  bag_id: string;
  brand: string;
  model: string;
  images: Image[];
}

interface GetBagsResponse {
  bags: Bag[];
}

const BagList: React.FC = () => {
  const { loading, error, data } = useQuery<GetBagsResponse>(GET_BAGS);

  if (loading) return <p className="text-center font-thin">Loading...</p>;
  if (error) return <p className="text-center text-red-600 font-thin">Error: {error.message}</p>;

  return (
    <section className="m-auto flex flex-col gap-6 py-6 md:w-10/12 lg:gap-20">
      {data?.bags.map(bag => (
        <div key={bag.bag_id} className="mx-4 grid auto-cols-fr grid-flow-col items-center justify-center gap-8">
          <h3 className="flex items-center justify-center font-seasons text-2xl lg:text-4xl">
            {bag.brand} - {bag.model}
          </h3>
          {bag.images.map((image, index) => (
            <img
              key={index}
              src={`data:${image.mimetype};base64,${image.data}`}
              alt={`Image ${index}`}
              className="object-contain"
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default BagList;
