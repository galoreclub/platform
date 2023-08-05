import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Root = (): React.ReactElement => {
const [user, setUser]= useState(true)

  return (
    <>
      <Header />
      <main id="main" className="flex flex-col justify-start mb-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Root;
