//Script Test//
console.log("Hello to bandSite");

//initiating Eventlistner//

const comForm = document.querySelector('#comment__btn');
const parentDiv = document.querySelector('.review__container');
console.log(parentDiv);
const getDate = new Date();
const date = (getDate.getMonth()+ 1) + "/" + getDate.getDate() + "/" + getDate.getFullYear()



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
   hName.innerText = user_name;
   pText.innerText = comment_entry;
   


    

//     const dTime = document.createElement("div");
//     dTime.classList.add("day__time");
//     test.appendChild(dTime);
//     console.log(dTime);
    
//     dTime.innerText = date;
    
   

    // const imgPlaceholder = document.createElement("div");
    // imgPlaceholder.classList.add("image_placeholder");
    // test.appendChild(imgPlaceholder);

    

    
    


    

    


    





    

 
    
    


    // document.getElementById('#review__header').innerText = user_name;

   
    // console.log(comment_entry);
   

    // const reviewHeader = document.createElement('h2');
    // reviewHeader.innerText = user_name

    // const reviewText  = document.createElement('p');
   // // console.log(reviewText);

  
})