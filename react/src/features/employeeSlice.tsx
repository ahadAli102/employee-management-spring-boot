import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Employee } from "../model/Employee";
import { initialState, InitialState } from "./initialState";

export const fetchEmployees = createAsyncThunk(
  "employees.fetchEmployees",
  () => {
    return axios
      .get("http://localhost:8080/hsenid/api/v1/employees")
      .then((response) => response.data);
  }
);

// export const  = createAsyncThunk(
//   ,
//   (employeeId: number) => {
//     return axios
//
//       .then((response) => response.data);
//   }
// );

export const deleteEmp = createAsyncThunk(
  "employees.deleteEmp",
  (employee: Employee) => {
    return axios
      .delete("http://localhost:8080/hsenid/api/v1/employees/" + employee.id)
      .then((response) => employee.id);
  }
);
export const addEmp = createAsyncThunk(
  "employees.addEmp",
  (employee: Employee) => {
    return axios
      .put("http://localhost:8080/hsenid/api/v1/employees", employee)
      .then((response) => response);
  }
);

export const editEmp = createAsyncThunk(
  "employees.editEmp",
  (employee: Employee) => {
    return axios
      .post(
        "http://localhost:8080/hsenid/api/v1/employees/" + employee.id,
        employee
      )
      .then((response) => response.data);
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.pending, (state) => {
      state.get.loading = true;
    });
    builder.addCase(
      fetchEmployees.fulfilled,
      (state, action: PayloadAction<Employee[]>) => {
        state.get.loading = false;
        state.get.employees = action.payload;
        state.get.error = "";
      }
    );
    builder.addCase(fetchEmployees.rejected, (state, action) => {
      state.get.loading = false;
      state.get.employees = [];
      state.get.error = action.error.message || "Failed to fetch employees";
    });

    builder.addCase(deleteEmp.pending, (state) => {
      state.delete.loading = true;
    });
    builder.addCase(deleteEmp.fulfilled, (state, action) => {
      state.delete.loading = false;
      state.delete.success = "Delete employee";
      state.delete.error = "";
      state.get.employees = state.get.employees.filter(
        (e) => e.id !== action.payload
      );
    });
    builder.addCase(deleteEmp.rejected, (state, action) => {
      state.delete.loading = false;
      state.delete.success = "";
      state.delete.error = action.error.message || "Failed to fetch employees";
    });

    builder.addCase(addEmp.pending, (state) => {
      state.add.loading = true;
    });
    builder.addCase(addEmp.fulfilled, (state, action) => {
      state.add.loading = false;
      state.add.employee = action.payload.data;
      state.delete.error = "";
      state.get.employees.unshift(action.payload.data);
    });
    builder.addCase(addEmp.rejected, (state, action) => {
      state.delete.loading = false;
      state.delete.success = "";
      state.delete.error = action.error.message || "Failed to fetch employees";
    });

    builder.addCase(editEmp.pending, (state) => {
      state.update.loading = true;
    });
    builder.addCase(
      editEmp.fulfilled,
      (state, action: PayloadAction<Employee>) => {
        state.get.employees = state.get.employees.map((emp) =>
          emp.id === action.payload.id ? { ...action.payload } : emp
        );
        state.update.loading = false;
        state.update.error = "";
        state.update.employee = action.payload;
      }
    );
    builder.addCase(editEmp.rejected, (state, action) => {
      state.update.loading = false;
      state.update.error = action.error.message || "Failed to fetch employees";
    });
  },
});

export default employeeSlice.reducer;
