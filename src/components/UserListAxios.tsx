import { useEffect, useState } from 'react';
import { IUserAxios } from '../models/IUsers';
import { UserServiceAxios } from '../services/UserService';
import { Link } from 'react-router-dom';

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
      <div className="container  mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 fw-bold text-success">User List</p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              voluptas necessitatibus eos debitis officiis molestiae.
            </p>
          </div>
        </div>
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
                      <td>
                        <Link
                          to={`/contacts/${user.id}`}
                          className="text-decoration-none text-success fw-bold"
                        >
                          {user.name}
                        </Link>
                      </td>
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
