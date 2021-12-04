import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import ContactServices from '../services/ContactServices'

const ContactListComponent = () => {

    const [contacts, setContacts] = useState([]);

    const getAllContacts = ()=>{
        ContactServices.getContacts().then((response)=>{
            setContacts(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        });
    }

    useEffect(() => {
        getAllContacts();
    }, [])

    
    const deleteContact = (contact)=>{
        ContactServices.deleteContact(contact)
        .then(()=>{
            getAllContacts();
        }).catch((error)=>{
            console.log(error)
        })
    }


    return (
        <div className="container">
            <h2  className="text-center"> Lista de Contactos </h2>
            <Link to="/add-contact/" className="btn btn-primary mb-2"> Agregar Contacto </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Nombre</th>
                    <th> Apellido </th>
                    <th> Número Teléfono </th>
                    <th> Correo </th>
                    <th> Dirección </th>
                    <th> Empresa </th>
                    <th> Puesto </th>
                    <th> Acciones </th>
                </thead>
                <tbody>
                    {
                        contacts.map(
                            contact =>
                            <tr key={contact.contId}>
                                <td>{contact.firstName}</td>
                                <td>{contact.lastName}</td>
                                <td>{contact.phoneNumber}</td>
                                <td>{contact.email}</td>
                                <td>{contact.address}</td>
                                <td>{contact.company}</td>
                                <td>{contact.jobPosition}</td>
                                <td>
                                    <Link to={`/modify-contact/${contact.contId}`} className="btn btn-info"> Modificar </Link>
                                    <button className="btn  btn-danger" onClick={()=>deleteContact(contact)} style={{marginLeft:"10px"}}> Borrar </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table> 
        </div>
    )
}

export default ContactListComponent
