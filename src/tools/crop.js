function crop(src, data) {
    return new Promise((resolve, reject) => {
        if (src && data)
        {
            const image = new Image();
            image.src = src;
        
            image.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
            
                canvas.width = data.width;
                canvas.height = data.height;
            
                ctx.drawImage(
                    image,
                    data.y, data.x, data.width, data.height,
                    0, 0, data.width, data.height
                );
            
                resolve(canvas.toDataURL('image/png'));
            }
    
            image.onerror = (error) => {
                reject(error);
            };
        }
        else
            reject();
    })
}

export default crop