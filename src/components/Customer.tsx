interface IProps {
  name: string;
  age: number;
  title: string;
}

const Customer: React.FC<IProps> = ({ name, age, title }: IProps) => {
  console.log(name, age, title);

  return (
    <>
      <h2>Customer Component</h2>
      <ul className="list-group">
        <li className="list-group-item">Name: {name}</li>
        <li className="list-group-item">Age: {age}</li>
        <li className="list-group-item">Ttile: {title}</li>
      </ul>
    </>
  );
};

export default Customer;
