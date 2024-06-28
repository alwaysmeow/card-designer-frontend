import React from "react";
import { useDispatch } from 'react-redux';
import { switchBankLogoSide } from '../store/templateSlice'

function Panel() {
    const dispatch = useDispatch();

    const onChange = () => {
        dispatch(switchBankLogoSide());
    }

    return (
        <div className="flex justify-center bg-grey p-5">
            <div>Положение логотипа</div>
            <select onChange={onChange}>
                <option>Слева</option>
                <option>Справа</option>
            </select>
        </div>
    )
}

export default Panel;