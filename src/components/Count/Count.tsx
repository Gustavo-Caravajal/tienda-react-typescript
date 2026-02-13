import { useState } from 'react'
import './Count.css'


type CountProps = {
    btnText: string;
    onConfirm: (quantity: number) => void;
}


export const Count = ({ btnText, onConfirm }: CountProps) => {
    const [count, setCount] = useState<number>(1);

    const increment = () => {
        setCount((prev) => prev + 1);
    }

    const decrement = () => {
        setCount((prev) => prev > 1 ? prev - 1 : 1);
    }

    const confirm = () => {
        if (count > 0) {
            onConfirm(count)
        }
    }

    return (
        <div className='count-container'>
            <div className='quantity-container'>
                <button
                    className='quantity-btn'
                    onClick={() => { decrement() }}
                    disabled={count === 1}
                >
                    -
                </button>
                <span className='quantity-value'>
                    {count}
                </span>                
                <button
                    className='quantity-btn'
                    onClick={() => { increment() }}
                >
                    +
                </button>
            </div>
            <div>
                <button className='confirm-btn' onClick={confirm}>
                    {btnText}
                </button>
            </div>
        </div>
    );

}