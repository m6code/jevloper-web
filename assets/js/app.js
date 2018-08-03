// Init Github
const github = new Github;

// Init UI
const ui = new UI();

// Make HTTP call
Github.getUsers()
    .then(data => {
        ui.showProfiles(data);
    })
    .catch(err => console.log(err));