import rent1 from '../assets/rent-1.png'
import rent2 from '../assets/rent-2.png'
import rent3 from '../assets/rent-3.png'

export const Rent = () => {
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
          RENT
        </h1>
      </div>

      <div className="mx-2 mb-10 mt-2 flex flex-row gap-1 self-start text-xs leading-4">
        <a href="/home">HOME</a>
        <span className="border-l-solid border-l-[1px] border-l-black pl-1 font-helvetica-bold">
          RENT
        </span>
      </div>

      <section className="m-auto flex w-full flex-col items-center justify-center gap-10 p-4 lg:w-9/12 lg:gap-20">
        <h2 className="font-helvetica-bold text-2xl lg:text-3xl">
          COMING SOON...
        </h2>
        <h3 className="justify-self-center font-seasons text-2xl lg:text-3xl">
          How it Works
        </h3>
        <div className="grid grid-cols-3 items-start justify-center gap-3 border-t border-black/50 md:gap-10 lg:gap-14">
          <div className="-mt-[20px] flex flex-col items-center justify-between gap-2 lg:gap-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-solid border-black/50 bg-white font-helvetica-bold text-lg lg:text-xl">
              1
            </div>
            <h4 className="text-center font-helvetica-bold text-sm lg:text-xl">
              Pick a Handbag
            </h4>
            <p className="self-end text-center text-xs font-light lg:text-base">
              Select the handbag you want to rent and reserve it by paying a fee
              and providing your delivery and payment information.
            </p>
          </div>
          <div className="-mt-[20px] flex flex-col items-center justify-between gap-2 lg:gap-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-solid border-black/50 bg-white font-helvetica-bold text-lg lg:text-xl">
              2
            </div>
            <h4 className="text-center font-helvetica-bold text-sm lg:text-xl">
              Use It
            </h4>
            <p className="self-end text-center text-xs font-light lg:text-base">
              You can use the handbag for the agreed rental period, typically
              ranging from a few days to a few weeks.
            </p>
          </div>
          <div className="-mt-[20px] flex flex-col items-center justify-between gap-2 lg:gap-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-solid border-black/50 bg-white font-helvetica-bold text-lg lg:text-xl">
              3
            </div>
            <h4 className="text-center font-helvetica-bold text-sm lg:text-xl">
              Return & Repeat
            </h4>
            <p className="self-end text-center text-xs font-light lg:text-base">
              Then you can return it and choose to rent another handbag or
              purchase the handbag you just rented if you choose.
            </p>
          </div>
        </div>
        <h3 className="justify-self-center font-seasons text-2xl font-light lg:text-3xl">
          Why Rent?
        </h3>
        <div className="grid grid-cols-3 items-start justify-center gap-3 md:gap-10 lg:gap-14">
          <div className="flex flex-col items-center justify-between gap-2 lg:gap-6">
            <img
              src={rent1}
              className="flex h-24 w-24 grow items-center justify-center lg:h-48 lg:w-48"
              alt=""
            />
            <h4 className="text-center font-helvetica-bold text-sm uppercase lg:text-xl">
              Variety
            </h4>
            <p className="self-end text-center text-xs font-light lg:text-base">
              Renting allows you to try out different styles and brands without
              having to make a long-term commitment.
            </p>
          </div>
          <div className="flex flex-col items-center justify-between gap-2 lg:gap-6">
            <img
              src={rent2}
              className="flex h-24 w-24 grow items-center justify-center lg:h-48 lg:w-48"
              alt=""
            />
            <h4 className="text-center font-helvetica-bold text-sm uppercase lg:text-xl">
              Sustainability
            </h4>
            <p className="self-end text-center text-xs font-light lg:text-base">
              Renting reduces the need for you to continuously purchase new
              handbags, which can have a positive impact on the environment.
            </p>
          </div>
          <div className="flex flex-col items-center justify-between gap-2 lg:gap-6">
            <img
              src={rent3}
              className="flex h-24 w-24 grow items-center justify-center lg:h-48 lg:w-48"
              alt=""
            />
            <h4 className="text-center font-helvetica-bold text-sm uppercase lg:text-xl">
              Occasions
            </h4>
            <p className="self-end text-center text-xs font-light lg:text-base">
              Renting a handbag for a special occasion can allow you to have a
              high-end, stylish accessory without having to spend a lot of money
              on a one-time-use item.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
