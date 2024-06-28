import React from "react";
import { useDispatch } from 'react-redux';
import { switchBankLogoSide, switchBankLogoMinimal } from '../store/templateSlice'

function Panel() {
    const dispatch = useDispatch();

    const onSideChange = () => {
        dispatch(switchBankLogoSide());
    }

    const onMinimizationClick = () => {
        dispatch(switchBankLogoMinimal());
    }

    return (
        <div className="flex justify-center gap-5 bg-grey p-5">
            <div className="gap-3">
                <div>Положение логотипа</div>
                <select onChange={onSideChange}>
                    <option>Слева</option>
                    <option>Справа</option>
                </select>
            </div>
            <div className="gap-3">
                <div>Минимизация</div>
                <input type="checkbox" onClick={onMinimizationClick}/>
            </div>
        </div>
    )
}

export default Panel;