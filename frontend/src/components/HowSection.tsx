import howImg from '../assets/how-we-do-it.png'
import stamp from '../assets/auth-stamp-black.png'

export const HowSection = () => {
  return (
    <>
      <section
        id="how"
        className="mx-auto mb-10 flex w-10/12 flex-col items-center justify-center gap-4 py-10 md:flex-row md:gap-10 lg:w-8/12"
      >
        <div className="mb-10 flex flex-col justify-center self-start sm:self-center md:m-auto">
          <h3 className="font-seasons text-2xl lg:text-3xl">How We Do It</h3>
          <div className="relative flex">
            <img
              src={howImg}
              alt=""
              className="m-0 w-[250px] object-contain p-0 md:w-[300px] md:flex-1"
            />
            <img
              src={stamp}
              alt=""
              className="absolute -bottom-20 -right-20 m-0 w-[150px] animate-spin-slow object-contain p-0 md:w-[200px]"
            />
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-center md:flex-1 md:text-right xl:ml-40 xl:text-left xl:text-lg">
          <h3 className="font-helvetica-bold text-lg uppercase lg:text-xl">
            digital passports
          </h3>
          <p>
            Galore uses Digital Passports powered by NFC technology to promote
            transparency in the luxury fashion resale industry. Your unique
            digital passport ensures your handbag’s authenticity while also
            giving you access to exclusive information about your handbag’s
            previous lives.
          </p>
        </div>
      </section>
    </>
  )
}
