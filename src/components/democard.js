import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import crop from '../tools/crop';
import BankMiniLogo from '../img/bank-minilogo.svg'
import BankLetter from '../img/bank-letter.svg';
import BankName from '../img/bank-name.svg';
import MirLogo from '../img/mir-logo.svg'

function DemoCard () {
    const image = useSelector((state) => state.crop.image)
    const cropData = useSelector((state) => state.crop.cropData)
    const bankLogoSide = useSelector((state) => state.template.bankLogoSide)
    const bankLogoMinimal = useSelector((state) => state.template.bankLogoMinimal)
    const [src, setSrc] = useState(null)
    
    useEffect(() => {
        crop(image, cropData)
        .then((url) => { setSrc(url) })
        .catch(() => { console.log('err'); })
    })

    return (
        <div className="flex-col aspect-card justify-between w-96 mx-auto border-2 border-black rounded-xl overflow-hidden"
            style={src ? {
                backgroundImage: `url(${src})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
             } : {}}
        >
            <div className="h-1/2 relative">
                <div className={`flex h-1/2 max-w-min bg-none rounded-${bankLogoSide === 'right' ? 'bl' : 'br'}-xl absolute ${bankLogoSide === 'right' ? 'right' : 'left'}-0`}>
                    {
                        bankLogoMinimal ?
                            <BankMiniLogo className='fill-current text-pink'/>
                        :
                            <>
                                <BankLetter className='fill-current text-pink' height='100%'/>
                                <BankName className='fill-current text-white'    height='100%'/>
                            </>
                    }
                </div>
            </div>
            <div className="relative text-lg font-mono font-medium h-1/2 px-5">
                <div className="text-center text-2xl tracking-widest mb-4">1234 5678 9012 3456</div>
                <div className="text-center">07/25</div>
                <div className="ml-2 mb-2">JOHN DOE</div>
                <MirLogo className="h-1/3 absolute bottom-0 right-0 m-3"></MirLogo>
            </div>
        </div>
    )
}

export default DemoCard;