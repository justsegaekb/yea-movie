import { CategoriesType, CategoriesTypeResponse } from "@/shared/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  categories: CategoriesTypeResponse[];
  currentCategory: CategoriesType;
}

const initialState: State = {
  categories: [],
  currentCategory: "",
};
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoriesTypeResponse[]>) => {
      state.categories = action.payload;
    },
    setCurrentCategory: (state, action: PayloadAction<CategoriesType>) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { setCategories, setCurrentCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
