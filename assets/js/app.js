// Init Github
const github = new Github;

// Make HTTP call
Github.getUsers()
    .then(data => {
        console.log(data);
    });