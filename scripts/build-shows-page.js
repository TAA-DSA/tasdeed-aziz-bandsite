//Script Test//
console.log("Let the show begin!!")

//get the section id
const parentDiv = document.getElementById('ticketTable__js');

//concert Array

 const concertList = [
     {  
       date: 'Mon Sept 06 2021', 
       venue:'Ronald Lane',  
       location: "San Franciso, CA"
    },
    { 
      date: 'Tue Sept 21 2021',
      venue:'Pier 3 East',  
      location: 'San Francisco, CA'
    },
    {   date: 'Fri Oct  15 2021',
        venue:'View Lounge',  
        location: 'San Francisco, CA'
    },
    { date:'Sat Nov  06 2021', 
        venue:'Hyatt Agency', 
        location: 'San Francisco, CA'
    },
    {   date:'Fri Nov  26 2021', 
        venue:'Moscow Center',
        location: 'San Francisco, CA'
    },
    {   date:'Wed Dec  15 2021', 
        venue:'Press Club',   
        location:'San Francisco, CA'
    }
 ];

 console.log(concertList);


const title = document.createElement('h1');
title.classList.add("ticket__header");
parentDiv.appendChild(title);

title.innerHTML = "Shows";

//Create a unordered list item
const conlst = document.createElement('ul');

console.log(conlst);
conlst.classList.add('lst');
parentDiv.appendChild(conlst);


 for(let i = 0; i <concertList.length; i++){

    
    const divMain = document.createElement('div');
    divMain.classList.add("ticket__box");
    parentDiv.appendChild(divMain);
    
    const listDates = document.createElement('li');
    listDates.classList.add("ticket__table--schedule");
    divMain.appendChild(listDates);

    const listVenue = document.createElement('li');
    listVenue.classList.add("ticket__table--schedule");
    divMain.appendChild(listVenue);

    const listLocation = document.createElement('li');
    listLocation.classList.add("ticket__table--schedule");
    divMain.appendChild(listLocation);

        
    listDates.innerHTML = concertList[i].date;
    listVenue.innerHTML = concertList[i].venue;
    listLocation.innerHTML = concertList[i].location;


    const ticketBtn = document.createElement('button');
    ticketBtn.setAttribute('id','buy__ticket--btn');
    divMain.appendChild(ticketBtn);
        
    ticketBtn.innerHTML = 'Buy Ticket';





       

        
//     const divOne = document.createElement('div');
//     divMain.appendChild(divOne);
    
      
//     // let headers = ["DATES", "VENUE","LOCATION"];

//     const divDate = document.createElement('h2');
//     divDate.classList.add('ticket__table--dates');
//     divOne.appendChild(divDate);
    
//     divDate.innerHTML = "DATES";
    
//     const divSchedule = document.createElement('p')
//     divSchedule.classList.add('tables__table--schedule');
//     divOne.appendChild(divSchedule);

//     divSchedule.innerHTML = concertList[i].date;

    





       
 }




// const column = document.createElement('tr');
// column.classList.add('table__col');
// tableTag.appendChild(column);

// const columnOne = document.createElement('td');
// columnOne.classList.add('table__col--one');
// column.appendChild(columnOne);



// const columnTwo = document.createElement('td');
// columnTwo.classList.add('table__col--two');
// column.appendChild(columnTwo);



// const columnThree = document.createElement('td');
// columnThree.classList.add('table__col--three');
// column.appendChild(columnThree);



// for (let i = 0; i <shows.length; i++){
//     const tbl = document.getElementsByClassName('newtable__ticket');
//     const firstRow = tbl.insertRow();
//     // const cell = row.insertCell();
//     // cell.innerHTML = 'text'
// }






