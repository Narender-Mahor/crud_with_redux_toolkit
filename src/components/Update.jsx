import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailsSlice";
import { useNavigate } from "react-router-dom";

const Update = () => {
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
              value={updateData && updateData.age}
              required
            />
          </div>
          <div className="mb-3">
            <input
              className="form-check-input"
              name="gender"
              value="Male"
              type="radio"
              onChange={newData}
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
