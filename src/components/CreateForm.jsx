import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailsSlice";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useFormik } from "formik";
import { StudentvalidationSchema } from "../ValidationSchema/ValidationSchema";

const CreateForm = () => {
  const options = [
    { value: "front end developer", label: "Front End Developer" },
    { value: "backend developer", label: "Backend Developer" },
    { value: "full stack developer", label: "Full Stack Developer" },
    { value: "php developer", label: "Php Developer" },
    { value: "mern stack developer", label: "Mern Stack Developer" },
    { value: "java developer", label: "Java Developer" },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    age: "",
    dateOfBirth: "",
    address: "",
    course: "",
    gender: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: StudentvalidationSchema,
    onSubmit: (values) => {
      console.log("values", values);
      let payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        age: values.age,
        dateOfBirth: values.dateOfBirth,
        address: values.address,
        course: values.course,
        gender: values.gender,
      };
      dispatch(createUser(payload));
      console.log(payload);
      navigate("/read");
    },
  });

  console.log("formik values", formik);

  return (
    <div className="">
      <div className="d-flex align-items-center justify-content-center mt-4">
        <h2 className="my-2">Enter Student Details</h2>
      </div>
      <form className="w-50 mx-auto my-5" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            {...formik.getFieldProps("name")}
          />
        </div>
        <div>
          {formik.errors.name && formik.touched.name ? (
            <p className="errorStyle">{formik.errors.name}</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            {...formik.getFieldProps("email")}
            required
          />
        </div>
        <div>
          {formik.errors.email && formik.touched.email ? (
            <p className="errorStyle">{formik.errors.email}</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">phone</label>
          <input
            type="phone"
            name="phone"
            className="form-control"
            {...formik.getFieldProps("phone")}
            required
          />
        </div>
        <div>
          {formik.errors.phone && formik.touched.phone ? (
            <p className="errorStyle">{formik.errors.phone}</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            {...formik.getFieldProps("age")}
          />
        </div>
        <div>
          {formik.errors.age && formik.touched.age ? (
            <p className="errorStyle">{formik.errors.age}</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">DOB</label>
          <input
            type="date"
            name="dateOfBirth"
            className="form-control"
            {...formik.getFieldProps("dateOfBirth")}
          />
        </div>
        <div>
          {formik.errors.dateOfBirth && formik.touched.dateOfBirth ? (
            <p className="errorStyle">{formik.errors.dateOfBirth}</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            {...formik.getFieldProps("address")}
          />
          <div>
            {formik.errors.address && formik.touched.address ? (
              <p className="errorStyle">{formik.errors.address}</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Select Course</label>
          <Select
            options={options}
            onChange={(e) => {
              console.log(e, "eee");
              formik.setFieldValue("course", e.value);
            }}
          />
        </div>
        <div>
          {formik.errors.course && formik.touched.course ? (
            <p className="errorStyle">{formik.errors.course}</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <input
            type="radio"
            id="male"
            name="gender"
            value={formik.values.gender}
            onChange={() => {
              formik.setFieldValue("gender", "M");
            }}
          />
          <label className="form-check-label">Male</label>
        </div>

        <div className="mb-3">
          <input
            type="radio"
            id="female"
            name="gender"
            value={formik.values.gender}
            onChange={() => formik.setFieldValue("gender", "F")}
          />
          <label className="form-check-label">Female</label>
        </div>

        <div>
          {formik.errors.gender && formik.touched.gender ? (
            <p className="errorStyle">{formik.errors.gender}</p>
          ) : (
            ""
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
