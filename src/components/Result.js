import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
import TagIcon from "@mui/icons-material/Tag";
import { useState } from "react";
const updatedult = ({ studentsList, collegeList }) => {
  //   const [updatedCollegeList, setCollegeList] = useState([]);
  //   const [updatedStudentsList, setUpdatedStudentsList] = useState([]);
  let updated = studentsList.sort(({ rank: a }, { rank: b }) => a - b);
//   const updateSeats = () => {
//     for (let i in updated) {
//       if (updated[i].preference1 === "IIT Madras") {
//         if (collegeList[0].noOfSeats > 0) {
//           collegeList[0].noOfSeats = collegeList[0].noOfSeats - 1;
//         } else {
//           collegeList[0].noOfSeats = 0;
//         }
//       } else if (updated[i].preference1 === "IIT Kanpur") {
//         if (collegeList[1].noOfSeats > 0) {
//           collegeList[1].noOfSeats = collegeList[1].noOfSeats - 1;
//         } else {
//           collegeList[1].noOfSeats = 0;
//         }
//       } else if (updated[i].preference1 === "IIT Bombay") {
//         if (collegeList[2].noOfSeats > 0) {
//           collegeList[2].noOfSeats = collegeList[2].noOfSeats - 1;
//         } else {
//           collegeList[2].noOfSeats = 0;
//         }
//       } else if (updated[i].preference1 === "IIT Hyderabad") {
//         if (collegeList[3].noOfSeats > 0) {
//           collegeList[3].noOfSeats = collegeList[3].noOfSeats - 1;
//         } else {
//           collegeList[3].noOfSeats = 0;
//         }
//       } else if (updated[i].preference1 === "IIT Roorkee") {
//         if (collegeList[4].noOfSeats > 0) {
//           collegeList[4].noOfSeats = collegeList[4].noOfSeats - 1;
//         } else {
//           collegeList[4].noOfSeats = 0;
//         }
//       } else {
//         if (collegeList[5].noOfSeats > 0) {
//           collegeList[5].noOfSeats = collegeList[5].noOfSeats - 1;
//         } else {
//           collegeList[5].noOfSeats = 0;
//         }
//       }
//     }
//   };
//   const updateListAsSeats = () => {

//   };
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr className="table-primary">
            <th className="text-center" scope="col">
              <FormatAlignLeftIcon /> Student Name
            </th>
            <th className="text-center" scope="col">
              <TagIcon /> Rank
            </th>
            <th className="text-center" scope="col">
              <ArrowDropDownCircleRoundedIcon /> Alloted College
            </th>
          </tr>
        </thead>
        <tbody>
          {updated.map((student) => (
            <tr key={student.id}>
              <td className="text-center">{student.name}</td>
              <td className="text-center">{student.rank}</td>
              <td className="text-center">{student.collegePreference1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default updatedult;
