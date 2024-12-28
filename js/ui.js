export class Display {
    displayGames(games) {
        let container = '';
        games.forEach(game => {
            container += `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card bg-transparent text-white" onclick="displayGameDetails('${game.id}')">
                        <img src="${game.thumbnail}" class="card-img-top" alt="${game.title}">
                        <div class="card-body d-flex justify-content-between">
                            <h5 class="card-title">${game.title}</h5>
                            <span class="badge text-bg-primary d-flex justify-content-center align-items-center">Free</span>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <span class="badge text-bg-secondary">${game.genre}</span>
                            <span class="badge text-bg-secondary">${game.platform}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        document.getElementById('gameList').innerHTML = container;
    }

    displayInfo(game) {
        const container = `
            <div class="container text-white rounded-4 p-4">
                <div class="d-flex justify-content-between">
                    <h2>${game.title}</h2>
                    <button type="button" class="btn-close text-white" id="closeBtn" aria-label="Close"></button>
                </div>
                <div class="row mt-4">
                    <div class="col-md-4">
                        <img src="${game.thumbnail}" alt="${game.title}" class="img-fluid">
                    </div>
                    <div class="col-md-8">
                        <h4>Category: ${game.genre}</h4>
                        <h4>Platform: ${game.platform}</h4>
                        <h4>Status: ${game.status}</h4>
                        <p>${game.description}</p>
                        <a href="${game.game_url}" target="_blank" class="btn btn-outline-success">Show Game</a>
                    </div>
                </div>
            </div>
        `;
        const gInfo = document.getElementById('gInfo');
        gInfo.innerHTML = container;
        gInfo.classList.remove('d-none');

        document.getElementById('closeBtn').addEventListener('click', () => {
            gInfo.classList.add('d-none');
        });
    }
}
