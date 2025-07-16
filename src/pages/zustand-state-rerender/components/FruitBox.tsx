import FruitItem from "./_FruitItem";
import FruitBoxBase from "./_FruitBoxBase";
import type { FruitBoxType } from "../interfaces";

const FruitBox = FruitBoxBase as FruitBoxType

FruitBox.Apple = () => <FruitItem fruitName="APPLE" />
FruitBox.Banana = () => <FruitItem fruitName="BANANA" />

export default FruitBox