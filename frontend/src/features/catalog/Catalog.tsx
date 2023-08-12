export const Catalog = () => {
  const products = useProducts()
  return (
    <>
      <div className="flex-flex-col m-auto">
        <div className="flex flex-row self-start">
          <a href="/home">HOME</a> | <span>BUY</span>
        </div>
        <h2 className="font-seasons text-lg">Pre-owned designer bags</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio eaque
          hic vel nihil, fugit minima enim voluptate quo id dolor repellat natus
          eum cumque optio blanditiis fuga in obcaecati ex!
        </p>
        <nav className="flex flex-row">
          <div>SORT BY</div>
          <div>SIZE</div>
          <div>COLOUR</div>
          <div>PRICE</div>
          <div>
            <span>items.length</span>
            <span>pages</span>
          </div>
        </nav>
        <section id="product-list"></section>
      </div>
    </>
  )
}
