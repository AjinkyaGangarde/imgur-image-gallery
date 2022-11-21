import axios from 'axios';

const AUTH='Client-ID {{Client ID}}'
const BASE_URL = 'https://api.imgur.com';

export const getGalleryData = ({Section= 'hot',Sort='viral',Window='day',Page=1}) =>{    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", AUTH);
    var formdata = new FormData();
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
    };

    //fetch(`${BASE_URL}/3/gallery/top/viral/day/1?showViral=true&mature=true&album_previews=true`, requestOptions)
    axios({
        url:`${BASE_URL}/3/gallery/${Section}/${Sort}/${Window}/${Page}?showViral=true&mature=true&album_previews=true`,
        ...requestOptions
    }).then(response =>{debugger; console.log(response); response.text()})
        .then(result => console.log(result))
        .catch(error => console.log(error));
}

export const filterAndFormatData = (data) =>{
    const filteredRecord = {...data}; 
    const {id,title, description,images} = filteredRecord;
    return {
        id,title, description,images
    };
}

export const getFormattedGalleryData = async(searchParams) =>{
    const formattedWeatherData = await getGalleryData(searchParams)
                                        .then(filterAndFormatData)
                                        .catch((e)=>{
                                            console.log("Error : ",e);
                                        })
    return formattedWeatherData;
}