export async function sendDesignData(image, data) {
    const formData = new FormData();

    const url = "http://localhost:9000";    //

    formData.append('json', JSON.stringify(data));
    formData.append('image', image);

    const response = await fetch(url, {
        method: 'POST',
        body: formData
    });

    return response
}