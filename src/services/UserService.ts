import axios from 'axios';
import { IUser2 } from '../models/IUsers';

export class UserService {
  private static users: IUser2[] = [
    {
      sno: 'AAA101',
      name: 'Rajan',
      age: 25,
      designation: 'Software Engineer',
      company: 'Infosys',
    },
    {
      sno: 'AAA102',
      name: 'John',
      age: 35,
      designation: 'Sr.Software Engineer',
      company: 'Infosys',
    },
    {
      sno: 'AAA103',
      name: 'Wilson',
      age: 45,
      designation: 'Tech Lead',
      company: 'Infosys',
    },
    {
      sno: 'AAA104',
      name: 'Laura',
      age: 55,
      designation: 'Project Manager',
      company: 'Infosys',
    },
  ];

  public static getAllUsers() {
    return this.users;
  }
}

export class UserServiceAxios {
  private static serverURL: string = `https://jsonplaceholder.typicode.com`;

  public static getAllUsers() {
    let dataURL: string = `${this.serverURL}/users`;
    return axios.get(dataURL);
  }
}
