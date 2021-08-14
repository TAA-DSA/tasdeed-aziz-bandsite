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
    {   date: 'Fri Oct 15 2021',
        venue:'View Lounge',  
        location: 'San Francisco, CA'
    },
    {   date:'Sat Nov 06 2021', 
        venue:'Hyatt Agency', 
        location: 'San Francisco, CA'
    },
    {   date:'Fri Nov 26 2021', 
        venue:'Moscow Center',
        location: 'San Francisco, CA'
    },
    {   date:'Wed Dec 15 2021', 
        venue:'Press Club',   
        location:'San Francisco, CA'
    }
 ];

console.log(concertList);


const title = document.createElement('h1');
title.classList.add("ticket__header");
parentDiv.appendChild(title);
title.innerHTML = "Shows";

const headerName = ['Dates','Venue', 'Location']

for(let i = 0; i<headerName.length; i++){
    const header = document.createElement('span');
    header.classList.add('ticket__table--dates');
    parentDiv.appendChild(header);
    
    header.innerHTML = headerName[i];
    
}


for(let i = 0; i <concertList.length; i++){
    
    const divMain = document.createElement('div');
    divMain.classList.add("ticket__box");
    parentDiv.appendChild(divMain);

    const divTwo = document.createElement('div')
    divMain.appendChild(divTwo);

    const divThree = document.createElement('div')
    divMain.appendChild(divThree);

    const divFour = document.createElement('div')
    divMain.appendChild(divFour);
    
    const listDates = document.createElement('li');
    listDates.classList.add("ticket__table--schedule");
    divTwo.appendChild(listDates);

    const listVenue = document.createElement('li');
    listVenue.classList.add("ticket__table--address");
    divThree.appendChild(listVenue);

    const listLocation = document.createElement('li');
    listLocation.classList.add("ticket__table--address");
    divFour.appendChild(listLocation);

        
    listDates.innerHTML = concertList[i].date;
    listVenue.innerHTML = concertList[i].venue;
    listLocation.innerHTML = concertList[i].location;

    const divOne = document.createElement('div');
    divMain.appendChild(divOne);

    const ticketBtn = document.createElement('button');
    ticketBtn.setAttribute('id','buy__ticket--btn');
    divOne.appendChild(ticketBtn);
        
    ticketBtn.innerHTML = 'Buy Ticket';
}

   



    

    
    

    











