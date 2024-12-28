export class GameAPI {
    constructor() {
        this.loading = document.querySelector(".loading");
        this.errorDisplay = document.querySelector(".errorDisplay");
        this.apiOptions = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a1fbcf04c8msh5ad49cd5a3032b5p1fe953jsn514a5addb00e',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    }

    async getGames(category = 'shooter') {
        try {
            this.loading.classList.remove('d-none');
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, this.apiOptions);
            const games = await response.json();
            this.loading.classList.add('d-none');
            this.errorDisplay.classList.add('d-none');
            return games;
        } catch (error) {
            console.error('Error fetching games:', error);
            this.loading.classList.add('d-none');
            this.errorDisplay.classList.remove('d-none');
            return [];
        }
    }

    async getGameDetails(gameId) {
        try {
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, this.apiOptions);
            const game = await response.json();
            return game;
        } catch (error) {
            console.error('Error fetching game details:', error);
            alert('Unable to load game details.');
        }
    }
}
