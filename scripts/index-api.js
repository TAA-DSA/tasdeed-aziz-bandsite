//Script Test
console.log("Api Exercise");

//Api key
const apiURL =  "https://project-1-api.herokuapp.com/comments";
const apiKey = "108867b9-722a-4592-b22c-6a1000131f86";
const urlKey = `${apiURL}/?api_key=${apiKey}`;
console.log(urlKey);


//Axios function
axios.get(urlKey).then(response =>{
    const commentData = response.data
    console.log(commentData);
    

    for (let i = 0; i <commentData.length; i++){

        const commentSection = document.querySelectorAll('review__cornor');
        console.log(commentSection);

        const userName = commentData[i].name;
        console.log(userName);

        // hName.innerText = userName;
        

        const sentimentsValue = commentData[i].comment;
        console.log(sentimentsValue);

        const postTimeStamp = commentData[i].timestamp
        //console.log(postTimeStamp);
        const getPostDate = new Date(postTimeStamp);
        //console.log(getPostDate);
        const postDateFormat = (getPostDate.getMonth()+1) + "/" + getPostDate.getDate() + "/" + getPostDate.getFullYear()
        console.log(postDateFormat)
        
        

    }
    


})


// console.log(commentSection);

// function displayComment(){
//     //  hName.innerText = commentArray[i];
//     //  pTime.innerText = commentArray2[i];
//     //  pText.innerText = commentArray3[i];
        

    
// }
