import { Route, Routes } from "react-router-dom";
import Weblayout from "./layout/Weblayout";
import ReactGA from "react-ga";
import { Error } from "./pages/Error";

const TRACKING_ID = "G-B7J3J9GY3P"; // our tracking id

ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Weblayout />} />

      
    </Routes>
  );
}

export default App;
