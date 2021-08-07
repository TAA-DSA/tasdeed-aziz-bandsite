//Script Test//
console.log("Hello to bandSite");

//initiating Eventlistner;

const comForm = document.querySelector('#comment__field');

comForm.addEventListener('submit',function(event){
    event.preventDefault();

    const user_name = event.target.name.value;
    console.log(user_name);

    const comment_entry = event.target.sentiments.value;
    console.log(comment_entry);

    
})