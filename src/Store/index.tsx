import { produce } from "immer";
import { create } from "zustand";

type GlobalDataObject = {
  firstName: string;
  lastName: string;
};

type State = {
  globalData: GlobalDataObject;
};

type Action = {
  setGlobalData: (key: string, data: string) => void;
};

const useStore = create<State & Action>((set) => ({
  globalData: {
    firstName: "",
    lastName: "",
  },
  setGlobalData: (key, data) =>
    set(
      produce((state: State) => {
        state.globalData["firstName"] = data;
        state.globalData["lastName"] = data;
      })
    ),
}));

export default useStore;
