import React, { useState } from 'react';
import { IUser } from '../models/IUsers';

interface IState {
  user: IUser;
}
interface IProps {}

const LoginForm: React.FC<IProps> = () => {
  const [state, setState] = useState<IState>({
    user: {
      username: '',
      password: '',
    },
  });

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      user: {
        ...state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  const login = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(state.user);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header text-center bg-primary text-white">
                <p className="h4">Login Here</p>
              </div>
              <div className="card-body">
                <form onSubmit={login}>
                  <div className="mb-2">
                    <input
                      required={true}
                      type="text"
                      className="form-control"
                      placeholder="Username/Password"
                      name="username"
                      value={state.user.username}
                      onChange={updateInput}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      required={true}
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={state.user.password}
                      onChange={updateInput}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Login"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
