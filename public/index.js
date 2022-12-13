let currentItem;

// DELETE MODE
let deleteMode = false;
document.getElementById("trash").addEventListener("click", () => {
  if (deleteMode) {
    deleteMode = false;
    document.getElementById("trash").style.backgroundColor = "#ff5e6c";
  } else if (!deleteMode) {
    deleteMode = true;
    document.getElementById("trash").style.backgroundColor = "#ececec";
  }
});

function openModal() {
  document.getElementById("popup").style.display = "flex";
}
function closeModal() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("text").value = "";
}
function getPenger() {
  const penger = document.getElementById("text").value;
  document.getElementById("penger").innerHTML = penger;
  document.getElementById("popup").style.display = "none";
  document.getElementById("text").value = "";
}
function openModalAdd() {
  document.getElementById("popup-add").style.display = "flex";
}
function closeModalAdd() {
  document.getElementById("popup-add").style.display = "none";
  document.getElementById("textProduct").value = "";
}
function setCheck() {
  document.querySelector(".itemDiv").classList.add("checked");
}

function addList() {
  const itemDiv = document.createElement("div");
  const itemText = document.createElement("p");
  const newContent = document.createElement("p");
  itemDiv.className = "itemDiv";
  itemText.textContent = document.getElementById("textProduct").value;
  itemText.className = "itemText";
  newContent.textContent = "";
  newContent.id = "prisItem";
  itemDiv.appendChild(itemText);
  itemDiv.appendChild(newContent);
  document.getElementById("listContainer").appendChild(itemDiv);
  document.getElementById("popup-add").style.display = "none";
  document.getElementById("textProduct").value = "";
}

function openModalMoney() {
  document.getElementById("popup-money").style.display = "flex";
}
function closeModalMoney() {
  document.getElementById("popup-money").style.display = "none";
  document.getElementById("textPrice").value = "";
}

// Button listeners
document.getElementById("edit").addEventListener("click", openModal);
document.getElementById("no").addEventListener("click", closeModal);
document.getElementById("yes").addEventListener("click", getPenger);
document.getElementById("add").addEventListener("click", openModalAdd);
document.getElementById("noProduct").addEventListener("click", closeModalAdd);
document.getElementById("yesProduct").addEventListener("click", addList);
document.getElementById("yesPrice").addEventListener("click", setPris);
document.getElementById("noPrice").addEventListener("click", closeModalMoney);

function setPris(e) {
  let currentPenger = document.getElementById("penger").textContent;
  let pris = document.getElementById("textPrice").value;
  currentItem.querySelector("#prisItem").textContent = pris;
  document.getElementById("penger").textContent = currentPenger - pris;
  document.getElementById("textPrice").value = "";
  document.getElementById("popup-money").style.display = "none";
  currentItem.classList.add("checked");
}
function restoreMoney(e) {
  let pris = currentItem.querySelector("#prisItem").textContent;
  let totalMoney = document.getElementById("penger").textContent;
  document.getElementById("penger").textContent =
    Number(totalMoney) + Number(pris);
  currentItem.querySelector("#prisItem").innerHTML = null;
  currentItem.classList.remove("checked");
  closeModalMoney();
}
// ITEM CLICK EVENT
const listContainer = document.getElementById("listContainer");
listContainer.addEventListener("click", (event) => {
  if (Object.values(event.target.classList).includes("itemDiv")) {
    currentItem = event.target;
    console.log(currentItem);
    if (deleteMode) {
      currentItem.remove();
      currentItem = null;
    } else if (!deleteMode) {
      console.log(Object.values(currentItem.classList).includes("checked"));
      if (Object.values(currentItem.classList).includes("checked")) {
        restoreMoney();
      } else {
        openModalMoney();
      }
    }
  }
});
