import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStatus } from "../store/statusSlice";
import { Puff } from 'react-loader-spinner';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function StatusOverlay() {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.status.status);

    const onClick = () => {
        dispatch(setStatus("designing"));
    }

    if (status === "designing")
        return <></>
    else
        return (
            <div className="flex flex-col justify-center items-center absolute top-0 h-full w-full bg-white bg-opacity-90" onClick={onClick}>
                <div className="flex justify-center items-center h-16 w-16 m-8">
                    {
                        status === "waiting" ?
                            <Puff color='#323e48' secondaryColor="#7f868d" height='100%' width='100%'/>
                        : status === "success" ?
                            <FaCheckCircle color="#7fe456" className="h-full w-full"/>
                        :
                            <FaTimesCircle color="#f45b6d" className="h-full w-full"/>
                    }
                </div>
                <div className="text-dark">
                    { 
                        status === "waiting" ?
                            "Ожидание"
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