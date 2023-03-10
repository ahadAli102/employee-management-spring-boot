import React, { useState } from "react";
import { Employee } from "../model/Employee";

interface IProps {
  addEmployee: (employee: Employee) => void;
}

export const AddEmployeeView = (props: IProps) => {
  const [employee, setEmployee] = useState<Employee>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    designation: "",
  });

  let { id, firstName, lastName, email, designation } = employee;

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Frist name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) =>
            setEmployee({ ...employee, firstName: event.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) =>
            setEmployee({ ...employee, lastName: event.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) =>
            setEmployee({ ...employee, email: event.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Designation
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(event) =>
            setEmployee({ ...employee, designation: event.target.value })
          }
        />
      </div>

      <div className="text-center">
        <button
          className="btn btn-primary"
          onClick={() => props.addEmployee(employee)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
