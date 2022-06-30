import { useEffect, useState } from 'react';
import { IUserAxios } from '../models/IUsers';
import { UserServiceAxios } from '../services/UserService';

interface IState {
  loading: boolean;
  users: IUserAxios[];
  errorMessage: string;
}
interface IProps {}

const UserListAxios: React.FC<IProps> = () => {
  const [state, setState] = useState<IState>({
    loading: false,
    users: [] as IUserAxios[],
    errorMessage: '',
  });

  useEffect(() => {
    setState({ ...state, loading: true });

    UserServiceAxios.getAllUsers()
      .then(response => {
        setState({
          ...state,
          loading: false,
          users: response.data,
        });
      })
      .catch(error => {
        setState({
          ...state,
          loading: false,
          errorMessage: error.message,
        });
      });
  }, []);

  const { loading, users, errorMessage } = state;

  return (
    <>
      <h3>UserListAxios</h3>
      <div className="container">
        <div className="row">
          <table className="table table-hover text-center table-striped">
            <thead className="bg-success text-white">
              <tr>
                <th>SNO</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Company</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map(user => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.company.name}</td>
                      <td>{user.website}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserListAxios;
