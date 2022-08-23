
const selectedPlayerArray = [];

function dispalySelectedPlayerName(playerList){
    // console.log(playerList);
    const choosedPlayerElement = document.getElementById("player-list");
    choosedPlayerElement.innerHTML = "";

    for(let i = 0; i < playerList.length; i++){
        // console.log(selectedPlayerArray[i].selectedPlayerName);

        const choosedPlayerName = selectedPlayerArray[i].selectedPlayerName;

        const ul = document.createElement("ul");
        ul.innerHTML = `
        <li class="pb-5">${i + 1}.<span class="pl-4">${choosedPlayerName}</span></li>
        `;
        choosedPlayerElement.appendChild(ul);
    }
};


function selectedPlayer(element){
    const playerName = element.parentNode.children[0].innerText;
    // console.log(playerName);

    const playerObj = {
        selectedPlayerName: playerName
    };

    selectedPlayerArray.push(playerObj);
    // console.log(selectedPlayerArray);
    // console.log(selectedPlayerArray.length);

    document.getElementById("total-selected-player").innerText = selectedPlayerArray.length;

    dispalySelectedPlayerName(selectedPlayerArray);
}