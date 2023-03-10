import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { editEmp } from "../features/employeeSlice";
import { Employee } from "../model/Employee";
import { EditEmployee } from "./EditEmployee";
interface IProps {
  employee: Employee;
  deleteEmployee: (e: Employee) => void;
}
export const SingleEmployeeView = (props: IProps) => {
  const { employee, deleteEmployee } = props;
  const [editmployeeView, setEditEmployeeView] = useState(false);

  const dispatch = useAppDispatch();

  const editEmployee = (employee: Employee) => {
    dispatch(editEmp(employee));
    setEditEmployeeView(false);
  };

  const cancle = () => {
    setEditEmployeeView(false);
  };
  return (
    <div className="col-sm-6 col-md-4">
      {editmployeeView ? (
        <EditEmployee
          editEmployee={editEmployee}
          employee={employee}
          cancle={cancle}
        />
      ) : (
        <div className="card border-white">
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
              className="btn btn-danger me-2"
              onClick={() => deleteEmployee(employee)}
            >
              DELETE
            </button>
            <button
              className="btn btn-warning"
              onClick={() => setEditEmployeeView(true)}
            >
              EDIT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
