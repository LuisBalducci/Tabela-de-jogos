function createGame(player1, hour, player2){
    return `
        <li>
            <img src="assets/img/icon-${player1}.png" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="assets/img/icon-${player2}.png" alt="Bandeira do ${player2}">
        </li>
    `
}

function createCard(date, day, games){
    return `
        <div class="card">
            <h2>${date}<span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}
document.getElementById('app').innerHTML = `
<main id="cards">
    ${createCard('11/12', 'Quarta-Feira',
         createGame('atletico', '19:00', 'bota') + createGame('santos', '20:00', 'bahia'))}
         ${createCard('15/12', 'Domingo',
            createGame('corinthians', '16:00', 'palmeiras'))}
            ${createCard('18/12', 'Terça-Feira',
                createGame('cruzeiro', '17:00', 'gremio'))}
                ${createCard('19/12', 'Quarta-Feira',
                    createGame('inter', '16:00', 'santos'))}
                    ${createCard('20/12', 'Quinta-Feira',
                        createGame('santos', '18:00', 'sp'))}
</main> 
`;