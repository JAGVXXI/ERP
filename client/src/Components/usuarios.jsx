import axios from "axios";
import { tr } from "date-fns/locale";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { async } from "rxjs";

const urlWithProxy = "/api/user/User/";

const CompShowUser = () => {
    
    const [users, setUser]= useState([])
    useEffect ( ()=>{
        getUsers()
    },[])

    //mostrar user
    const getUsers = async () =>{
        const res = await axios.get(urlWithProxy)
        setUser(res.data)
    }
    
    //eliminar user
    const delateUser = async(id)=>{
        await axios.delete(`${urlWithProxy}${id}`)
        getUsers()
    }
    return(
        <div className="container">
            <h2>USUARIOS</h2>
            <div className="row">


            


                <div className="col">
                    <table className="table ">
                        <thead className="table-dark ">
                            <tr className="">                                
                                <th >nombre</th>
                                <th >usuario</th>
                                <th >Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {users.map ( (user) =>(
                                <tr key={user.id}>
                                    <td>{user.nameU}</td>
                                    <td>{user.username}</td>
                                    <td>
                                        <Link to="/Admin/create" className="btn btn-warning mt-2 mb-2"><i class="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>delateUser(user.id)} className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Link to="/Admin/create" className="btn btn-success mt-2 mb-2"><i className="fa-solid fa-plus"></i></Link>
        </div>
    )
}

export default CompShowUser
