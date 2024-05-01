import { Mafs, Coordinates, Plot, Theme } from "mafs"
import { create, all } from 'mathjs'


export const FunctionPlot = ({ funcStr, height }: { funcStr: string, height: number }) => {
  const math = create(all)
  math.import({ ln: (x: number) => math.log(x, math.e) });

  console.log(Theme.background)
  const func = ((x: number) => {
    try {
      return math.evaluate(funcStr, { x })
    } catch (e) {
      return NaN
    }
  })

  return (
    <Mafs
      zoom={{ min: 0.1, max: 6 }}
      viewBox={{ padding: 5 }}
      height={height}
    >
      <Coordinates.Cartesian />
      <Plot.OfX
        y={func}
        color={Theme.blue}
      />
    </Mafs>
  )
}
