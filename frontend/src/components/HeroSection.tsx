export const HeroSection = () => {
  return (
    <>
      <section id="hero" className="flex flex-col items-center justify-center">
        <div id="marquee" className="ml-2 mr-auto h-[70px] overflow-hidden">
          <ul className="m-0 mr-auto animate-scrollUp p-0 text-[42px] uppercase md:text-[60px]">
            <li className="list-none py-[5px] leading-[60px] opacity-100">
              <span className="font-helvetica-bold">join</span> the loop
            </li>
            <li className="list-none py-[5px] leading-[60px] opacity-100">
              <span className="font-helvetica-bold">buy</span> pre-loved
            </li>
            <li className="list-none py-[5px] leading-[60px] opacity-100">
              <span className="font-helvetica-bold">buy</span> new
            </li>
            <li className="list-none py-[5px] leading-[60px] opacity-100">
              <span className="font-helvetica-bold">rent</span>
            </li>
            <li className="list-none py-[5px] leading-[60px] opacity-100">
              <span className="font-helvetica-bold">resell</span>
            </li>
            <li className="list-none py-[5px] leading-[60px] opacity-100">
              <span className="font-helvetica-bold">repeat</span>
            </li>
            <li className="list-none py-[5px] leading-[60px] opacity-100">
              <span className="font-helvetica-bold">join</span> the loop
            </li>
          </ul>
        </div>
        <div className="flex max-h-[480px] w-full items-end justify-center overflow-hidden">
          <video
            autoPlay
            loop
            className="w-screen xl:translate-y-40"
            poster="https://res.cloudinary.com/dgclfs5cd/video/upload/v1690467794/galore/Main_Vid_rhoyqi.jpg"
          >
            <source
              type="video/mp4"
              src="https://res.cloudinary.com/dgclfs5cd/video/upload/v1690467792/galore/Main_Vid_uif9b4.mp4"
            />
            <source
              type="video/webm"
              src="https://res.cloudinary.com/dgclfs5cd/video/upload/v1690467794/galore/Main_Vid_rhoyqi.webm"
            />
          </video>
        </div>
      </section>
    </>
  )
}
