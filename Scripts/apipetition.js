const usersURL =  'https://reqres.in/api/users?page=2'

const getData = async() =>{
    try{

       const  response = await fetch(usersURL,{
            method:'GET',
            headers:[
                ["Access-Control-Allow-Origin","*"]
            ]
        });
    const  responseData = await response.json()
    return responseData.data     
    }

    catch(err){
        return err
    }
    
             
}

export {getData}