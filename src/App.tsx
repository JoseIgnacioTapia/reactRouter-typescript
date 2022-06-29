import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="grid">
          <div className="row">
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
