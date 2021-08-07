//Script Test//
console.log("Hello to bandSite");

const subForm = document.querySelector('#comment__field');

subForm.addEventListener('submit',function(event){
    event.preventDefault();

    const user_name = event.target.name.value;
    console.log(user_name);

    const comment_entry = event.target.sentiments.value;
    console.log(comment_entry);

    
})