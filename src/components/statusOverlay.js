import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStatus } from "../store/statusSlice";

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
            <div className="flex justify-center align-center absolute top-0 h-full w-full bg-white bg-opacity-80" onClick={onClick}>
                <div className="flex justify-center items-center">
                    Status
                </div>
            </div>
        )
}

export default StatusOverlay;