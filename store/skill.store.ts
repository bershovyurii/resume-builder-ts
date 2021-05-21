import { GetState, SetState } from "zustand";
import { updateArray } from "../utils";
import { SkillStore } from "./types";

const skillStore = <SkillObjectType>(
  set: SetState<SkillStore<SkillObjectType>>,
  get: GetState<SkillStore<SkillObjectType>>
): SkillStore<SkillObjectType> => ({
  format: "CATEGORIES",
  isDisabled: false,
  toggleDisabled: () => set((state) => ({ isDisabled: !state.isDisabled })),
  toggleFormat: () =>
    set((state) => ({
      format: state.format === "CATEGORIES" ? "TAGS" : "CATEGORIES",
    })),
  data: [],
  setData: (list) => set({ data: list }),
  add: (obj) => set((state) => ({ data: [...state.data, obj] })),
  //Updates an object at a particular index with a key and value pair.
  update: (index, key, value) => {
    const obj = { ...get().data[index], [key]: value };
    set((state) => ({ data: updateArray(state.data, index, obj) }));
  },
});

export default skillStore;
