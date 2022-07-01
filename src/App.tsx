import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Customer from './components/Customer';
import Employee from './components/Employee';
import Greetings from './components/Greetings';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserList from './components/UserList';
import UserListAxios from './components/UserListAxios';
import UserDetails from './components/UserDetails';
import About from './components/About';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'} />} />
        <Route path={'/contacts/list'} element={<UserListAxios />} />
        <Route path={'/contacts/:id'} element={<UserDetails />} />
        <Route path={'/about'} element={<About />} />
      </Routes>

      <br />
      <br />

      <div className="container mt-3">
        <div className="grid">
          {/* <div className="row">
            <div className="col">
              <p className="h3 fw-bold text-success">App Component</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                hic dolorem veritatis eligendi tempora, natus earum delectus
                magni! Veniam nobis suscipit tempora corrupti molestiae,
                cupiditate iste quidem voluptatum nam soluta?
              </p>
              <button className="btn btn-success btn-sm">
                <i className="fa fa-book" />
                Read More
              </button>
            </div>
          </div> */}

          {/* <div className="row">
            <div className="col">
              <Customer name={'Rajan'} age={25} title={'Software Engineer'} />
            </div>
          </div> */}

          {/* <div className="row">
            <div className="col">
              <Employee />
            </div>
          </div> */}

          {/* <div className="row">
            <div className="col">
              <Counter />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Greetings />
            </div>
          </div> */}
          {/* <div className="row">
            <div className="col">
              <LoginForm />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <UserList />
            </div>
          </div> */}

          {/* <div className="row">
            <div className="col">
              <UserListAxios />
            </div>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
