export async function sendDesignData(image, data) {
    const formData = new FormData();

    const url = "http://127.0.0.1:8080/register-design";    //

    formData.append('json', JSON.stringify(data));
    formData.append('image', image);

    const response = await fetch(url, {
        method: 'POST',
        body: formData
    });

    return response
}