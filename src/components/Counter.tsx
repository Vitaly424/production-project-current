import React, {useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <button className={classes.color} onClick={() => setCount(count + 1)}>Плюс</button>
            <p className={'color'}>{count}</p>
        </div>
    );
};
