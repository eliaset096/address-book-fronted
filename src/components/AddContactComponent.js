import React, {useState, useEffect} from 'react'
import ContactServices from '../services/ContactServices';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddContactComponent = () => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [company, setCompany] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const navigate = useNavigate();
    const {contId} = useParams();

    const addOrModifyContact = (e)=>{
        e.preventDefault();
        const contact = {firstName, lastName, phoneNumber, email, address, company, jobPosition}
        if (contId) {
            ContactServices.modifyContact(contact).then((response)=>{
                navigate.push("/contacts");
            }).catch((error)=>{
                console.log(error);
            })
        } else {
            ContactServices.addContact(contact).then((response)=>{
                console.log(response.data);
                navigate.push('/contacts');
             }).catch((error)=>{console.log(error)});
        } 
    }

    useEffect(() => {
        ContactServices.getContact(contId).then((response)=>{
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setPhoneNumber(response.data.phoneNumber);
            setEmail(response.data.email);
            setAddress(response.data.address);
            setCompany(response.data.company);
            setJobPosition(response.data.jobPosition);
        }).catch((error)=>{
            console.log(error);
        })
    })


    const title = ()=>{
        if (contId) {
            return <h3 className="text-center"> Agregar Contacto</h3>
        } else {
            return <h3 className="text-center"> Modificar Contacto</h3>
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        { title()}
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Nombre </label>
                                    <input
                                        type="text" 
                                        placeholder="Ingrese el nombre" 
                                        name="firstName" 
                                        className="form-control" 
                                        value={firstName} 
                                        onChange={(e)=>setFirstName(e.target.value)}>
                                        </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Apellido </label>
                                    <input
                                        type="text" 
                                        placeholder="Ingrese el apellido" 
                                        name="lastName" 
                                        className="form-control" 
                                        value={lastName} 
                                        onChange={(e)=>setLastName(e.target.value)}>
                                        </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Número Teléfono </label>
                                    <input
                                        type="number" 
                                        placeholder="Ingrese el número de telefono" 
                                        name="phoneNumber" 
                                        className="form-control" 
                                        value={phoneNumber} 
                                        onChange={(e)=>setPhoneNumber(e.target.value)}>
                                        </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Correo </label>
                                    <input
                                        type="email" 
                                        placeholder="Ingrese el correo" 
                                        name="email" 
                                        className="form-control" 
                                        value={email} 
                                        onChange={(e)=>setEmail(e.target.value)}>
                                        </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Dirección </label>
                                    <input
                                        type="text" 
                                        placeholder="Ingrese la dirección" 
                                        name="address" 
                                        className="form-control" 
                                        value={address} 
                                        onChange={(e)=>setAddress(e.target.value)}>
                                        </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Empresa </label>
                                    <input
                                        type="text" 
                                        placeholder="Ingrese la empresa" 
                                        name="company" 
                                        className="form-control" 
                                        value={company} 
                                        onChange={(e)=>setCompany(e.target.value)}>
                                        </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Puesto </label>
                                    <input
                                        type="text" 
                                        placeholder="Ingrese el puesto" 
                                        name="jobPosition" 
                                        className="form-control" 
                                        value={jobPosition} 
                                        onChange={(e)=>setJobPosition(e.target.value)}>
                                        </input>
                                </div>
                                <button className="btn btn-success" onClick={(e)=>{addOrModifyContact(e)}}>Agregar</button>
                                <Link to="/contacts" className="btn btn-danger"> Cancelar </Link>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddContactComponent
