import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailsSlice";
import CustomModal from "./CustomModal";
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
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h1 className="text-center mt-5">All Data</h1>
      <div>
        {users &&
          users?.map((elem) => {
            return (
              <>
                <div key={elem.id}>
                  <div className="card w-50 mx-auto mt-5">
                    <div className="card-body">
                      <h5 className="card-title">Name - {elem.name}</h5>
                      <p>Email - {elem.email}</p>
                      <p>Age - {elem.age}</p>
                      <p className="card-text">Gender - {elem.gender}</p>

                      <button
                        className="me-5"
                        onClick={() => [setId(elem.id), setShowPopup(true)]}
                      >
                        View
                      </button>

                      <Link to={`/edit/${elem.id}`} className="">
                        Edit
                      </Link>

                      <button
                        className="ms-5"
                        onClick={() => dispatch(deleteUser(elem.id))}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Read;
