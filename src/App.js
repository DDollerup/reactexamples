import { Routes, Route } from "react-router-dom";

// Examples
import MapThroughArrayInObject from "./components/mapExamples/MapThroughArrayInObject";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/mapthrougharrayinobject/:id" element={<MapThroughArrayInObject />} />
      </Routes>
    </>
  );
}

export default App;