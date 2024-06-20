import React from "react";

function DemoCard () {
    return (
        <div className="flex-col aspect-card justify-between w-80 mx-auto p-5 border-2 border-black rounded-xl">
            <div className="h-1/2">

            </div>
            <div className="text-sm font-mono font-medium h-1/2">
                <div className="text-center text-lg tracking-widest mb-4">1234 5678 9012 3456</div>
                <div className="text-center">07/25</div>
                <div className="ml-2 mb-2">JOHN DOE</div>
            </div>
        </div>
    )
}

export default DemoCard;