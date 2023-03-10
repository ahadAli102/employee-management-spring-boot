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
  },
});

export default employeeSlice.reducer;
