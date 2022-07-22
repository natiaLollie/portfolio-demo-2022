// MAIN MENU CLOCK

function autoDateTimeUpdate() {

    let dateTime = new Date();

    // current date

    let day = dateTime.toLocaleString('en-us', { weekday: 'long' });
    let month = dateTime.toLocaleString('en-us', { month: 'long' });
    let daynum = dateTime.getDate();
    let year = dateTime.getFullYear();

    // current time

    let hours = dateTime.getHours();
    let minutes = String(dateTime.getMinutes()).padStart(2, '0');
    let seconds = String(dateTime.getSeconds()).padStart(2, '0');

    let period = document.getElementById('period');

    if (hours >= 12) {
        period.innerHTML = 'PM';
    } else {
        period.innerHTML = 'AM';
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    // console.log(period);

    document.getElementById('hours').innerHTML = hours + ':';
    document.getElementById('minutes').innerHTML = minutes + ':';
    document.getElementById('seconds').innerHTML = seconds;

    document.getElementById('day').innerHTML = day;
    document.getElementById('month').innerHTML = month;
    document.getElementById('daynum').innerHTML = daynum + ',';
    document.getElementById('year').innerHTML = year;


}

setInterval(autoDateTimeUpdate, 1);


// CHANGE WEBSITE THEME

let changeTheme = document.getElementById('theme-icon');

changeTheme.onclick = function () {

    let icon = document.getElementById("icon");
    let theme = document.getElementById("theme");

    document.head.classList.toggle('theme-style');

    if (document.head.classList.contains('theme-style')) {
        icon.src = '_imgs/dark_mode.svg';
        theme.href = "css/dark.css";
    } else {
        icon.src = '_imgs/light_mode.svg';
        theme.href = "css/default.css";
    }
}


// GREETING TOOLBOX 


document.querySelectorAll('.tool').forEach(item => {
    item.addEventListener('click', event => {
        // log the selected element
        let selectedTool = item.alt
        console.log(selectedTool);

        document.getElementById('selected-tool').innerHTML = selectedTool.replace('tool', '');
        // set element state to selected 
        // when selected apply css class to invert color 

    })
})

// SKILLS 

/*
let originalUrl = document.getElementById('full-url').innerHTML;
let project = document.getElementById('project-dropdown');

document.querySelectorAll('.skills-folder').forEach(item => {
    item.addEventListener('click', events => {
        // log the selected item
        let selectedFolder = item.alt
        console.log(selectedFolder);
        // scroll to  projects section
        document.getElementById('projects').scrollIntoView();
        // pass through function, url show "all-projects"
        filterProjects(selectedFolder, project.selectedIndex = "all");
        // filter projects by skill 
    })
})
*/



// CONTACT FORM


// SETTINGS MENU







