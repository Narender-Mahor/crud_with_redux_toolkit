import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailsSlice";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useFormik } from "formik";

const Update = () => {
  const options = [
    { value: "front end developer", label: "Front End Developer" },
    { value: "backend developer", label: "Backend Developer" },
    { value: "full stack developer", label: "Full Stack Developer" },
    { value: "php developer", label: "Php Developer" },
    { value: "mern stack developer", label: "Mern Stack Developer" },
    { value: "java developer", label: "Java Developer" },
  ];

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [updateData, setUpdateData] = useState();

  const { users, loading } = useSelector((state) => {
    return state.app;
  });

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((elem) => elem.id === id);
      setUpdateData(singleUser[0]);
    }
  }, [id]);

  console.log(updateData, "updateData");

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  // const initialValues = {
  //   name: "",
  //   email: "",
  //   phone: "",
  //   age: "",
  //   dateOfBirth: "",
  //   address: "",
  //   course: "",
  //   gender: "",
  // };

  // const formik = useFormik({
  //   initialValues: initialValues,
  //   onSubmit: (values) => {
  //     console.log(values);

  //     let payload = {
  //       name: values.name,
  //       email: values.email,
  //       phone: values.phone,
  //       age: values.age,
  //       dateOfBirth: values.dob,
  //       address: values.address,
  //       course: values.course,
  //       gender: values.gender,
  //     };
  //     dispatch(updateUser(payload));
  //     navigate("/read");
  //   },
  // });
  return (
    <>
      <div className="">
        <div className="d-flex align-items-center justify-content-center mt-4">
          <h2 className="my-2">Fill The Data</h2>
        </div>
        <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={newData}
              // {...formik.getFieldProps("name")}
              value={updateData && updateData.name}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={updateData && updateData.email}
              onChange={newData}
              // {...formik.getFieldProps("email")}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">phone</label>
            <input
              type="phone"
              name="phone"
              className="form-control"
              value={updateData && updateData.phone}
              onChange={newData}
              // {...formik.getFieldProps("phone")}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="text"
              name="age"
              className="form-control"
              onChange={newData}
              // {...formik.getFieldProps("age")}
              value={updateData && updateData.age}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">DOB</label>
            <input
              type="date"
              name="dateOfBirth"
              className="form-control"
              onChange={newData}
              // {...formik.getFieldProps("dateOfBirth")}
              value={updateData && updateData.dateOfBirth}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              onChange={newData}
              // {...formik.getFieldProps("address")}
              value={updateData && updateData.address}
              required
            />
          </div>
          {/* <div className="mb-3">
            <label className="form-label">Select Course</label>
            <Select
              options={options}
              // onChange={(e) => {
              //   console.log(e, "eee");
              //   formik.setFieldValue("course", e.value);
              // }}
              name="course"
              defaultValue={updateData && updateData.course}
              onChange={newData}
            />
          </div> */}

          <div className="mb-3">
            <input
              className="form-check-input"
              name="gender"
              value="Male"
              type="radio"
              onChange={newData}
              // onChange={() => {
              //   formik.setFieldValue("gender", "M");
              // }}
              checked={updateData && updateData.gender == "Male"}
              required
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="mb-3">
            <input
              className="form-check-input"
              name="gender"
              value="Female"
              type="radio"
              onChange={newData}
              // onChange={() => formik.setFieldValue("gender", "F")}
              checked={updateData && updateData.gender == "Female"}
            />
            <label className="form-check-label">Female</label>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
