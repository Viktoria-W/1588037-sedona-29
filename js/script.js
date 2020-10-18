const searchButton = document.querySelector(".search-button");
const closeButton = document.querySelector(".booking-window");
const modalWindow = document.querySelector(".booking-window");
const checkInDate = modalWindow.querySelector(".check-in-date");
const searchForm = modalWindow.querySelector(".form-window");
const checkOutDate = modalWindow.querySelector(".check-out-date");
const adults = modalWindow.querySelector(".number-adults");
const children =  modalWindow.querySelector(".number-children");
const findButton = modalWindow.querySelector(".find");

let isStorageSupport = true;
const storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}
 

 
 
searchButton.addEventListener("click", function (evt) {
     if (modalWindow.classList.contains("modal-show")) {
        evt.preventDefault();
        modalWindow.classList.remove("modal-show");
     } else {
        evt.preventDefault();
        modalWindow.classList.add("modal-show"); 
        checkInDate.focus();
        }
    
       if (storage) {
        adults.value = storage;
        children.value = storage;
      }
});
    
   


searchForm.addEventListener("submit", function (evt) {
    if (!checkInDate.value || !checkOutDate.value || !adults.value || !children.value){
        evt.preventDefault();
    } else {
        if (isStorageSupport) {
            localStorage.setItem("adults", adults.value, "children", children.value );
        }
        
    }
});
   
window.addEventListener("keydown", function (evt){
    if (evt.keyCode === 27) {
        if (modalWindow.classList.contains("modal-show")) {
            evt.preventDefault();
            modalWindow.classList.remove("modal-show");
        }
    }
});

searchForm.addEventListener("click", function(evt) {
    evt.preventDefault();
}
);