document.addEventListener('DOMContentLoaded', () => {
    const characterData = JSON.parse(localStorage.getItem('selectedCharacter'));

    if (!characterData) {
        document.getElementById('reportsSection').innerHTML = `<p>Nenhum relatório disponível.</p>`;
        return;
    }

    document.getElementById('reportsSection').innerHTML = `
        <div class="character-report">
            <img src="${characterData.image}" alt="${characterData.name}">
            <div class="character-info">
                <h2>${characterData.name}</h2>
                <p><strong>Status:</strong> ${characterData.status}</p>
                <p><strong>Espécie:</strong> ${characterData.species}</p>
                <p><strong>Gênero:</strong> ${characterData.gender}</p>
                <p><strong>Origem:</strong> ${characterData.origin.name}</p>
                <p><strong>Última localização:</strong> ${characterData.location.name}</p>
                <p><strong>Episódios:</strong> ${characterData.episode.length}</p>
            </div>
        </div>
    `;
});
