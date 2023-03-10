import React from "react";
import { Employee } from "../model/Employee";
interface IProps {
  employee: Employee;
  deleteEmployee: (e: Employee) => void;
}
export const SingleEmployeeView = (props: IProps) => {
  const { employee, deleteEmployee } = props;
  return (
    <div className="col-sm-6 col-md-4">
      <div className="card border-white">
        {/* <div className="card-header">Heading 3</div> */}
        <div className="card-body">
          <p className="card-text">{`Id: ${employee.id}`}</p> <br />
          <p className="card-text">{`Frist name: ${employee.firstName}`}</p>{" "}
          <br />
          <p className="card-text">{`Last Name: ${employee.lastName}`}</p>{" "}
          <br />
          <p className="card-text">{`Email: ${employee.email}`}</p> <br />
          <p className="card-text">{`Designation: ${employee.designation}`}</p>{" "}
          <br />
        </div>
        <div className="card-footer">
          <button
            className="btn btn-danger"
            onClick={() => deleteEmployee(employee)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};
