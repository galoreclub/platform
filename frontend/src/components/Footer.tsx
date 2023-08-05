export const Footer = (): React.ReactElement => {
  return (
    <footer className="flex flex-row flex-wrap justify-between gap-4 p-6 md:p-20 mt-2 uppercase text-sm md:text-base">
      <div className="flex flex-col gap-2">
        <h4 className="font-['Helvetica-Bold']">about</h4>
        <a href="/pages/about-us">who we are</a>
        <a href="/pages/how-it-works">how it works</a>
        <a href="/pages/sustainability">sustainability</a>
        <a href="/pages/authentication">authenticity</a>
        <a href="/pages/digital-passport">digital passport</a>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-['Helvetica-Bold']">support</h4>
        <a href="/pages/support-center/#faq">faq</a>
        <a href="/pages/support-center/#contact">contact us</a>
        <a href="/">privacy policy</a>
        <a href="/">terms and conditions</a>
        <a href="/">cookies policy</a>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-['Helvetica-Bold']">buy</h4>
        <a href="/pages/coming-soon">new in</a>
        <a href="/pages/coming-soon">designers</a>
        <a href="/pages/coming-soon">sale</a>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-['Helvetica-Bold']">rent</h4>
        <a href="/pages/rent">renting information</a>
        <a href="/pages/coming-soon">new in</a>
        <a href="/pages/coming-soon">designers</a>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-['Helvetica-Bold']">sell</h4>
        <a href="/pages/sell-with-us">sell with us</a>
      </div>
    </footer>
  )
}