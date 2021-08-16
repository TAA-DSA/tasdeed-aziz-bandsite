//Script Test
console.log("Api Exercise");

//Api key
const apiURL =  "https://project-1-api.herokuapp.com/comments";
const apiKey = "108867b9-722a-4592-b22c-6a1000131f86";
const urlKey = `${apiURL}/?api_key=${apiKey}`;
console.log(urlKey);

//target the section
const parentDiv = document.querySelector('.review__container');
console.log(parentDiv);

//Axios function
axios.get(urlKey).then(response =>{
    const commentData = response.data
    //console.log(commentData);

        //Loop through the api data
    for (let i = 0; i < commentData.length; i++){


        const newDiv = document.createElement('div');
        newDiv.classList.add('review__cornor');
        parentDiv.appendChild(newDiv);

        const childDiv = document.createElement('div');
        newDiv.appendChild(childDiv);

        const imgDiv = document.createElement('img');
        imgDiv.classList.add("image_placeholder");
        childDiv.appendChild(imgDiv);

        const anotherDiv = document.createElement('div');
        anotherDiv.classList.add("reviews");
        newDiv.appendChild(anotherDiv);

        const dateDiv = document.createElement('div');
        newDiv.appendChild(dateDiv);

        const hName = document.createElement("h2"); 
        hName.classList.add('h_title');
        anotherDiv.appendChild(hName);

        const pText = document.createElement("p");
        pText.classList.add("user__comments");
        anotherDiv.appendChild(pText);

        const pTime = document.createElement("p");
        pTime.classList.add("date");
        dateDiv.appendChild(pTime);

        const userName = commentData[i].name;
        //console.log(userName);

        const sentimentsValue = commentData[i].comment;
        //console.log(sentimentsValue);

        const postTimeStamp = commentData[i].timestamp
        //console.log(postTimeStamp);
        console.log(typeof(postTimeStamp))
        const getPostDate = new Date(postTimeStamp);
        // console.log(getPostDate);
       const postDateFormat = (getPostDate.getMonth()+1) + "/" + getPostDate.getDate() + "/" + getPostDate.getFullYear()
       // console.log(postDateFormat)
        
       hName.innerText = userName;
       pTime.innerText = postDateFormat;
       pText.innerText = sentimentsValue;
        

    }
})

        


//****Event Listner*****/

const comForm = document.querySelector('#comment__btn');

comForm.addEventListener('click',function(event){
    event.preventDefault();
         
   const newDiv = document.createElement('div');
   newDiv.classList.add('review__cornor');
   parentDiv.appendChild(newDiv);

   const childDiv = document.createElement('div');
   newDiv.appendChild(childDiv);

   const imgDiv = document.createElement('img');
   imgDiv.classList.add("image_placeholder");
   childDiv.appendChild(imgDiv);

   const anotherDiv = document.createElement('div');
   anotherDiv.classList.add("reviews");
   newDiv.appendChild(anotherDiv);

   const dateDiv = document.createElement('div');
   newDiv.appendChild(dateDiv);

   const hName = document.createElement("h2"); 
   hName.classList.add('h_title');
   anotherDiv.appendChild(hName);
   
   const pText = document.createElement("p");
   pText.classList.add("user__comments");
   anotherDiv.appendChild(pText);

   const pTime = document.createElement("p");
   pTime.classList.add("date");
   dateDiv.appendChild(pTime);

   const user_name = document.getElementById('name').value;
   const comment_entry = document.getElementById('sentiments').value; 
   

   hName.innerHTML = user_name;
   pText.innerHTML = comment_entry;

//    console.log(hName.innerHTML);

//    console.log(pText.innerHTML);

   const getDate = new Date();
   const date = (getDate.getMonth()+ 1) + "/" + getDate.getDate() + "/" + getDate.getFullYear()
   pTime.innerText = date;


   axios.post(urlKey,{
        name: hName.innerHTML,
        comment: pText.innerHTML
    }).then(function (response){
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })


   document.getElementById("comment__field").reset();
  
})


    // deleteURL = `${apiURL}/32dab178-2af3-484b-96d1-506bfc64517e/?api_key=${apiKey}?api_key=${apiKey}`
    // console.log(deleteURL);


    // axios.delete(`${apiURL}/32dab178-2af3-484b-96d1-506bfc64517e/?api_key=${apiKey}?api_key=${apiKey}`).then(response=>{
    //     console.log(response)
    //     console.log(response.data)
    // })

    // axios.post(urlKey,{
    //     name: 'Fred',
    //     comment: 'what a cool site'
    // }).then(function (response){
    //     console.log(response);
    // })
    // .catch(error => {
    //     console.log(error);
    // })

//Api data must be stored in API
//New comment must be displayed with existing comments
//the newest comment being on top


    
    





