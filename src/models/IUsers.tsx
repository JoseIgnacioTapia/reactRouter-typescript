export interface IUser {
  username: string;
  password: string;
}

export interface IUser2 {
  sno: string;
  name: string;
  age: number;
  designation: string;
  company: string;
}

export interface IUserAxios {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
export interface Geo {
  lat: string;
  lng: string;
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
