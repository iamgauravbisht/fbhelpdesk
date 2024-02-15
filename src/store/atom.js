import { atom } from "recoil";

export const conversationsAtom = atom({
  key: "conversationsAtom",
  default: "true",
});

export const messagesAtom = atom({
  key: "messagesAtom",
  default: "false",
});

export const profileAtom = atom({
  key: "profileAtom",
  default: "false",
});
