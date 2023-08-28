export const WhoWeAre = () => {
  return (
    <>
      <div className="relative flex max-h-[480px] items-end justify-center overflow-hidden">
        <video
          autoPlay
          loop
          className="w-screen"
          poster="https://res.cloudinary.com/dgclfs5cd/video/upload/v1693260628/galore/Rent_Banner_Vid_id8uiz.jpg"
        >
          <source
            type="video/mp4"
            src="https://res.cloudinary.com/dgclfs5cd/video/upload/v1693260628/galore/Rent_Banner_Vid_id8uiz.mp4"
          />
          <source
            type="video/webm"
            src="https://res.cloudinary.com/dgclfs5cd/video/upload/v1693260628/galore/Rent_Banner_Vid_id8uiz.webm"
          />
        </video>
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform font-helvetica-bold text-xl text-white md:text-3xl">
          ABOUT US
        </h1>
      </div>

      <div className="mx-2 mb-10 mt-2 flex flex-row gap-1 self-start text-xs leading-4">
        <a href="/home">HOME</a>
        <span className="border-l-solid border-l-[1px] border-l-black pl-1 font-helvetica-bold">
          ABOUT US
        </span>
      </div>

      <section></section>
    </>
  )
}
