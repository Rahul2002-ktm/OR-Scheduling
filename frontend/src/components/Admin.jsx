import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";

function Admin() {
  const [users, setUsers] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3001/admin")
      .then((users) => {
        setUsers(users.data), console.log(users.data);
      })
      .catch((err) => console.log(err));
  }, []);
  if (!users) return " ";

  return (
    <div>
      <div className="w-100 d-flex justify-content-center align-items-center">
      <div className="w-50">
        <h1 className="text-center mb-5 mt-4"> Welcome Admin </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="table-dark border">S.N</th>
              <th className="table-primary border">Name</th>
              <th className="table-danger border">Email</th>
              <th className="table-success border">Password</th>
              <th className="table-light border">City</th>
              <th className="table-info border">Phone No</th>
            </tr>
          </thead>
          <tbody>
            {users.data.map((user, index) => {
              return (
                <tr key={index + 1}>
                  <td className="table-dark border"> {index + 1}</td>
                  <td className="table-primary border"> {user.name}</td>
                  <td className="table-danger border"> {user.email}</td>
                  <td className="table-success border"> {user.password}</td>
                  <td className="table-light border"> {user.city}</td>
                  <td className="table-info border"> {user.phoneno}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> 
    </div>
    <div className="text-center">
    <Link to="/Home/algorithm" class="btn btn-primary">
        Next
      </Link>
    </div>
    
    </div>
    
  );
}

export default Admin;
