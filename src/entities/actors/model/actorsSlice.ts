import { ActorsType } from "@/shared/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  actors: ActorsType[];
  currentActor: ActorsType;
}
const initialState: State = {
  actors: [],
  currentActor: {
    enName: "",
    photo: "",
    description: "",
    id: 0,
  },
};

export const actorsSlice = createSlice({
  name: "actors",
  initialState,
  reducers: {
    setActors: (state, action: PayloadAction<ActorsType[]>) => {
      state.actors = action.payload;
    },
    setCurrentActor: (state, action: PayloadAction<ActorsType>) => {
      state.currentActor = action.payload;
    },
  },
});

export const { setActors, setCurrentActor } = actorsSlice.actions;
export default actorsSlice.reducer;
