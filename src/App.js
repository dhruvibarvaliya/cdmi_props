import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Header';
// import Banner from './Banner';
// import Course from './Course';


function App() {
  return (
    <div>
      <Routes>
        
      <Route path="/" element={ <Header /> } />
      {/* <Route path="/banner" element={<Banner/>} /> */}
      {/* <Route path="/course" element={<Course/>} /> */}

      </Routes>
    </div>
  );
}

export default App;
