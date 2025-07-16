import { Box, Button, Typography } from "@mui/material";
import type { FruitName } from "../interfaces";
import { useDesctructedFruit, useOneByOneFruit } from "../store";
import { useFruitBoxContext } from "./_FruitBoxBase";
import { useEffect } from "react";

const FruitItem = ({ fruitName }: { fruitName: FruitName }) => {
    const usage = useFruitBoxContext()

    const isDestructured = usage === "DESTRUCTURED"
    const isApple = fruitName === 'APPLE';


    const emoji = isApple ? '🍎' : '🍌';
    const koreanName = isApple ? '사과' : '바나나';

    const store = isDestructured ? useDesctructedFruit : useOneByOneFruit

    let stock: number;
    let increase: () => void;

    if (isDestructured) {
        if (isApple) {
            const { appleStock, increaseAppleStock } = store()
            stock = appleStock
            increase = increaseAppleStock
        } else {
            const { bananaStock, increaseBananaStock } = store()
            stock = bananaStock
            increase = increaseBananaStock
        }
    } else {
        if (isApple) {
            const appleStock = useOneByOneFruit((state) => state.appleStock)
            const increaseAppleStock = useOneByOneFruit((state) => state.increaseAppleStock)
            stock = appleStock
            increase = increaseAppleStock
        } else {
            const bananaStock = useOneByOneFruit((state) => state.bananaStock)
            const increaseBananaStock = useOneByOneFruit((state) => state.increaseBananaStock)
            stock = bananaStock
            increase = increaseBananaStock
        }
    }

    useEffect(
        () => {
            return () => console.log(`---- ${usage} ${fruitName.toLowerCase()} re-rendered`)
        }
    )

    return (
        <Box className="flex justify-between items-center gap-6">
            <Typography>{koreanName}: {stock}</Typography>
            <Button onClick={increase}>{emoji} +1</Button>
        </Box>
    )
};

export default FruitItem