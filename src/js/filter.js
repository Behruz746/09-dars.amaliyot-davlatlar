const searchFormEl = document.querySelector('.search');
let TF = true;

searchFormEl.search.addEventListener('input', (e)=> {
    e.preventDefault();
    const searchValue = searchFormEl.search.value.toLowerCase();
    const cardsItem = document.querySelectorAll('.cards__item');
    const cardsTitles = document.querySelectorAll('.cards__title');

    cardsTitles.forEach((title, index)=> {
        if(title.textContent.toLowerCase().includes(searchFormEl.search.value)) {
            cardsItem[index].classList.remove('hidden');
        } else {
            cardsItem[index].classList.add('hidden');
        }
    });
});