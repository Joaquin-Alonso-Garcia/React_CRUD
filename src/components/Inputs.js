import React, { useContext } from "react";
import { UsersContext } from "../Context/usersContext";

function Inputs() {
  const {
    userDataState,
    setUserData,
    usersList,
    setUsersList,
    userData,
    editing,
    setEdit,
  } = useContext(UsersContext);

  const handler = function (e) {
    console.log(userDataState);
    const { name, value } = e.target;
    setUserData({ ...userDataState, [name]: value });
  };

  const submit = function (e) {
    e.preventDefault();
    var currentUsers = usersList;

    if (editing) {
      console.log(userDataState);
      const usd = { ...userDataState };
      delete usd.id;
      edit(userDataState.id, usd, currentUsers);
    } else {
      currentUsers.push(userDataState);
      setUsersList([...currentUsers]);
    }

    setUserData(userData);
  };

  const edit = function (id, values, users) {
    users[id] = values;
    setUsersList([...users]);
    setEdit(false);
  };

  return (
    <>
      <div className="section-1">
        <h3 className="label">Name</h3>
        <input
          type="text"
          id="username"
          name="name"
          value={userDataState.name}
          onChange={handler}
        />
        <h3 className="label">CI</h3>
        <input
          type="text"
          id="ci"
          name="ci"
          value={userDataState.ci}
          onChange={handler}
        />
        <h3 className="label">Phone</h3>
        <input
          type="text"
          id="phone"
          name="phone"
          value={userDataState.phone}
          onChange={handler}
        />
        <h3 className="label">Mail</h3>
        <input
          type="text"
          id="mail"
          name="mail"
          value={userDataState.mail}
          onChange={handler}
        />
        {editing ? (
          <button className="btn btn-main" onClick={submit}>
            edit
          </button>
        ) : (
          <button className="btn btn-main" onClick={submit}>
            Submit
          </button>
        )}
      </div>
    </>
  );
}

export default Inputs;
