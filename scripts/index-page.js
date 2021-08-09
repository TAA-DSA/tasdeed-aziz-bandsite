//Code works fine, something wrong with the CSS so comment should be of same length as the defined otherwise the display
// is not as  mock up.

const comForm = document.querySelector('#comment__btn');

const parentDiv = document.querySelector('.review__container');
console.log(parentDiv);
const getDate = new Date();
const date = (getDate.getMonth()+ 1) + "/" + getDate.getDate() + "/" + getDate.getFullYear()


const commentArray = ['Cornor Walton', 'Elilie Beach', 'Miles Acosta'];
const  commentArray2  = ['02/17/2021','01/09/2021', '12/20/2020' ];  
const commentArray3 = ["This is art. This is inexplicable magic expressed in the purest way,everything that makes up this majestic work deserves reverence. Let us appreciate this for what what it is and what it contains.",
"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
"I can't stop listening. Everytime I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my. What a beautiful expression of creativity. Can't get enough."];  

console.log(commentArray);

for (let i=0; i <commentArray.length; i++){

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
    
    hName.innerText = commentArray[i];
    pTime.innerText = commentArray2[i];
    pText.innerText = commentArray3[i];
    

}


//initiating Eventlistner//



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

   const getDate = new Date();
   const date = (getDate.getMonth()+ 1) + "/" + getDate.getDate() + "/" + getDate.getFullYear()
   pTime.innerText = date;

   document.getElementById("comment__field").reset();

  
})