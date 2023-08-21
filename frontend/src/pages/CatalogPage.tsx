import { Catalog } from '../features/catalog/Catalog'

export const CatalogPage = () => {
  return (
    <>
      <div className="m-auto flex w-full flex-col gap-4 p-4">
        <div className="mb-10 flex flex-row gap-1 self-start text-xs leading-4">
          <a href="/home">HOME</a>
          <span className="border-l-solid border-l-[1px] border-l-black pl-1">
            BUY
          </span>
        </div>
        <h2 className="font-seasons text-2xl md:text-4xl">
          Pre owned designer bags
        </h2>
        <p className="mt-2 text-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio eaque
          hic vel nihil, fugit minima enim voluptate quo id dolor repellat natus
          eum cumque optio blanditiis fuga in obcaecati ex!
        </p>
        <Catalog />
      </div>
    </>
  )
}
