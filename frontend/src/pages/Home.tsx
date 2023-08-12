import { HeroSection } from '../components/HeroSection'
import { IntroSection } from '../components/IntroSection'
import homeImg1 from '../assets/home-1.png'
import homeImg2 from '../assets/home-2.png'
import homeImg3 from '../assets/home-3.png'
import { AuthModal } from '../features/auth/AuthModal'

export const Home = (): React.ReactElement => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <section
        id="buy-rent-sell"
        className="m-auto flex flex-col gap-6 py-6 md:w-10/12 lg:gap-20"
      >
        <h2 className="flex items-center justify-center font-seasons text-2xl lg:text-4xl">
          Buy
          <span className="mx-2 text-[8px] font-thin">&#9679;</span>
          Rent
          <span className="mx-2 text-[8px] font-thin">&#9679;</span>
          Sell
        </h2>
        <div className="mx-4 grid auto-cols-fr grid-flow-col items-center justify-center gap-8">
          <img className="object-contain" src={homeImg1} alt="" />
          <div className="flex h-fit flex-col justify-center gap-6 self-center">
            <h3 className="text-justify font-helvetica-bold text-lg uppercase lg:text-3xl">
              buy
            </h3>
            <p className="font-thin leading-6 tracking-wide text-black/70 lg:text-xl">
              Purchase pre-loved, luxury handbags to create a more circular
              future. Galore has a wide variety of unique handbags that are
              vetted and authenticated by experts. Galore offers a sustainable
              and unique way to add luxury pieces into your wardrobe.
            </p>
            <a
              href="#"
              className="flex items-center justify-center bg-black px-10 py-2 uppercase text-white lg:w-[180px]"
            >
              buy
            </a>
          </div>
        </div>
        <div className="mx-4 grid auto-cols-fr grid-flow-col items-center justify-center gap-8">
          <div className="flex h-fit flex-col justify-center gap-6 self-center">
            <h3 className="text-justify font-helvetica-bold text-lg uppercase lg:text-3xl">
              rent
            </h3>
            <p className="font-thin leading-6 tracking-wide text-black/70 lg:text-xl">
              Renting allows you to try out different styles and brands without
              having to make a long-term commitment. It also reduces the need
              for you to continuously purchase new handbags, which can have a
              positive impact on the environment. Click below to learn more
              about our rental process.
            </p>
            <a
              href="#"
              className="flex items-center justify-center bg-black px-10 py-2 uppercase text-white lg:w-[180px]"
            >
              rent
            </a>
          </div>
          <img className="object-contain" src={homeImg2} alt="" />
        </div>
        <div className="mx-4 grid auto-cols-fr grid-flow-col items-center justify-center gap-8">
          <img className="object-contain" src={homeImg3} alt="" />
          <div className="flex h-fit flex-col justify-center gap-6 self-center">
            <h3 className="text-justify font-helvetica-bold text-lg uppercase lg:text-3xl">
              sell
            </h3>
            <p className="font-thin leading-6 tracking-wide text-black/70 lg:text-xl">
              If you want to sell your handbag to us, we’ll handle all aspects
              of the process including authentication, pricing, and payment.
              Selling to us ensures that your items are in the right hands, as
              we only sell authentic and high-quality products. By choosing to
              sell to Galore, you can turn your unused luxury handbags into cash
              and make room for new items in your collection. Click below to
              learn more about selling with us.
            </p>
            <a
              href="#"
              className="flex items-center justify-center bg-black px-10 py-2 uppercase text-white lg:w-[180px]"
            >
              sell
            </a>
          </div>
        </div>
      </section>
      <AuthModal />
    </>
  )
}
