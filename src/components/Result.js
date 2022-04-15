import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
import TagIcon from "@mui/icons-material/Tag";
import { useState } from "react";
const Result = ({ studentsLits, collegeList }) => {
  const [updatedCollegeList, setCollegeList] = useState([]);
  const [updatedStudentsList, setUpdatedStudentsList] = useState([]);
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
          {studentsLits.map((student) => (
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

export default Result;
