import * as React from "react";
import { IExcercise1Props, IUser } from "../interface";
import "./style.css";

const UserRows = ({
  user,
  onViewUserLocation
}: Partial<IExcercise1Props> & { user: IUser }) => {
  const { name, company, address } = user;
  const names = name.split(" ");
  const firstName = names[0];
  const lastName = names[1];
  const companyName = company.name;

  const { street, suite, zipcode } = address;
  const formattedAddress = `${suite}, ${street}, ${zipcode}`;

  return (
    <tr key={user.id}>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{companyName}</td>
      <td>{formattedAddress}</td>
    </tr>
  );
};

const Excersice1View = ({ list, onViewUserLocation }: IExcercise1Props) => {
  return (
    <div className="container">
      <h2 className="text-center">User list</h2>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {list.map((user: IUser) => (
            <UserRows user={user} onViewUserLocation={onViewUserLocation} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(Excersice1View);
