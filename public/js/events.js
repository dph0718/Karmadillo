

// [ ]  GET first x events from db
// whatever is the apiroute for events store that as the apiEventRoute const.
//pop them in the events array as event objects - or change the object
//[ ] clean up data for injection here


//###############some stuff contingent on the server ###################
// const apiEventRoute;
// let events = [];
// function getEvents() {
//     $.ajax({ url: currentURL + apiEventRoute, method: "GET" })
//         .then(function (data) {
//             events = data;
//         });
// };

// #########end of server ajax get######################################

//event constructor... same as sql structure? idk. find out & change as necessary.
function Event(title, org, city, date, time, volNeeded, volSigned) {
    this.title = title;
    this.org = org;
    this.city = city;
    this.date = date;
    this.time = time;
    this.volNeeded = volNeeded;
    this.volSigned = volSigned;
}


//DUMMY ARRAY of events ========[delete after syncing with db]=================
events = [
    event01 = new Event('Picking up Spoons', 'Spoon Pickers', 'Arvada', '07/18/2019', "12:00pm", 8, 4),
    event02 = new Event('Saving Rabbits', 'Rabbit Savers', 'Aurora', '07/18/2019', "3:00pm", 9, 2)
]

// +loads up all the events from the array into a new div
// + appends event info all onto an .eventTile div.
// + handles the click event for each submit button

function popEvents() {
    events.forEach((e, i) => {
        $('<div>')
            .addClass('eventTile')
            .attr('id', `eventTile${i}`)
            .appendTo($('#eventsBox'));
        $("<div>")
            .addClass('eventTitle')
            .appendTo(`#eventTile${i}`)
            .text(`${e.title}`)
        $("<div>")
            .addClass('eventOrg')
            .appendTo(`#eventTile${i}`)
            .text(`${e.org}`)
        $("<div>")
            .addClass('eventDate')
            .appendTo(`#eventTile${i}`)
            .text(`${e.date}`)
        $("<div>")
            .addClass('eventTime')
            .appendTo(`#eventTile${i}`)
            .text(`${e.time}`)
        $("<div>")
            .addClass('volunteers')
            .appendTo(`#eventTile${i}`)
            .text(`${e.volSigned} of ${e.volNeeded} volunteers signed up.`)
        $("<div>")
            .addClass('registerButton')
            .attr('id', `registerBtn${i}`)
            // .html('<a href="#">Sign Up<a>')
            .text("Sign Up")
            .appendTo(`#eventTile${i}`)
    });

    //click handler
    for (let i = 0; i < events.length; i++) {
        $(`#registerBtn${i}`).on('click', () => {
            console.log(events[i].title);
        });
    };
}

//this will be called in .then after ajax.
popEvents();