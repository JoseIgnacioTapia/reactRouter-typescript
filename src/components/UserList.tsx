import { useState } from 'react';
import { IUser2 } from '../models/IUsers';
import { UserService } from '../services/UserService';

interface IState {
  users: IUser2[];
}
interface IProps {}

const UserList: React.FC<IProps> = () => {
  const [state, setState] = useState({
    users: UserService.getAllUsers(),
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3">User List</p>
          </div>
        </div>
        <div className="orw">
          <div className="col">
            <table className="table table-striped text-center table-hover shadow-lg">
              <thead className="bg-dark text-white">
                <tr>
                  <th>SNO</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Designation</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {state.users.length > 0 &&
                  state.users.map(user => {
                    return (
                      <tr key={user.sno}>
                        <td>{user.sno}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.designation}</td>
                        <td>{user.company}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
