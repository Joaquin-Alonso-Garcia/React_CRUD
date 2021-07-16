// Importar el hook que hace que cambie el estado de la app
import React, { useState } from 'react'; 
import UserList from './UsersList';

// Componente
function Form() {

  // var usersDB = [
  //   {
  //     name: "dummyData",
  //     ci: "dummyData",
  //     phone: "dummyData",
  //     mail: "dummyData"
  //   },
  //   {
  //     name: "dummyData",
  //     ci: "dummyData",
  //     phone: "dummyData",
  //     mail: "dummyData"
  //   },
  //   {
  //     name: "dummyData",
  //     ci: "dummyData",
  //     phone: "dummyData",
  //     mail: "dummyData"
  //   }
  // ]
  // Objeto que guarda el data del input
  var userData = {name:'Pepe', ci:'', phone:'', mail:''} 
  // Como se inicializa el estado, le pasas una variable que tienen los inputs (lectura), el set actualiza el estado (escribir) igual a funcion que recibe un parametro que es el estado principal, useState(el primer valor del estado)
  const [userDataState, setUserData] = useState(userData)
  // Inicializo el estado de todos los usuarios, en este caso no hay usuarios y por eso regresa un arreglo vacío
  const [usersList, setUsersList] = useState([])
  // funcion que recibe un parametro, solo se usa onChange en un elemento que tenga target y el objeto que se le pasa. Despues se descompone el target en 2 variables, extender el userDataState, le pasas el objeto y en la segunda parte le reemplazas una parte del objeto. Primero copia todo el estado y despues actualiza el valor que se queire cambiar y los corchetes son para que el focus del target sea dinamico. El setUserData solo puede recibir un parametro, en este caso es la copia del estado y el valor que se actualiza
  const handler = function (e){
    const {name, value} = e.target
    setUserData({...userDataState,[name]:value})
  }
  // Funcion del boton, se utiliza un prventDefault para impedir que la pagina haga un redirect.
  const submit = function (e){
    e.preventDefault()
    // Muestra el estado actual del userData
    var currentUsers = usersList
    currentUsers.push(userDataState)
    setUsersList(currentUsers)
  }
  // Siempre tiene que pasar return div[padre]
  // Form cualquiera
  // se usan {} para poner variables
  return(<div className = 'section-container'>
    <div className = 'section-1'>
      <h3 className = 'label'>Name</h3>
      <input type="text" id="username" name="name" value={userDataState.name} onChange={handler}/>
      <h3 className = 'label'>CI</h3>
      <input type="text" id="ci" name="ci" value={userDataState.ci} onChange={handler}/>
      <h3 className = 'label'>Phone</h3>
      <input type="text" id="phone" name="phone" value={userDataState.phone} onChange={handler}/>
      <h3 className = 'label'>Mail</h3>
      <input type="text" id="mail" name="mail" value={userDataState.mail} onChange={handler}/>
      <button className = 'btn btn-main' onClick = {submit}>Submit</button>
    </div>
    <div>
      <div className = 'section-2'>
        <h3 className = 'label'>Name</h3>
        <h3 className = 'label'>CI</h3>
        <h3 className = 'label'>Phone</h3>
        <h3 className = 'label'>Mail</h3>
        <h3 className = 'label'>Actions</h3>
      </div>
      <UserList users={usersList}/>
    </div>
  </div>)
}

export default Form;