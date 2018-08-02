class Github{
    constructor(){
        this.client_id = "5c05a46ebe578fc25efa";
        this.client_secret = "efb473d16177093eda5d67122687cfbd4f1eec11";
    }

    static async getUsers(){
        const proResponse = await fetch("https://api.github.com/search/users?q=language:java+location:lagos");

        const profiles =await proResponse.json();

        return{
            profiles
        }
    }
}