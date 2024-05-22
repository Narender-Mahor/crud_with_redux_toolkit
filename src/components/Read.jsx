import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailsSlice";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const { users, loading } = useSelector((state) => {
    return state.app;
  });

  console.log(users);

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <>
      <h1 className="text-center mt-5">All Data</h1>

      {users &&
        users?.map((elem) => {
          return (
            <>
              <div key={elem.id}>
                <div className="card w-50 mx-auto mt-5 shadow p-3 rounded-3">
                  <div className="card-body">
                    <h5 className="card-title">Name - {elem.name}</h5>
                    <p>Email - {elem.email}</p>
                    <p>Age - {elem.age}</p>
                    <p className="card-text">Gender - {elem.gender}</p>
                    <p className="card-text">Phone - {elem.phone}</p>
                    <p className="card-text">Address - {elem.address}</p>
                    <p className="card-text">DOB - {elem.dateOfBirth}</p>
                    <p className="card-text">Course - {elem.course}</p>

                    <div className=" text-center">
                      <Link
                        to={`/edit/${elem.id}`}
                        className="ms-3 mt-2 btn btn-primary"
                      >
                        Edit
                      </Link>

                      <button
                        className="ms-3 mt-2 btn btn-primary"
                        onClick={() => dispatch(deleteUser(elem.id))}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Read;
