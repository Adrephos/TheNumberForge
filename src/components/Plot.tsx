import { useEffect, useRef } from 'react';
import { create, all } from 'mathjs'
import functionPlot, { FunctionPlotDatum } from 'function-plot';

export const FunctionPlot = ({ funcStr, height, width }: { funcStr: string, height: number, width: number }) => {
  const testRef = useRef<HTMLDivElement>(null);
  const plotRef = useRef<HTMLDivElement>(null);

  const math = create(all)
  math.import({ ln: (x: number) => math.log(x, math.e) });

  let lineSetting: FunctionPlotDatum = {
    fn: funcStr,
    color: '#ae58ff',
    graphType: 'polyline',
    sampler: 'builtIn',
  }

  useEffect(() => {
    try {
      if (testRef.current) {
        functionPlot({
          target: testRef.current,
          data: [{ fn: funcStr, sampler: 'builtIn' }],
        });
      }
    } catch (e) { lineSetting = {} }

    if (plotRef.current) {
      functionPlot({
        target: plotRef.current,
        width: width,
        height: height,
        grid: false,
        data: lineSetting.fn != funcStr ? undefined : [lineSetting],
        xAxis: { domain: [-3, 3] },
      });

      // Apply custom styles to the SVG elements
      const svgElement = plotRef.current.querySelector('svg');
      if (svgElement) {
        svgElement.style.backgroundColor = '#2B2931'; // Change background color
        svgElement.style.color = '#b3afaf'; // Change text color (axis labels, etc.)

        const texts = svgElement.querySelectorAll('text');
        texts.forEach(text => {
          text.style.fill = '#b3afaf';
        });

        const paths = svgElement.querySelectorAll('path.origin, path.domain');
        paths.forEach(path => {
          (path as SVGPathElement).style.stroke = '#b3afaf88'; // Change stroke color
          (path as SVGPathElement).style.fill = 'none'; // Change fill color
        });
      }
    }
  }, [funcStr, height, width]);

  return (
    <div className="w-full h-full">
      <div ref={testRef} className="plot-container hidden"></div>
      <div ref={plotRef} className="plot-container w-full h-auto rounded-xl"></div>
    </div>
  );
};
