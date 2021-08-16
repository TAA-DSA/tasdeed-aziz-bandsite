//Script//
console.log("Let the show begin!!")

const shows = ['Mon Sept 06 2021', 'Ronald lane', 'San Francisco, CA'];
// const showsOne = ['Tue Sept 21 2021', 'Pier 3 East', 'San Francisco, CA'];
// const showsTwo = ['Fri Oct  15 2021', 'View Lounge', 'San Francisco, CA'];
// const showsThree = ['Sat Nov  06 2021', 'Hyatt Agency', 'San Francisco, CA'];
// const showsFour = ['Fri Nov  26 2021', 'Moscow Center', 'San Francisco, CA'];
// const showsFive = ['Wed Dec  15 2021', 'Press Club', 'San Francisco, CA'];


const parentDiv = document.querySelector('.new__table')

const tableTag = document.createElement('table');
tableTag.setAttribute('id',"newtable__ticket");
parentDiv.appendChild(tableTag);

const column = document.createElement('tr');
column.classList.add('table__col');
tableTag.appendChild(column);

const columnOne = document.createElement('td');
columnOne.classList.add('table__col--one');
column.appendChild(columnOne);

columnOne.innerHTML = 'Dates';

const columnTwo = document.createElement('td');
columnTwo.classList.add('table__col--two');
column.appendChild(columnTwo);

columnTwo.innerHTML = "Venue"

const columnThree = document.createElement('td');
columnThree.classList.add('table__col--three');
column.appendChild(columnThree);

columnThree.innerHTML = "Location";


for (let i = 0; i <shows.length; i++){
    const tbl = document.getElementsByClassName('newtable__ticket');
    const firstRow = tbl.insertRow();
    const cell = row.insertCell();
    cell.innerHTML = 'text'
}






