import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbb4M26XfGAZfoWFNKsPzqqWOBnPsgA6A",
    authDomain: "handle-online.firebaseapp.com",
    projectId: "handle-online",
    storageBucket: "handle-online.appspot.com",
    messagingSenderId: "404168210899",
    appId: "1:404168210899:web:fb80a6d3a67912db1bd726"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.getElementById("edit").addEventListener("click", openModal);

function openModal() {
    document.getElementById("popup").style.display = "flex";
}

document.getElementById("no").addEventListener("click", closeModal);

function closeModal() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("text").value = "";
}

document.getElementById("yes").addEventListener("click", getPenger);

function getPenger() {
    const penger = document.getElementById("text").value;
    document.getElementById("penger").innerHTML = penger;
    document.getElementById("popup").style.display = "none";
    document.getElementById("text").value = "";
}

document.getElementById("add").addEventListener("click", openModalAdd);

function openModalAdd() {
    document.getElementById("popup-add").style.display = "flex";
}
document.getElementById("noProduct").addEventListener("click", closeModalAdd);

function closeModalAdd() {
    document.getElementById("popup-add").style.display = "none";
    document.getElementById("textProduct").value = "";
}

document.getElementById("yesProduct").addEventListener("click", addList)

function addList() {
    const itemDiv = document.createElement("div");
    itemDiv.className = "itemDiv";
    const itemText = document.createElement("p");
    itemText.textContent = document.getElementById("textProduct").value;
    itemText.className = "itemText";
    itemDiv.appendChild(itemText);
    document.getElementById("listContainer").appendChild(itemDiv);
    document.getElementById("popup-add").style.display = "none";
    document.getElementById("textProduct").value = "";
}

const container = document.querySelector('#listContainer');
container.addEventListener('click', (event) => {
    if (event.target.className == 'itemDiv') {
        event.target.addEventListener("click", openModalMoney);

        function openModalMoney() {
            document.getElementById("popup-money").style.display = "flex";
        }
        document.getElementById("noPrice").addEventListener("click", closeModalMonney);

        function closeModalMonney() {
            document.getElementById("popup-money").style.display = "none";
            document.getElementById("textPrice").value = "";
        }
        document.getElementById("yesPrice").addEventListener("click", getPris);

        function getPris() {
            const currentPenger = document.getElementById("penger").innerHTML;
            const pris = document.getElementById("textPrice").value;

            document.getElementById("penger").innerHTML = currentPenger - pris;
            document.getElementById("textPrice").value = "";
            document.getElementById("popup-money").style.display = "none";
            event.target.style.backgroundColor = '#ff5e6c';
            event.target.style.textDecoration = 'line-through';

            event.target.addEventListener("click", restoreMoney);

            function restoreMoney() {
                const currentPenger = document.getElementById("penger").innerHTML;
                console.log(pris + "res")
                console.log(currentPenger + "current")
                document.getElementById("penger").innerHTML = Number(pris) + Number(currentPenger);
                console.log(Number(pris) + Number(currentPenger))
                event.target.style.backgroundColor = '#ccc';
                event.target.style.textDecoration = 'none';
                document.getElementById("popup-money").style.display = "none";
                event.target.removeEventListener("click", restoreMoney);
            }

        }
    }

});

// delete
const trash = document.getElementById("trash");
trash.addEventListener("click", deleteMode)

function deleteMode() {
    const container = document.querySelector('#listContainer');
    trash.style.backgroundColor = "#ccc"
    container.addEventListener('click', (event) => {
        if (event.target.className == 'itemDiv') {
            event.target.remove();
        } else {
            return;
        }

    });
}
container.addEventListener('click', (event) => {
    if (deleteMode = "called") {
        event.target.removeEventListener;
        trash.style.backgroundColor = "#ff5e6c";
    }
});