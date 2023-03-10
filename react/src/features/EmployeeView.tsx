import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { AddEmployeeView } from "../component/AddEmployeeView";
import { SingleEmployeeView } from "../component/SingleEmployeeView";
import { Employee } from "../model/Employee";
import { fetchEmployees, deleteEmp, addEmp } from "./employeeSlice";

export const EmployeeView = () => {
  const employee = useAppSelector((state) => state.employee.get);
  const [addEmployeeView, setAddEmployeeView] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  const deleteEmployee = (employee: Employee) => {
    console.log(`${employee.id} will be deleted`);
    // dispatch(deleteEmployee(employee.id));
    dispatch(deleteEmp(employee));
  };

  const addEmployee = (employee: Employee) => {
    console.log(
      ` ${employee.id} ${employee.firstName} ${employee.lastName} ${employee.email} ${employee.designation} will be added`
    );
    dispatch(addEmp(employee));
    setAddEmployeeView(false);
  };

  return (
    <div className="row">
      {addEmployeeView && <AddEmployeeView addEmployee={addEmployee} />}
      <button
        className="btn btn-primery"
        onClick={() => setAddEmployeeView(true)}
      >
        Add Employee
      </button>
      {employee.employees.map((e) => {
        return (
          <SingleEmployeeView
            key={e.id}
            employee={e}
            deleteEmployee={deleteEmployee}
          />
        );
      })}
    </div>
  );
};
