import CustomNavbar from "./components/navbar/navbar-component";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
// import Eg from "./components/examples/eg";

function App() {
  return (
    <div style={{ height: '100vh' }}>
    <SimpleBar style={{ maxHeight: '100%', height: '100%' }}>

        <CustomNavbar />
        <Routes>
          <Route path="/home" element={<Home />} />

          {/* <Route path="/home" element={<Eg />} /> */}
        </Routes>
      </SimpleBar>
    </div>
  );
}

export default App;
