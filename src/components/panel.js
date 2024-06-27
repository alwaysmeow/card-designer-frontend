import React from "react";

function Panel() {
    return (
        <div className="bg-grey p-5">
            <div>Цвет</div>
            <select>
                <option>Розовый</option>
                <option>Белый</option>
                <option>Черный</option>
            </select>
        </div>
    )
}

export default Panel;