import React from "react";
import { Surface, Curve, Layer } from "recharts";
import { curveCatmullRomOpen } from "d3-shape";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

//components of content:

const LineFunctionsPage = () => {
  const points = [
    { x: 10, y: 40 },
    { x: 50, y: 150 },
    { x: 90, y: 60 },
    { x: 130, y: 180 },
    { x: 170, y: 50 },
  ];
  const scale = scaleOrdinal(schemeCategory10);
  const ticks = [0, 0.25, 0.5, 0.75, 1];

  // <circle> marks a point on the graph

  return (
    <Surface width={600} height={800}>
      <Layer transform="translate(0, 200)">
        <Layer key={`curve-${2}`}>
          <Curve
            stroke={scale(1)}
            fill="none"
            type={curveCatmullRomOpen.alpha(1)}
            points={points}
          />
        </Layer>

        <circle cx={2 * 4} cy={2 * 2} r={4} key={`circle-${1}`} />
      </Layer>
    </Surface>
  );
};

export default LineFunctionsPage;

/*
  <Surface width={600} height={800}>
      <Layer transform="translate(0, 200)">
        <text x={10} y={20}>
          curveCatmullRomOpen
        </text>
        {ticks.map((entry, index) => (
          <Layer key={`curve-${index}`}>
            <Curve
              stroke={scale(entry)}
              fill="none"
              type={curveCatmullRomOpen.alpha(entry)}
              points={points}
            />
            <text x={200} y={40 + index * 30} fill={scale(entry)}>
              {`curveCatmullRomOpen.alpha(${entry})`}
            </text>
          </Layer>
        ))}

        {points.map((entry, index) => (
          <circle cx={entry.x} cy={entry.y} r={4} key={`circle-${index}`} />
        ))}
      </Layer>
    </Surface>
    */
