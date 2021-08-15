//Script
console.log('Hello Api - Show Dates !!');

//Api key
const apiURL =  "https://project-1-api.herokuapp.com/showdates";
const apiKey = "108867b9-722a-4592-b22c-6a1000131f86";
const urlKey = `${apiURL}/?api_key=${apiKey}`;
console.log(urlKey);

//Target the section section to create divs

const parentDiv = document.querySelector('.new__table');
console.log(parentDiv); 

//Accessing the Api

axios.get(urlKey).then (response =>{
    const showsData = response.data;
    // console.log(showsData);

    for (let i =0; i < showsData.length; i++){

         const showsDate = showsData[i].date;
         //console.log(showsDate);
        //  const getShowsDate = new Date(1630900800000);
        //  console.log(getShowsDate);
        // const showsDateFormat = getShowsDate.getMonth() + "/" + getShowsDate.getDate() + "/" + getShowsDate.getFullYear();
        // console.log(showsDateFormat);

        const showsVenue = showsData[i].place;
        //console.log(showsVenue);

        const showsLocation = showsData[i].location;
        //console.log(showsLocation);

        const divOne = document.createElement('div');
        divOne.classList.add('table__data');
        parentDiv.appendChild(divOne);

        const subDiv = document.createElement('div');
        divOne.appendChild(subDiv);

        const unorderedLst = document.createElement('ul');
        subDiv.appendChild(unorderedLst);

        const listDates = document.createElement('li');
        unorderedLst.appendChild(listDates);

        listDates.innerHTML = showsDate;
         
        const subDivTwo = document.createElement('div');
        divOne.appendChild(subDivTwo);

        const venueUnorderedList = document.createElement('ul')
        subDivTwo.appendChild(venueUnorderedList);

        const venueList = document.createElement('li');
        venueUnorderedList.appendChild(venueList);

        venueList.innerHTML = showsVenue;

        const subDivThree = document.createElement('div');
        divOne.appendChild(subDivThree);

        const locationUnorderedList = document.createElement('ul')
        subDivThree.appendChild(locationUnorderedList);

        const locationList = document.createElement('li');
        locationList.classList.add('location');
        locationUnorderedList.appendChild(locationList);

        locationList.innerHTML = showsLocation;

        const subDivFour = document.createElement('div');
        divOne.appendChild(subDivFour);

        const buyBtn = document.createElement('button');
        buyBtn.setAttribute('id', 'btn');
        subDivFour.appendChild(buyBtn);

        buyBtn.innerHTML = 'BUY TICKETS'












        















    }



})