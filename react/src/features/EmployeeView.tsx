import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchEmployees } from "./employeeSlice";

export const EmployeeView = () => {
  const employee = useAppSelector((state) => state.employee.get);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);
  return (
    <div>
      {employee.employees.map((e) => {
        return <div>{`Id: ${e.id}\n Name: ${e.firstName}`}</div>;
      })}
    </div>
  );
};
