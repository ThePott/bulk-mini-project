import { create } from "zustand";
import type { Page, HomeStoreState } from "../_interfaces/commonInterfaces";
import { pageArray } from "../_interfaces/commonInterfaces";

const initialDoShowModalDict = Object.fromEntries(
    pageArray.map((page) => [page, true])
) as Record<Page, boolean>


// Fold Level 2
const useCommonStore = create<HomeStoreState>()((set) => ({
    doShowModalDict: initialDoShowModalDict,

    updateDict(page, doShow) {
        set((state) => {
            const copiedDict = { ...state.doShowModalDict }
            copiedDict[page] = doShow

            return { doShowModalDict: copiedDict }
        })
    },
}))

export default useCommonStore