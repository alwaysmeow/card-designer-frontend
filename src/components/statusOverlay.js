import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStatus } from "../store/statusSlice";
import { Puff } from 'react-loader-spinner';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function StatusOverlay() {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.status.status);

    const onClick = () => {
        if (status !== "waiting")
            dispatch(setStatus("designing"));
    }

    if (status === "designing")
        return <></>
    else
        return (
            <div className="flex flex-col justify-center items-center absolute top-0 h-full w-full bg-white bg-opacity-90" onClick={onClick}>
                <div className="flex justify-center items-center h-16 w-16 m-4">
                    {
                        status === "waiting" ?
                            <Puff color='#5F656A' height='100%' width='100%'/>
                        : status === "success" ?
                            <FaCheckCircle color="#6AE039" className="h-full w-full"/>
                        :
                            <FaTimesCircle color="#f45b6d" className="h-full w-full"/>
                    }
                </div>
                <div className="text-dark">
                    { 
                        status === "waiting" ?
                            "Валидация"
                        : status === "success" ?
                            "Дизайн карты принят"
                        :
                            "Дизайн отклонен, попробуйте заново"
                    }
                </div>
            </div>
        )
}

export default StatusOverlay;