const AUTH='Client-ID {{Client-ID}}'
const BASE_URL = 'https://api.imgur.com';

export const getGalleryData = async () =>{    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", AUTH);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch(`${BASE_URL}/3/gallery/top/viral/day/1?showViral=true&mature=true&album_previews=true`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log(error));
    
}

export const filterAndFormatData = (data) =>{
    const filteredRecord = {...data};//TODO : filter logic to filterout images only 
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