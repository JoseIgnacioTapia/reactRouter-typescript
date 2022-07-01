import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { IUserAxios } from '../models/IUsers';
import { UserServiceAxios } from '../services/UserService';

interface URLParams {
  id: string;
}
interface IState {
  loading: boolean;
  user: IUserAxios;
  errorMessage: string;
}
interface IProps {}

const UserDetails: React.FC<IProps> = () => {
  const { id } = useParams<URLParams | any>();

  const [state, setState] = useState<IState>({
    loading: false,
    user: {} as IUserAxios,
    errorMessage: '',
  });

  useEffect(() => {
    if (id) {
      UserServiceAxios.getUser(id)
        .then(response => {
          setState({
            ...state,
            loading: false,
            user: response.data,
          });
        })
        .catch(error => {
          setState({
            ...state,
            loading: false,
            errorMessage: error.message,
          });
        });
    }
  }, [id]);

  const { loading, user, errorMessage } = state;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3 text-success fw-bold">User Details</p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              est unde vel odit aliquam quisquam.
            </p>
          </div>
        </div>
        {Object.keys(user).length > 0 && (
          <div className="row">
            <div className="col">
              <ul className="list-group">
                <li className="list-group-item">
                  Name: <span className="fw-bold">{user.name}</span>
                </li>
                <li className="list-group-item">
                  Email: <span className="fw-bold">{user.email}</span>
                </li>
                <li className="list-group-item">
                  Company: <span className="fw-bold">{user.company.name}</span>
                </li>
                <li className="list-group-item">
                  City: <span className="fw-bold">{user.address.city}</span>
                </li>
                <li className="list-group-item">
                  Zip Code:{' '}
                  <span className="fw-bold">{user.address.zipcode}</span>
                </li>
              </ul>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col">
            <Link to={'/'} className="btn btn-success mt-3">
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
