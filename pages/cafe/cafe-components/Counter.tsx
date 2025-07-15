import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import { Box, IconButton, Typography } from '@mui/material';
import type { CounterProps } from '../interfaces';

const Counter = ({ label, count, minCount = 1, maxCount = 20, setCount }: CounterProps) => {
    const increase = () => {
        if (count >= maxCount) { return }
        setCount(count + 1)
    }
    const decrease = () => {
        if (count <= minCount) { return }
        setCount(count - 1)
    }

    return (
        <Box className="flex gap-1 items-center">
            <Typography className={`${label ? "grow" : ""}`}>{label}</Typography>

            <IconButton aria-label="decrease" onClick={decrease}>
                <RemoveCircleRoundedIcon />
            </IconButton>

            <Typography>{count}</Typography>

            <IconButton aria-label="increase" onClick={increase}>
                <AddCircleRoundedIcon />
            </IconButton>
        </Box>
    )
}

export default Counter