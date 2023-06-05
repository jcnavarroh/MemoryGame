import React from 'react';

const GetImages = async () => {

    let imagesArr = [];

    try {
        await fetch(`https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20`)
        .then(res => res.json())
        .then(response => {
            //uncomment console.log to check the response of API
            //console.log(response.entries); 
            for (const item of response.entries){
                imagesArr.push({
                    id: item.fields?.image?.uuid,
                    image: item.fields?.image?.url,
                    name: item.fields?.image?.title,
                })
            }
        })
    }
    catch (e) {console.error(`error getting API data: ${e}`)}

    //console.log(imagesArr);

    return imagesArr

}

export default GetImages