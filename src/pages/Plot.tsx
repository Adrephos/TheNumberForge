import { useState } from 'react';
import { Header } from '../components/Header.tsx'
import { Title } from '../components/Titles.tsx'
import { StringInput } from '../components/Inputs.tsx'
import { FunctionPlot } from '../components/Plot.tsx'

export const Plot = () => {
  const [functionStr, setFunctionStr] = useState('')

  return (
    <div className="h-screen">
      <Header />
      <div className="xl:pl-[10rem] lg:pl-[6rem] lg:pr-0 px-[2rem] pt-5 lg:pt-0 pb-5">
        <Title text="Function plotter" />
      </div>
      <div className="flex justify-center pb-5" >
        <StringInput name='f(x)' setVal={setFunctionStr} />
      </div>
      <div className="px-10 h-10">
        <div className="px-10 h-10">
          <FunctionPlot funcStr={functionStr} height={520} />
        </div>
      </div>
    </div>
  );
}

