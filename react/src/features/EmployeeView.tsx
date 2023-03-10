import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { SingleEmployeeView } from "../component/SingleEmployeeView";
import { Employee } from "../model/Employee";
import { fetchEmployees, deleteEmp } from "./employeeSlice";

export const EmployeeView = () => {
  const employee = useAppSelector((state) => state.employee.get);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  const deleteEmployee = (employee: Employee) => {
    console.log(`${employee.id} will be deleted`);
    // dispatch(deleteEmployee(employee.id));
    dispatch(deleteEmp(employee));
  };

  return (
    <div className="row">
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
