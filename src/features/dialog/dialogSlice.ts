import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { RootState } from "../store";

// 1. 每次點擊就會產生新的（warning）燈箱
// 2. (normal) 燈箱點擊了才關閉
interface DialogProps {
  // warning or normal
  type: string;
  // ability
  dialogName?: string;
  title?: string;
  content: string;
  icon?: string;
  border?: string;
  extraStyle?: string;
}
export interface StateProps {
  dialogList: DialogProps[];
}

// 不需要存到 localStorage
const initialState: StateProps = {
  dialogList: [],
};

// export const CloseWarningDialogAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount: number) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    on: (state, action: PayloadAction<DialogProps>) => {
      state.dialogList.push(action.payload);
    },
    off: (state, action: PayloadAction<string>) => {
      return {
        dialogList: current(state).dialogList.filter(
          (i) => i.type !== action.payload
        ),
      };
    },
  },
});

// export const handleWarningDialog = createAsyncThunk(
//   'dialog/warning',
//   async () => {
//     return
//   }
// )

export const selectDialogList = (state: RootState) => state.dialog.dialogList;

export default dialogSlice.reducer;

export const { on, off } = dialogSlice.actions;
