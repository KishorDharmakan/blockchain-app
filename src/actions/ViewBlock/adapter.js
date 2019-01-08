import moment from 'moment';
export default function adapter(responseData) {
    return responseData.map(data => {
        const { height, hash, size } = data; // Get only required columns
         const time = moment(new Date(data.time)).fromNow() 
        return { height, hash, time, size };
    })
}