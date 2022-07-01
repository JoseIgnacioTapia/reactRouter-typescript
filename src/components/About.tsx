import React from 'react';

interface IState {}
interface IProps {}

const About: React.FC<IProps> = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-success fw-bold">About US</p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              sapiente, optio cum harum ipsa labore?
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item">
                App Name:{' '}
                <span className="fw-bold">React Router With Typescript</span>
              </li>
              <li className="list-group-item">
                Author: <span className="fw-bold">Joe IT</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
