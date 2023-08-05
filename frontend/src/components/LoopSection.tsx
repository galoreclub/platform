import { useEffect, useState } from 'react'
import loop1 from '../assets/loop-1.png'
import loop2 from '../assets/loop-2.png'
import loop3 from '../assets/loop-3.png'

export const LoopSection = () => {
  const emphasisList = ['join', 'buy', 'repeat']
  const [emphasis, setEmphasis] = useState('join')

  useEffect(() => {
    const interval = setInterval(() => {
      if (emphasis === 'join') {
        setEmphasis(emphasisList[1])
      } else if (emphasis === 'buy') {
        setEmphasis(emphasisList[2])
      } else {
        setEmphasis(emphasisList[0])
      }
    }, 6000)
    return () => clearInterval(interval)
  }, [emphasis])

  return (
    <>
      <section id="join" className="mx-auto mb-10 flex w-10/12 flex-col">
        <div className="flex flex-col items-center p-6 text-justify">
          <h3 className="font-seasons text-2xl shadow-black/25 text-shadow lg:text-4xl">
            Join the Loop
          </h3>
          <p className="mt-2 leading-6 lg:text-xl">
            Our mission is simple: Make luxury fashion more circular and combat
            the counterfeit market.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-4 md:mx-auto md:grid md:auto-cols-fr md:grid-flow-col md:gap-20 md:p-4 lg:text-lg">
          <ul className="mx-auto flex flex-col items-center justify-evenly gap-6 border-l-[3px] border-solid border-border py-10 text-xs md:col-start-2 md:my-40 md:h-full md:w-full lg:text-xl">
            <li className="flex w-full translate-x-[-20px] gap-10 lg:translate-x-[-30px] lg:gap-20">
              <span
                className={`${
                  emphasis === 'join'
                    ? 'scale-125 border-black font-helvetica-bold text-black'
                    : 'border-border text-subdued'
                } flex h-[40px] w-[40px] items-center justify-center rounded-full border-[3px] border-solid bg-white p-4 transition-all duration-1000 lg:h-[60px] lg:w-[60px]`}
              >
                1
              </span>
              <span
                className={`${
                  emphasis === 'join'
                    ? 'scale-125 font-helvetica-bold text-black'
                    : 'text-subdued'
                } flex items-center justify-center uppercase transition-all duration-1000`}
              >
                join the loop
              </span>
            </li>
            <li className="flex w-full translate-x-[-20px] items-center gap-10 lg:translate-x-[-30px] lg:gap-20">
              <span
                className={`${
                  emphasis === 'buy'
                    ? 'scale-125 border-black font-helvetica-bold text-black'
                    : 'border-border text-subdued'
                } flex h-[40px] w-[40px] items-center justify-center rounded-full border-[3px] border-solid bg-white p-4 transition-all duration-1000 lg:h-[60px] lg:w-[60px]`}
              >
                2
              </span>
              <div
                className={`${
                  emphasis === 'buy'
                    ? 'scale-125 font-helvetica-bold text-black'
                    : 'text-subdued'
                } m-0 flex h-[40px] flex-row items-center justify-center overflow-hidden p-0 uppercase transition-all duration-1000`}
              >
                buy
                <ul
                  className={`${
                    emphasis === 'buy' ? '' : 'hidden'
                  } m-0 animate-wordScroll self-start p-0 pl-[2px] transition-all duration-1000 lg:pl-[6px]`}
                >
                  <li className="m-0 list-none p-0 py-[5px] leading-[30px]">
                    pre-loved
                  </li>
                  <li className="m-0 list-none p-0 py-[5px] leading-[30px]">
                    new
                  </li>
                  <li className="m-0 list-none p-0 py-[5px] leading-[30px]">
                    or rent
                  </li>
                  <li className="m-0 list-none p-0 py-[5px] leading-[30px]">
                    and sell
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex w-full translate-x-[-20px] gap-10 lg:translate-x-[-30px] lg:gap-20">
              <span
                className={`${
                  emphasis === 'repeat'
                    ? 'scale-125 border-black font-helvetica-bold text-black'
                    : 'border-border text-subdued'
                } flex h-[40px] w-[40px] items-center justify-center rounded-full border-[3px] border-solid bg-white p-4 transition-all duration-1000 lg:h-[60px] lg:w-[60px]`}
              >
                3
              </span>
              <span
                className={`${
                  emphasis === 'repeat'
                    ? 'scale-125 font-helvetica-bold text-black'
                    : 'text-subdued'
                } flex items-center justify-center uppercase transition-all duration-1000`}
              >
                enjoy & repeat
              </span>
            </li>
          </ul>
          <div className="flex flex-col pb-6 text-right md:col-start-1 md:row-start-1">
            <h3 className="font-helvetica-bold text-xl uppercase">
              how it works
            </h3>
            <div
              className={`${
                emphasis === 'join' ? 'h-auto opacity-100' : 'h-0 opacity-0'
              } transition-all duration-1000`}
            >
              <p>
                Sign up to Join the Loop and become a member of the Galore Club,
                where luxury meets sustainability. We’ll teach you all about
                circular fashion and how
                <span className="italic"> you </span>
                can help put an end to fast fashion without breaking the bank or
                sacrificing your sense of style.
              </p>
              <img className="float-right" src={loop1} alt="" />
            </div>
            <div
              className={`${
                emphasis === 'buy' ? 'h-auto opacity-100' : 'h-0 opacity-0'
              } transition-all duration-1000`}
            >
              <p>
                Galore's circular approach maximises usage and minimises waste.
                When you purchase or rent a handbag from us, it comes with a
                unique NFC tag that acts as a digital passport, allowing you to
                explore your bag, verify its authenticity, and easily resell it.
              </p>
              <img className="float-right" src={loop2} alt="" />
            </div>
            <div
              className={`${
                emphasis === 'repeat' ? 'h-auto opacity-100' : 'h-0 opacity-0'
              } transition-all duration-1000`}
            >
              <p>
                At Galore, our closed-loop fashion allows you to fully enjoy the
                cycle of buying, renting, and reselling handbags while
                minimising waste. Experience the fun of exploring your bag with
                the help of your digital passport and repeating the process
                again and again.
              </p>
              <img className="float-right" src={loop3} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
