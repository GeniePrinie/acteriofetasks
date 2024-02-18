import { useState } from "react";
import { deleteData } from "../Api/deleteData";
import { BASE_ENDPOINT } from "../Utility/constants";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { displayDateTime } from "../Utility/datetime";

export const DeleteButton = ({ id }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleDelete = async () => {
    try {
      const result = await deleteData(`${BASE_ENDPOINT}/${id}`);
      console.log(result);
      alert(
        `Post ${result.id} deleted on ${displayDateTime(result.deletedOn)}`
      );
      navigate("/");
    } catch (error) {
      alert("An error occured: " + error.message);
    }
  };

  return (
    <div
      className="dropdown pt-3 pe-4"
      style={{ position: "absolute", top: "0", right: "0" }}
    >
      <button
        onClick={handleShow}
        className="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <FontAwesomeIcon icon={faEllipsis} className="text-dark" />
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <button
          className="dropdown-item"
          onClick={handleDelete}
          show={show ? "true" : "false"}
        >
          Delete
        </button>
        <button
          className="dropdown-item"
          onClick={handleClose}
          show={show ? "true" : "false"}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
