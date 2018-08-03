class UI {
    constructor() {
        this.profiles = document.getElementById('profiles');
        //this.proImage = document.getElementById('proImage')
    }

    showProfiles(data) {
        console.log(data)
        this.profiles.innerHTML = `
            <img class="img-fluid" src="${data["profiles"]["items"][0]["avatar_url"]}" height="52" width="52">
            <span class="mdl-color-text--blue-grey-50 ml-2" style="position:absolute; bottom:0px;">${data["profiles"]["items"][0]["login"]}</span>
        `;
    }

}