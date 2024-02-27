const BASE_URL = "http://localhost:5500/data/"

// application/json this is the content-Type which is specify the MIME type
export async function getData(endPoint){
    try{
        const res = await fetch(BASE_URL + endPoint + ".json", {
            method: "GET",
            headers: {
                "Content-Type" : "application/json", 
            },
    
        })
       const data = await res.json();
       return data;
    }catch(error){
        console.log(error);
    }
}
