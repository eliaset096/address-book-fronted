import axios from "axios";

const CONTACT_API_URL = "http://localhost:9595/api/address-book";

class ContactServices{
    
    getContacts(){
        return axios.get(CONTACT_API_URL+"/contacts");
    }

    addContact(contact){
        return axios.post(CONTACT_API_URL+"/add", contact);
    }

    getContact(contId){
        return axios.get(CONTACT_API_URL+"/cont-id/", contId);
    }

    modifyContact(contact){
        return axios.post(CONTACT_API_URL+"/update", contact);
    }


    deleteContact(contact){
        return axios.post(CONTACT_API_URL+"/delete", contact);
    }
    


}

export default new ContactServices();
