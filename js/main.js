import { GameAPI } from './api.js';
import { Display } from './ui.js';

const gameAPI = new GameAPI();
const displayAll = new Display();

async function loadGames(category = 'mmorpg') {
    const games = await gameAPI.getGames(category);
    displayAll.displayGames(games);
}

async function loadGameDetails(gameId) {
    const game = await gameAPI.getGameDetails(gameId);
    displayAll.displayInfo(game);
}

window.displayGameDetails = (gameId) => loadGameDetails(gameId);

loadGames();

const categoryLinks = document.querySelectorAll('.category a');
categoryLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.category .active').classList.remove('active');
        link.classList.add('active');
        const category = link.getAttribute('data-category');
        loadGames(category);
    });
});
