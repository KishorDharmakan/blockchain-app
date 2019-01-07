export default function adapter(responseData) {
    return responseData.map(data => {
        const { height, hash, time } = data; // Get only required columns
        return { height, hash, time };
    })
}