import { useState } from "react"
import { Aside } from "./components/Aside"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Main } from "./components/Main"

export const App = () => {
  const [isSwitchedTheme, setIsSwitchedTheme] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header
        setIsSwitchedTheme={setIsSwitchedTheme}
        isSwitchedTheme={isSwitchedTheme}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />

      {(!isOpen) && (
        <>
          <Aside />

          <Main
            isSwitchedTheme={isSwitchedTheme}
          />

          <Footer
            isSwitchedTheme={isSwitchedTheme}
          />
        </>
      )}
    </>
  )
}
