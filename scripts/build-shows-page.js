//Script Test//
console.log("Let the show begin!!")

const shows = ['Mon Sept 06 2021', 'Ronald lane', 'San Francisco, CA'];
// const showsOne = ['Tue Sept 21 2021', 'Pier 3 East', 'San Francisco, CA'];
// const showsTwo = ['Fri Oct  15 2021', 'View Lounge', 'San Francisco, CA'];
// const showsThree = ['Sat Nov  06 2021', 'Hyatt Agency', 'San Francisco, CA'];
// const showsFour = ['Fri Nov  26 2021', 'Moscow Center', 'San Francisco, CA'];
// const showsFive = ['Wed Dec  15 2021', 'Press Club', 'San Francisco, CA'];

//  const shows = [
//      { date: 'Mon Sept 06 2021', venue:'Ronald Lane',  location: "San Franciso, CA"},
//      { date: 'Tue Sept 21 2021', venue:'Pier 3 East',  location: 'San Francisco, CA'},
//      { date: 'Fri Oct  15 2021', venue:'View Lounge',  location: 'San Francisco, CA'},
//      { date:'Sat Nov  06 2021',  venue:'Hyatt Agency', location: 'San Francisco, CA'},
//      { date:'Fri Nov  26 2021',  venue:'Moscow Center',location: 'San Francisco, CA'},
//      { date:'Wed Dec  15 2021',  venue:'Press Club',   location:'San Francisco, CA'}
//  ]


const parentDiv = document.querySelector('.ticketTable__js');

const title = document.createElement('h1');
title.classList.add("ticket__header");
parentDiv.appendChild(title);

title.innerHTML = "Shows";

for(let i = 0; i <6; i++){

    const divMain = document.createElement('div');
    divMain.classList.add("ticket__box");
    parentDiv.appendChild(divMain);

    for( let i= 0; i<3; i++){

        let header = ['Dates','Venue', 'Location'];

        const divOne = document.createElement('div');
        divMain.appendChild(divOne);
        
        const divDate = document.createElement('h2');
        divDate.classList.add('ticket__table--dates');
        divOne.appendChild(divDate);

        divDate.innerHTML = header[i];

        const divSchedule = document.createElement('p')
        divSchedule.classList.add('tables__table--schedule');
        divOne.appendChild(divSchedule);

    

        

        
    }

        const ticketBtn = document.createElement('button');
        ticketBtn.setAttribute('id','buy__ticket--btn');
        divMain.appendChild(ticketBtn);
        
        ticketBtn.innerHTML = 'Buy Ticket';

       


    
    

    // const divTwo = document.createElement('div');
    // divMain.appendChild(divTwo);

    // const divThree = document.createElement('div');
    // divMain.appendChild(divThree);

    // const divFour = document.createElement('div');
    // divMain.appendChild(divFour);


    // const divDate = document.createElement('h2');
    // divDate.classList.add('ticket__table--dates');
    // divOne.appendChild(divDate);

    // const divDateOne = document.createElement('h2');
    // divDateOne.classList.add('ticket__table--dates');
    // divTwo.appendChild(divDateOne);

    
    // const divSchedule = document.createElement('p')
    // divSchedule.classList.add('tables__table--schedule');
    // divOne.appendChild(divSchedule);



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






