//Script Test//
console.log("Hello to bandSite");

//initiating Eventlistner//

const comForm = document.querySelector('#comment__btn');


comForm.addEventListener('click',function(event){
    event.preventDefault();

    const user_name = document.getElementById('name').value;
    console.log(user_name);

    const comment_entry = document.getElementById('sentiments').value;
    console.log(comment_entry);

    const reviewHeader = document.createElement('h2');
    

    const divContainer = document.getElementById('review__input');


    const newDiv = document.createElement('div');
    newDiv.classList.add('review');
    console.log(user_name);
    divContainer.appendChild(newDiv);


    
})