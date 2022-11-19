import { mockResponse } from "./mockResponse";

const AUTH='Client-ID 04342db36851ecc'
//const BASE_URL = 'https://api.imgur.com/3/gallery/top/viral/day/1';

export const getGalleryData = async () =>{    
    var myHeaders = new Headers();

    console.log("==>",AUTH)
    myHeaders.append("Authorization", AUTH);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    const res = await fetch("https://api.imgur.com/3/gallery/top/viral/day/1?showViral=true&mature=true&album_previews=true", requestOptions)
    debugger;
    console.log(res); 
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log(error));
    
}

const formattedData = (data) =>{
    debugger;
    return {
        ...data
    };
}

export const getFormattedGalleryData = async(searchParams) =>{
    const formattedWeatherData = await getGalleryData(searchParams)
                                        .then(formattedData)
                                        .catch((e)=>{
                                            debugger
                                            console.log("Error :  Failed to load the data")
                                        })
    return formattedWeatherData;
}