const crimesDB = {
    "Terra": {
        crime: "Contrabando de Mega-Seeds",
        suspect: "Rick Sanchez C-137",
        level: "Alto"
    },
    "Gazorpazorp": {
        crime: "Tráfico de Gazorpianos",
        suspect: "Summer Smith",
        level: "Médio"
    },
    "Bird World": {
        crime: "Assassinato do Conselheiro Pássaro",
        suspect: "Tammy Guetermann",
        level: "Crítico"
    }
};

function showCrimeReport(planet) {
    const report = crimesDB[planet];

    if (report) {
        document.getElementById("crimeDetails").innerHTML = `
            <strong>Planeta:</strong> ${planet}<br>
            <strong>Crime:</strong> ${report.crime}<br>
            <strong>Suspeito:</strong> ${report.suspect}<br>
            <strong>Nível de Periculosidade:</strong> ${report.level}
        `;
    } else {
        document.getElementById("crimeDetails").innerText = "Nenhum crime registrado neste planeta.";
    }
}

