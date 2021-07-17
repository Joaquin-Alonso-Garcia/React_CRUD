// Importar el hook que hace que cambie el estado de la app
import React, { useState } from "react";
import { UsersContext } from "../Context/usersContext";
import UserList from "./UsersList";
import Inputs from "./Inputs";

function Form() {
  const userData = {
    name: "",
    ci: "",
    phone: "",
    mail: "",
  };
  const [userDataState, setUserData] = useState(userData);

  const [usersList, setUsersList] = useState([]);

  const [editing, setEdit] = useState(false);

  return (
    <UsersContext.Provider
      value={{
        userDataState,
        setUserData,
        usersList,
        setUsersList,
        userData,
        editing,
        setEdit,
      }}
    >
      <div className="section-container">
        <Inputs />
        <UserList />
      </div>
    </UsersContext.Provider>
  );
}

export default Form;
