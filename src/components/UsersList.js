import React, { useState } from 'react'; 
function UserList(props) {
  // se guarda los usuarios en un arreglo

  

  // Funcion Delete declarada antes de usarla
  var deleteUser = function(id) {
    console.log(id);
  }

  var editUser = function(id) {
    console.log(id);
  }

  
  // utilizamos la funcion map para iterar por todos los objetos del arreglo y generar un section-2 inner por cada usuario y sus distintos datos.
  var tableBody = props.users.map(function(user, index) {
    return (
      <div className = 'section-2 inner' key = {index}>
        <div>{user.name}</div>
        <div>{user.ci}</div>
        <div>{user.phone}</div>
        <div>{user.mail}</div>
        <div>
          <button onClick={function(){return deleteUser(index)}}>Delete</button>
          <button onClick={function(){return editUser(index)}}>Edit</button>
        </div>
      </div>
    )
  })

  return (
    tableBody
  )
}

export default UserList