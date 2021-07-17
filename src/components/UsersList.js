import React, { useContext } from "react";
import { UsersContext } from "../Context/usersContext";

function UserList() {
  const { usersList, setUsersList, setUserData, setEdit } =
    useContext(UsersContext);

  var deleteUser = function (id) {
    const ul = usersList;
    if (id > -1) {
      ul.splice(id, 1);
    }
    setUsersList([...ul]);
  };

  var editUser = function (id) {
    setEdit(true);
    setUserData({ ...usersList[id], id });
  };

  var tableBody = usersList.map(function (user, index) {
    return (
      <div className="section-2 inner" key={index}>
        <div>{user.name}</div>
        <div>{user.ci}</div>
        <div>{user.phone}</div>
        <div>{user.mail}</div>
        <div>
          <button
            onClick={function () {
              return deleteUser(index);
            }}
          >
            Delete
          </button>
          <button
            onClick={function () {
              return editUser(index);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="section-2">
        <h3 className="label">Name</h3>
        <h3 className="label">CI</h3>
        <h3 className="label">Phone</h3>
        <h3 className="label">Mail</h3>
        <h3 className="label">Actions</h3>
      </div>
      {tableBody}
    </div>
  );
}

export default UserList;
