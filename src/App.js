import "./App.css";
import Student from "./components/Student";
import { useState } from "react";
const COLLEGE_LIST = [
  { id: 1, name: "IIT Madras", noOfSeats: 4 },
  { id: 2, name: "IIT Kanpur", noOfSeats: 2 },
  { id: 3, name: "IIT Bombay", noOfSeats: 1 },
  { id: 4, name: "IIIT Hyderabad", noOfSeats: 3 },
  { id: 5, name: "IIT Roorkee", noOfSeats: 1 },
  { id: 6, name: "IIM Ahemedabad", noOfSeats: 2 },
];
function App() {
  const [collegeList, setCollegeList] = useState(COLLEGE_LIST);
  return (
    <div className="App">
      <h1>College Allotment System</h1>
      <Student collegeList={collegeList} />
    </div>
  );
}

export default App;
