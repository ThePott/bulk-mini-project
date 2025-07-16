import type { JSX, ReactNode } from 'react';

interface FruitState {
    appleStock: number;
    increaseAppleStock: () => void;
    bananaStock: number;
    increaseBananaStock: () => void;
}

interface FruitBoxContextProps {
    fruitName: FruitName
    usage: Usage
}

type FruitName = "APPLE" | "BANANA"
type Usage = "DESTRUCTURED" | "ONE_BY_ONE"

interface FruitBoxProps {
    children: ReactNode;
    usage: Usage;
}

interface FruitBoxType {
    (props: FruitBoxProps): JSX.Element;
    Apple: () => JSX.Element;
    Banana: () => JSX.Element;
}

export type { FruitState, FruitBoxProps, FruitName, Usage, FruitBoxContextProps, FruitBoxType }