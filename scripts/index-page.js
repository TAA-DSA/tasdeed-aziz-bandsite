//Script Test//
console.log("Hello to bandSite");

//initiating Eventlistner//

const comForm = document.querySelector('#comment__btn');

// const review__header = document.getElementById('review__header');
// const pText = document.getElementById('preview__text');




comForm.addEventListener('click',function(event){
    event.preventDefault();
    // const user_name = document.getElementById('name').value;
    // const comment_entry = document.getElementById('sentiments').value; 
    // review__header.innerHTML = user_name;
    // pText.innerHTML = comment_entry;
    

    
    


    // document.getElementById('#review__header').innerText = user_name;

   
    // console.log(comment_entry);
   

    // const reviewHeader = document.createElement('h2');
    // reviewHeader.innerText = user_name

    // const reviewText  = document.createElement('p');
    // // console.log(reviewText);

    const divContainer = document.getElementById('review__input');


    const newDiv = document.createElement('div');
    newDiv.classList.add('review');
    divContainer.appendChild(newDiv);

    

    

    

    
    
    

    

    
})