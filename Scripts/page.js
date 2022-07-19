import { getData } from "./apipetition.js";



const body = document.body;
let tbody


const crearHtml = () => {
    
    const html = `
    <h1> Usuarios </h1>
    <hr/>

    <table class="table">
        <thead>
            <tr>
                <td scope="col">ID</td>
                <td scope="col">Email</td>
                <td scope="col">Name</td>
               
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    div.classList.add('container')
    body.appendChild( div );


    tbody = document.querySelector('tbody')
  
 



}



const crearUsuario = async(user) => {

    
const html = `

        
        <td scope="col">${user.id} </td>
        <td scope="col"> ${user.email}</td>
        <td scope="col"> ${user.first_name} ${user.last_name}</td>
      
     
    `;



   
 

    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tbody.append(tr)

}

const crearFila = async () =>{
    const  usuarios = await getData()
    for(let user of usuarios ){
        crearUsuario(user)
    }
}


const init = () => {

  crearHtml()
  crearFila()

};

export { init };
