import { Paper, Typography } from '@mui/material';
import { createContext, useContext } from 'react';
import type { FruitBoxProps } from '../interfaces';
import FruitCodeBlock from './_FruitCodeBlock';

const FruitBoxContext = createContext<string | null>(null)

const useFruitBoxContext = () => {
    const context = useContext(FruitBoxContext)
    if (!context) {
        throw new Error('Fruit components must be used within FruitBox')
    }
    return context
}

const FruitBoxBase = ({ usage, children }: FruitBoxProps) => {
    const title = usage === "DESTRUCTURED" ? "❌ 구조 분해 할당" : "✅ 하나 씩 할당"

    return (
        <FruitBoxContext.Provider value={usage}>
            <Paper sx={{ borderRadius: "12px" }} className='w-[800px] p-6 flex flex-col gap-3'>
                <Typography variant='h6' className='text-center'>{title}</Typography>
                {children}
                <FruitCodeBlock />
            </Paper>
        </FruitBoxContext.Provider>
    )
}

export { useFruitBoxContext };
export default FruitBoxBase