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
  document.getElementById("penger").innerHTML = penger + " " + "kr";
  document.getElementById("popup").style.display = "none";
  document.getElementById("text").value = "";
}

document.getElementById("add").addEventListener("click", openModalAdd);

function openModalAdd() {
  document.getElementById("popup-add").style.display = "flex";
}
document.getElementById("no").addEventListener("click", closeModalAdd);
function closeModalAdd() {
  document.getElementById("popup-add").style.display = "none";
  document.getElementById("text").value = "";
}