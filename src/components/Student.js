import { useState } from "react";
import classes from "./css/student.module.css";
import AddnewStudent from "./AddStudent";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
import TagIcon from "@mui/icons-material/Tag";
import Result from "./Result";
const Student = ({ collegeList }) => {
  const [studentsLits, setStudentsLists] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [data, setData] = useState();
  const [getResult, setGetResult] = useState(false);
  const handleEditable = (e) => {
    console.log("handleEditable");
  };
  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      console.log("out");
    }
  };

  const handleShow = () => {
    setIsShowModal(true);
  };
  const handleHide = () => {
    setIsShowModal(false);
  };
  const addToStudentData = (data) => {
    setStudentsLists((prevData) => {
      return [data, ...prevData];
    });
    console.log(studentsLits);
  };
  let studentListShow = (
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
            <ArrowDropDownCircleRoundedIcon /> College Preference 1
          </th>
          <th className="text-center" scope="col">
            <ArrowDropDownCircleRoundedIcon /> College Preference 2
          </th>
          <th className="text-center" scope="col">
            <ArrowDropDownCircleRoundedIcon /> College Preference 3
          </th>
        </tr>
      </thead>
      <tbody>
        {studentsLits.map((student) => (
          <tr key={student.id}>
            <td
              className="text-center"
              // contentEditable="true"
              // onChange={handleEditable}
              // onKeyPress={handleKeypress}
            >
              {student.name}
            </td>
            <td
              className="text-center"
              // contentEditable="true"
              // onChange={handleEditable}
              // onKeyPress={handleKeypress}
            >
              {student.rank}
            </td>
            <td
              className="text-center"
              // contentEditable="true"
              // onChange={handleEditable}
              // onKeyPress={handleKeypress}
            >
              {student.collegePreference1}
            </td>
            <td
              className="text-center"
              // contentEditable="true"
              // onChange={handleEditable}
              // onKeyPress={handleKeypress}
            >
              {student.collegePreference2}
            </td>
            <td
              className="text-center"
              // contentEditable="true"
              // onChange={handleEditable}
              // onKeyPress={handleKeypress}
            >
              {student.collegePreference3}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  let studentListError = (
    <h5>No students found, please add them to the list.</h5>
  );
  return (
    <div className="container">
      <h4>Students List</h4>
      {studentsLits.length > 0 ? studentListShow : studentListError}
      <button className={classes.buttons} onClick={handleShow}>
        add new student
      </button>
      {studentsLits.length > 0 ? (
        <button
          type="button"
          className={classes.buttons}
          onClick={() => setGetResult(true)}
        >
          get results
        </button>
      ) : (
        <button type="button" className={classes.buttons} disabled={true}>
          get results
        </button>
      )}
      {isShowModal ? (
        <AddnewStudent
          addStudent={addToStudentData}
          collegeList={collegeList}
          hide={handleHide}
        />
      ) : (
        ""
      )}
      {getResult && studentsLits.length > 0 ? (
        <Result collegeList={collegeList} studentsList={studentsLits} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Student;
