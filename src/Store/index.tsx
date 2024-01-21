import { create } from "zustand";

const useStore = create((set) => ({
  globalData: {},
  setGlobalData: () => set((state) => ({})),
}));

export default useStore;
