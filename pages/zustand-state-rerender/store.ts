import { create } from "zustand";
import type { FruitState } from "./interfaces";


// Two separate stores for comparison
const useDesctructedFruit = create<FruitState>()((set) => ({
    appleStock: 0,
    increaseAppleStock() {
        set((state) => ({ appleStock: state.appleStock + 1 }))
    },
    bananaStock: 0,
    increaseBananaStock() {
        set((state) => ({ bananaStock: state.bananaStock + 1 }))
    },
}));

const useOneByOneFruit = create<FruitState>()((set) => ({
    appleStock: 0,
    increaseAppleStock() {
        set((state) => ({ appleStock: state.appleStock + 1 }))
    },
    bananaStock: 0,
    increaseBananaStock() {
        set((state) => ({ bananaStock: state.bananaStock + 1 }))
    },
}));

export { useDesctructedFruit, useOneByOneFruit }