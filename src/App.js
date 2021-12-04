import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactListComponent from './components/contactListComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AddContactComponent from './components/AddContactComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
            <Routes>
              <Route path="/" component = {ContactListComponent}></Route>
              <Route path="/contacts" component = {ContactListComponent}></Route>
            </Routes>
            <ContactListComponent />
            <Routes>
              <Route path="/add-contact" component = {AddContactComponent}></Route>
              <Route path="/modify-contact/:contact" component = {AddContactComponent}></Route>
            </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
