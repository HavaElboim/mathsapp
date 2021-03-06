import { createContext } from "react";

/*
const themes = {
  light: {
    foreground: "#ffffee",
    background: "#220000",
  },
  dark: {
    foreground: "#002200",
    background: "#ffffee",
  },
};
*/
const initialAxes = {
  twoDim: {
    startAxesX: -20,
    startAxesY: -20,
    endAxesX: 20,
    endAxesY: 20,
    lineChartWidth: 500, // default width of line chart container
    lineChartHeight: 500, // default height of line chart container
  },
};

let currentAxes = initialAxes.twoDim;

const InitialGraphContext = createContext(null);

export { initialAxes, currentAxes };
export default InitialGraphContext;
