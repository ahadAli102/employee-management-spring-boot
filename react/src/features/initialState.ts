import { Employee } from "../model/Employee";

export type InitialState = {
  add: {
    loading: boolean;
    employee: Employee | null;
    error: string;
  };
  get: {
    loading: boolean;
    employees: Employee[];
    error: string;
  };
  update: {
    loading: boolean;
    employee: Employee | null;
    error: string;
  };
  delete: {
    loading: boolean;
    success: string;
    error: string;
  };
};

export const initialState : InitialState ={
    add: {
        loading: false,
        employee: null,
        error: ""
    },
    get: {
        loading: false,
        employees: [],
        error: ""
    },
    update: {
        loading: false,
        employee: null,
        error: ""
    },
    delete: {
        loading: false,
        success: "",
        error: ""
    }
}