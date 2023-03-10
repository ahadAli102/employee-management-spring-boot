import React, { useState } from "react";
import { Employee } from "../model/Employee";

interface IProps {
  editEmployee: (employee: Employee) => void;
  cancle: () => void;
  employee: Employee;
}
export const EditEmployee = (props: IProps) => {
  const [employee, setEmployee] = useState<Employee>(props.employee);
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
          value={employee.firstName}
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
          value={employee.lastName}
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
          value={employee.email}
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
          value={employee.designation}
        />
      </div>

      <div className="text-center">
        <button
          className="btn btn-primary me-2"
          onClick={() => props.editEmployee(employee)}
        >
          Edit
        </button>
        <button className="btn btn-primary" onClick={() => props.cancle()}>
          CANCEL
        </button>
      </div>
    </div>
  );
};
