import { useState, useEffect } from 'react'
import { Header } from '../components/Header.tsx'
import { NormalButton, MethodButton, ToggleButton } from '../components/Buttons.tsx'
import { Title, SubTitle } from '../components/Titles.tsx'
import graphicalIcon from '../assets/graphical.svg'

export const Home = () => {
  const [relativeError, setRelativeError] = useState(false);

  useEffect(() => {
    console.log("relativeError", relativeError)
  }, [relativeError])
  return (
    <div className="flex flex-col justify-center h-full">
      <Header />
      <Title text="Methods" />
      <Title text="Bisection" />
      <SubTitle text="Graphic method" iconSrc={graphicalIcon}/>
      <NormalButton text="Get Started" href="/methods" />
      <MethodButton text="Multiple roots" href="/methods" />
      <MethodButton text="Newton" href="/methods" />
      <MethodButton text="False position" href="/methods" />
      <MethodButton text="Plot function" href="/methods" />
      <ToggleButton
        a="Correct decimals"
        b="Significant Figures"
        stateVal={relativeError}
        setStateVal={setRelativeError}
      />
    </div>
  )
}


