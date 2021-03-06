import { React, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Surface,
  Curve,
  Layer,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
import { curveCatmullRomOpen } from "d3-shape";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

import InitialGraphContext from "../../contexts/InitialGraphContexts";

import "./YEqualsMxPlusC.css";

// see here to draw a line chart: http://recharts.org/en-US/api/LineChart
// see here to draw and animate a line: http://recharts.org/en-US/api/Line

/*
 */

const YEqualsMxPlusC = () => {
  const [slopeM, setSlopeM] = useState(""); // slope M of linear function
  const [pointC, setPointC] = useState(""); // value of y at x=0

  const axes = useContext(InitialGraphContext);

  //console.log("initial axes are: ", axes);

  /*const [startGraph, setStartGraph] = useState({
    x: axes.startAxesX,
    y: axes.startAxesY,
  });*/

  const startGraph = { x: 0, y: 0 };
  const endGraph = { x: 100, y: 100 };
  const graphDim = { width: 100, height: 100 };

  if (axes) {
    startGraph.x = axes[0].startAxesX;
    startGraph.y = axes[0].startAxesY;

    endGraph.x = axes[0].endAxesX;
    endGraph.y = axes[0].endAxesY;

    graphDim.width = 0 + axes[0].endAxesX - +axes[0].startAxesX;
    graphDim.height = 0 + axes[0].endAxesY - +axes[0].startAxesY;
  }

  //console.log("startGraph at:", startGraph);

  /*const [endGraph, setEndGraph] = useState({
    x: axes.endAxesX,
    y: axes.endAxesY,
  });*/

  const points = [
    { x: 10, y: 40 },
    { x: 50, y: 150 },
    { x: 90, y: 60 },
    { x: 130, y: 180 },
    { x: 170, y: 50 },
  ];

  // format of source data of line chart, in which each element is an object:
  //[{name: 'a', value: 12}]
  const data = [
    {
      name: "A",
      y: startGraph.x * slopeM + +pointC,
      x: startGraph.x,
    },
    {
      name: "B",
      y: endGraph.x * slopeM + +pointC,
      x: endGraph.x,
    },
  ];

  useEffect(() => {
    graphDim.height =
      slopeM || pointC
        ? 0 +
          Math.max(
            startGraph.x * slopeM + +pointC,
            endGraph.x * slopeM + +pointC
          )
        : graphDim.height;
    console.log("slopeM: ", slopeM, "data: ", data, "graph dims: ", graphDim);
  }, [slopeM, pointC, data, endGraph.x, graphDim, startGraph.x]);

  /*const renderLineChart = (
      <LineChart width={axes.endAxesX - axes.startAxesX} height={axes.endAxesY - axes.startAxesY} data={pointsAB}>
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="x" />
        <YAxis dataKey="y"/>
      </LineChart>
    );
    */

  const scale = scaleOrdinal(schemeCategory10);
  const ticks = [0, 0.25, 0.5, 0.75, 1];
  // <circle> marks a point on the graph

  return (
    <div>
      <div className="functionTitle"> פונקציות לינאריות</div>
      <div className="functionEquation"> y = mx + b</div>
      {axes && (
        <div>
          <div className="inputFunctionParams">
            y ={" "}
            <input
              id="inputM"
              style={{ width: "40px" }}
              value={slopeM}
              onChange={(e) => {
                setSlopeM(e.target.value);
              }}
            ></input>
            x +
            <input
              id="inputC"
              style={{ width: "40px" }}
              value={pointC}
              onChange={(e) => {
                setPointC(e.target.value);
              }}
            ></input>
          </div>
        </div>
      )}

      <LineChart width={200} height={200} data={data}>
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis
          dataKey="x"
          type="number"
          name="x"
          label="x"
          domain={["dataMin", "dataMax"]}
        />
        <YAxis
          dataKey="y"
          type="number"
          name="y"
          label="y"
          domain={["dataMin", "dataMax"]}
          axisLine={{ x: 0, y: 0 }}
        />
        <ReferenceLine y={0} stroke="grey" />
        <ReferenceLine x={0} stroke="grey" />
        <Line
          id="xaxis"
          type="monotone"
          dataKey="y"
          stroke="#8884d8"
          points="[{x: 0, y: dataMin}, {x:0, y:dataMax}]"
        />
        <Line
          id="data"
          type="monotone"
          dataKey="y"
          stroke="#8884d8"
          points="[{x: dataMin, y: 0}, {x:dataMax, y:0}]"
        />
      </LineChart>
    </div>
  );
};

YEqualsMxPlusC.propTypes = {
  graphDim: PropTypes.objectOf(PropTypes.number),
};

export default YEqualsMxPlusC;
/*

      <YAxis
          dataKey="y"
          yAxisId="centery"
          type="number"
          name="y"
          label="y"
          domain={["dataMin", "dataMax"]}
        />


 YEqualsMxPlusC.propTypes = {
  secondsLeft: PropTypes.number,
  color: PropTypes.string,
  price: PropTypes.number,
  selectedCategory: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  salesProductsIds: PropTypes.arrayOf(PropTypes.number),
  category: PropTypes.string,
};
                  */
/*
return (
  <div>
    
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
);

*/

/*
<LineChart width={200} height={200} data={data}>
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis
          dataKey="x"
          type="number"
          domain={["dataMin - 100", "dataMax + 100"]}
          name="x"
        />
        <YAxis
          dataKey="y"
          type="number"
          domain={["dataMin - 100", "dataMax + 100"]}
          name="y"
        />
      </LineChart>

  <LineChart
        width={axes.lineChartWidth}
        height={axes.lineChartHeight}
        data={pointsAB}
      >
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="x" />
        <YAxis dataKey="y" />
      </LineChart>
     
      <Surface width={600} height={800}>
        <Layer transform="translate(0, 200)">
          <Layer key={`curve-${2}`}>
            <Curve
              stroke={scale(1)}
              fill="none"
              type={curveCatmullRomOpen.alpha(1)}
              points={pointsAB}
            />
          </Layer>
          <circle cx={2 * 4} cy={2 * 2} r={4} key={`circle-${1}`} />
        </Layer>
      </Surface>
      <Surface width={600} height={800}>
        <Layer transform="translate(0, 200)">
          {ticks.map((entry, index) => {
            return (
              <Layer key={`curve-${index}`}>
                <Curve
                  stroke={scale(entry)}
                  fill="none"
                  type={curveCatmullRomOpen.alpha(entry)}
                  points={points}
                />
              </Layer>
            );
          })}

          {points.map((entry, index) => (
            <circle cx={entry.x} cy={entry.y} r={4} key={`circle-${index}`} />
          ))}
        </Layer>
      </Surface>
    </div>

    */
