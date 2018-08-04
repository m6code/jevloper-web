class UI {
    constructor() {
        // this.profiles = document.getElementById('profiles');
        //this.proImage = document.getElementById('proImage')
    }

    showProfiles(data) {
        console.log(data);
        // this.profiles.innerHTML = `
        //     <img class="img-fluid" src="${data["profiles"]["items"][0]["avatar_url"]}" height="52" width="52">
        //     <span class="mdl-color-text--blue-grey-50 ml-2" style="position:absolute; bottom:0;">${data["profiles"]["items"][0]["login"]}</span>
        // `;

        console.log(data.profiles.items.length);
        for (let i=0; i<data.profiles.items.length;i++){
            // create div for the user profile
            let userProfileDiv = document.createElement('div');
            // TODO: create image tag to hold user image, append username span next to the image

            // span for the user name
            let username = document.createElement("span");
            // append user name from the json data query
            username.append(`${data["profiles"]["items"][i]["login"]}`);
            // append the username text from json data
            userProfileDiv.append(username);
            // append element to parent node
            document.getElementById('profiles').appendChild(userProfileDiv);
        }
    }

}