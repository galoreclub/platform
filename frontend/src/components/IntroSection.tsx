import circularImg from '../assets/circular.png'

export const IntroSection = () => {
  return (
    <>
      <section
        id="intro"
        className="mx-auto my-10 grid grid-flow-col grid-cols-2 gap-4 p-4 sm:w-8/12 sm:gap-20 md:py-20 xl:py-40 xl:text-lg"
      >
        <div className="relative flex">
          <img
            className="absolute bottom-0 left-0 right-0 top-0 m-auto w-[250px] animate-spin-slow xl:w-[400px]"
            src={circularImg}
            alt=""
          />
          <span className="m-auto font-seasons text-2xl sm:text-3xl lg:text-4xl">
            Who We Are
          </span>
        </div>
        <div>
          <h3 className="mb-4 font-helvetica-bold font-semibold uppercase md:text-xl lg:mr-10 lg:text-3xl">
            make your luxury last with galore
          </h3>
          <p className="trackig-wide text-justify lg:text-2xl">
            We are a one-stop-shop for all your luxury handbag needs. We offer a
            circular marketplace for 100% authentic pre-loved handbags.
            Transparency is our priority, which is why we are developing a
            unique digital passport for all handbags sold, rented or bought
            which allows you to explore your bag, verify its authenticity, and
            contribute to a sustainable future for the luxury sector.
          </p>
        </div>
      </section>
    </>
  )
}
