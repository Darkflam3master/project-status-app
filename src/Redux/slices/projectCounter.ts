import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface ProjectState {
  projects: {
    id: number;
    projectName: string;
    projectManager: string;
    overallStatus: string;
    percentageComplete: number;
    modifiedDate: Date;
  }[];
  totalProjects: number;
  redProjects: number;
  yellowProjects: number;
  greenProjects: number;
}

// Define the initial state using that type
const initialState: ProjectState = {
  projects: [],
  totalProjects: 0,
  redProjects: 0,
  yellowProjects: 0,
  greenProjects: 0,
};

export const counterSlice = createSlice({
  name: "projectStatus",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setInitialData: (state, { payload }) => {
      console.log("setInitialData");

      state.projects = payload;
      //   state.totalProjects = payload.total;
      //   state.redProjects = payload.red;
      //   state.yellowProjects = payload.yellow;
      //   state.greenProjects = payload.green;
    },
  },
});

export const { setInitialData } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.projectCounter;

export default counterSlice.reducer;
