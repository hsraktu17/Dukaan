import { atom } from "recoil"

type sideeBarOpenType = boolean

export const sideeBarOpen = atom<sideeBarOpenType>({
    key : "sideeBarOpen",
    default : false
})