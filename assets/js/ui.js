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
            //create image tag to hold user image, append username span next to the image
            let userImage = document.createElement('img');
            userImage.src = `${data["profiles"]["items"][i]["avatar_url"]}`;
            userImage.alt = `${data["profiles"]["items"][i]["login"]}`;
            userImage.style.width = '52px';
            userImage.style.height = '52px';

            // span for the user name text
            let username = document.createElement("span");

            // append user name from the json data query
            username.append(`${data["profiles"]["items"][i]["login"]}`);
            username.className = 'mdl-color-text--blue-grey-50 ml-2';

            // append the username text and image from json data
            userProfileDiv.append(userImage);
            userProfileDiv.append(username);
            userProfileDiv.className = "mt-4";

            // TODO: Create Link to launch github user profile
            // TODO: Arrange the ui
            // Todo: use rounded corner images
            // Todo: fix padding and margin

            // append element to parent node'
            document.getElementById('profiles').appendChild(userProfileDiv);
        }
    }

}