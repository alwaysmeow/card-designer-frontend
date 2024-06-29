import React, { useState, useRef } from 'react';
import ReactCrop from 'react-image-crop';
import { useDispatch } from 'react-redux';

import 'react-image-crop/dist/ReactCrop.css';
import { setImage, setCropData } from '../store/cropSlice';

function Сropper() {
    const [src, setSrc] = useState(null);
    const [crop, setCrop] = useState();
    const [srcAspect, setSrcAspect] = useState()
    const [filename, setFilename] = useState('')
    
    const dispatch = useDispatch();

    const onCropComplete = (crop, percentCrop) => {
        const image = new Image();
        image.src = src;
        image.onload = () => {
            const cropData = {
                x: srcAspect.width * percentCrop.x / 100,
                y: srcAspect.height * percentCrop.y / 100,
                width: srcAspect.width * percentCrop.width / 100,
                height: srcAspect.height * percentCrop.height / 100
            }
            dispatch(setCropData(cropData));
        }
    };

    const onCropChange = (crop) => {
        setCrop(crop);
    };

    const onSelectFile = (e) => {
        setCrop(null);
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                setSrc(reader.result);
                setFilename(e.target.files[0].name)
                dispatch(setImage(reader.result));
                dispatch(setCropData(null))
                const img = new Image();
                img.onload = () => {
                    setSrcAspect({
                        width: img.width,
                        height: img.height
                    });
                };
                img.src = reader.result;
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-5 max-w-min">
            <div className="flex items-center justify-center overflow-hidden w-96 h-96 bg-grey border-2 border-pink rounded-xl">
                {src && (
                    <div className='flex max-h-full'
                        style={{ aspectRatio: `${srcAspect}` }}
                    >
                        <ReactCrop
                            crop={crop}
                            aspect={85.6/54}
                            onComplete={onCropComplete}
                            onChange={onCropChange}
                        >
                            <img src = {src}/>
                        </ReactCrop>
                    </div>
                )}
            </div>
            <div className='flex gap-2 w-96 max-h-8'>
                <label htmlFor="file-upload" className="min-w-max text-white bg-pink p-1 pr-4 pl-4 rounded-full hover:cursor-pointer hover:bg-opacity-80">
                    Выбрать файл
                </label>
                <label className='p-1 truncate'>
                    {filename}
                </label>
            </div>
            <input id="file-upload" className="hidden" type="file" accept="image/*" onChange={onSelectFile} />
        </div>
    );
}

export default Сropper;