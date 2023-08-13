import Patientform from "./pages/Patientform";
import AllDept from "./pages/AllDept";
import AllDoctors from "./pages/AllDoctors";
import AppointmentPage from "./pages/AppointmentPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Patientform />}></Route>
            <Route path="/allDept/:id" element={<AllDept />}></Route>
            <Route path="/allDoctors/:patId/:deptId" element={<AllDoctors />}></Route>
            <Route path="/appointment/:patId/:deptId/:doctIndex" element={<AppointmentPage />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
