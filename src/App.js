import "./App.css";
import { useState } from "react";

// the App uses graph-drawing functionality from the recharts package

//for SPAP:
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//imports of pages definitions
import Home from "./pages/Home/Home";
//import About from "./pages/About/About";
//import LineFunctionsPage from "./pages/LineFunctionsPage/LineFunctionsPage";
import YEqualsMxPlusC from "./pages/YEqualsMxPlusC/YEqualsMxPlusC";

// for theme context:
import ThemeContext, { themes } from "./contexts/ThemeContexts";
import InitialGraphContext, {
  initialAxes,
} from "./contexts/InitialGraphContexts";

const App = () => {
  const [axes, setAxes] = useState(initialAxes.twoDim);
  const [theme, setTheme] = useState(themes.dark);
  function toggleTheme() {
    setTheme((theme) => (theme === themes.dark ? themes.light : themes.dark));
  }
  function changeAxes() {
    setAxes((axes) => axes.twoDim);
  }

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <InitialGraphContext.Provider value={[axes, changeAxes]}>
        <Router>
          <div
            className="outer-div"
            style={{ color: theme.foreground, background: theme.background }}
          >
            <nav>
              <ul>
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                  <Link to="/functions">פונקציות ליניאריות</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/Home">
                <Home />
              </Route>
              <Route path="/functions" component={YEqualsMxPlusC}></Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </InitialGraphContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
