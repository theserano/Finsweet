import { RootState } from "./store";

// subscribe
export const selectSubscribe = (state: RootState) => state.subscribe
export const selectContact = (state: RootState) => state.contact