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
              <Route exact path="/" component = {ContactListComponent}></Route>
              <Route  path="/contacts" component = {ContactListComponent}></Route>
              <Route  path="/add" component = {AddContactComponent} ></Route>
              <Route  path="/update/:contId" component = {AddContactComponent}></Route>
            </Routes>
            <ContactListComponent />
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
