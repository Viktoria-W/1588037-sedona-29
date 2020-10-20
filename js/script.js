const searchButton = document.querySelector(".search-button");
const closeButton = document.querySelector(".booking-window");
const modalWindow = document.querySelector(".booking-window");
const checkInDate = modalWindow.querySelector(".check-in-date");
const searchForm = modalWindow.querySelector(".form-window");
const checkOutDate = modalWindow.querySelector(".check-out-date");
const adults = modalWindow.querySelector(".number-adults");
const children = modalWindow.querySelector(".number-children");
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
		modalWindow.classList.add("modal-animation");
	} else {
		evt.preventDefault();
		modalWindow.classList.add("modal-show");
		modalWindow.classList.remove("modal-animation");
	}
	if (storage) {
		adults.value = storage;
		children.value = storage;
	}
});

searchForm.addEventListener("submit", function (evt) {
	if (!checkInDate.value || !checkOutDate.value || !adults.value) {
		evt.preventDefault();
	} else {
		if (isStorageSupport) {
			evt.preventDefault();
			localStorage.setItem("adults", adults.value, "children", children.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (modalWindow.classList.contains("modal-show")) {
			evt.preventDefault();
			modalWindow.classList.remove("modal-show");
		}
	}
});
