
const selectedPlayerArray = [];

function dispalySelectedPlayerName(playerList){

    const choosedPlayerElement = document.getElementById("player-list");
    choosedPlayerElement.innerHTML = "";

    for(let i = 0; i < playerList.length; i++){
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

    const playerObj = {
        selectedPlayerName: playerName
    };

    if(selectedPlayerArray.length < 5) {
        selectedPlayerArray.push(playerObj);
    }
    else {
        alert("select only five");
        return;
    }

    document.getElementById("total-selected-player").innerText = selectedPlayerArray.length;

    dispalySelectedPlayerName(selectedPlayerArray);

    element.disabled = true;
}


