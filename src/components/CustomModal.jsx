import React from "react";
import { useSelector } from "react-redux";

const CustomModal = ({ id, showPopup, setShowPopup }) => {
  const allusers = useSelector((state) => {
    return state.app.users;
  });

  const singleUser = allusers.filter((elem) => elem.id === id);
  console.log("singleUser", singleUser);
  return (
    <div className="modalBackground">
      <div className="modal-container">
        <button onClick={() => setShowPopup(false)}>Close</button>
        <h2>{singleUser[0].name}</h2>
        <h2>{singleUser[0].email}</h2>
        <h2>{singleUser[0].age}</h2>
        <h2>{singleUser[0].gender}</h2>
      </div>
    </div>
  );
};

export default CustomModal;
