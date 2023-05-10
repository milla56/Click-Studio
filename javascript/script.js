// SEARCH BUTTON
const searchButton = document.getElementById('searchbutton');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});

