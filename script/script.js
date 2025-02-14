async function searchCharacter() {
    const characterName = document.getElementById('searchInput').value.trim();
    if (!characterName) return;

    const url = `https://rickandmortyapi.com/api/character/?name=${characterName}`;
    const response = await fetch(url);
    const data = await response.json();

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; 

    if (data.results) {
        data.results.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');
            characterCard.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <h3>${character.name}</h3>
                <p>Status: ${character.status}</p>
                <p>Espécie: ${character.species}</p>
                <p>Planeta: ${character.origin.name}</p>
            `;
            resultsDiv.appendChild(characterCard);
        });
    } else {
        resultsDiv.innerHTML = `<p>Nenhum personagem encontrado.</p>`;
    }
}
