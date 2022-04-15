import classes from "./css/addstudent.module.css";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
const AddStudent = ({ hide, collegeList, addStudent }) => {
  const handleHide = () => {
    hide();
  };
  const [name, setName] = useState("");
  const [rank, setRank] = useState("");
  const [preference1, setPreference1] = useState(collegeList[0].name);
  const [preference2, setPreference2] = useState(collegeList[0].name);
  const [preference3, setPreference3] = useState(collegeList[0].name);
  const handlePrefer1 = (e) => {
    setPreference1(e.target.value);
  };
  const handlePrefer2 = (e) => {
    setPreference2(e.target.value);
  };
  const handlePrefer3 = (e) => {
    setPreference3(e.target.value);
  };
  const reset = () => {
    setName("");
    setRank("");
    setPreference1("");
    setPreference2("");
    setPreference3("");
    handleHide();
  };
  const handleSubmit = () => {
    let flag = validate();
    if (name !== "" && rank !== "") {
      if (flag) {
        const data = {
          id: Math.floor(Math.random() * 1000),
          name: name,
          rank: rank,
          collegePreference1: preference1,
          collegePreference2: preference2,
          collegePreference3: preference3,
        };
        addStudent(data);
        reset();
      } else {
        alert("Preferences can not be same!");
      }
    } else {
      alert("Name or Rank can not be empty");
    }
  };
  const validate = () => {
    if (
      preference1 !== preference2 &&
      preference2 !== preference3 &&
      preference3 !== preference1
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div id="myModal" className={classes.modal}>
      <div className={classes.modal_content}>
        <h4 className="p-3">Add Row</h4>
        <div className="container-fluid">
          <div className="row my-3 py-1">
            <div className={`col-md-4 col-sm-6 col-xs-6 py-1 ${classes.primary}`}>
              <FormatAlignLeftIcon /> Student Name
            </div>
            <div className="col-md-8 col-sm-6 col-xs-6">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="row my-3 py-1">
            <div className={`col-md-4 col-sm-6 col-xs-6 py-1 ${classes.primary}`}>
              <FormatAlignLeftIcon /> Rank
            </div>
            <div className="col-md-8 col-sm-6 col-xs-6">
              <input
                type="number"
                onChange={(e) => setRank(e.target.value)}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="row my-3 py-1">
            <div className={`col-md-4 col-sm-6 col-xs-6 py-1 ${classes.primary}`}>
              <ArrowDropDownCircleRoundedIcon /> College Preferences 1
            </div>
            <div className="col-md-8 col-sm-6 col-xs-6">
              <select
                className="form-control"
                name="college__list"
                onChange={handlePrefer1}
                value={preference1}
                required
              >
                {collegeList.map((list) => (
                  <option key={list.id} value={list.name}>
                    {list.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row my-3 py-1">
            <div className={`col-md-4 col-sm-6 col-xs-6 py-1 ${classes.primary}`}>
              <ArrowDropDownCircleRoundedIcon /> College Preferences 2
            </div>
            <div className="col-md-8 col-sm-6 col-xs-6">
              <select
                className="form-control"
                name="college__list"
                onChange={handlePrefer2}
                value={preference2}
                required
              >
                {collegeList.map((list) => (
                  <option key={list.id} value={list.name}>
                    {list.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row my-3 py-1">
            <div className={`col-md-4 col-sm-6 col-xs-6 py-1 ${classes.primary}`}>
              <ArrowDropDownCircleRoundedIcon /> College Preferences 3
            </div>
            <div className="col-md-8 col-sm-6 col-xs-6">
              <select
                className="form-control"
                name="college__list"
                onChange={handlePrefer3}
                value={preference3}
                required
              >
                {collegeList.map((list) => (
                  <option key={list.id} value={list.name}>
                    {list.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-md-6 text-center">
              <button className={`btn w-100 ${classes.secondary}`} onClick={handleHide}>
                <CloseIcon /> Close
              </button>
            </div>
            <div className="col-md-6 text-center">
              <button className={`btn w-100 text-white ${classes.success}`} onClick={handleSubmit}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
