function storePrj(array) {
  localStorage.setItem("globalArray", JSON.stringify(array));
}
function populateFromStorage(array) {
    return array = JSON.parse(localStorage.getItem("globalArray"));
}
export { storePrj, populateFromStorage };
