export async function sendDesignData(image, data) {
    const formData = new FormData();

    formData.append('json', JSON.stringify(data));
    formData.append('image', image);

    const response = await fetch(url, {
        method: 'POST',
        body: formData
    });

    return response
}