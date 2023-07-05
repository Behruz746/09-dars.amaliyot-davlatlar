import {createCountries} from './updataUI';
import request from './request';

const searchFormEl = document.querySelector('.search');

searchFormEl.search.addEventListener('input', (e)=> {
    e.preventDefault();
    const searchValue = searchFormEl.search.value.toLowerCase();
    const cardsItem = document.querySelectorAll('.cards__item');
    const cardsTitles = document.querySelectorAll('.cards__title');

    cardsTitles.forEach((title, index)=> {
        if(title.textContent.toLowerCase().includes(searchValue)) {
            cardsItem[index].classList.remove('hidden');
        } else {
            cardsItem[index].classList.add('hidden');
        }
    });
});

const searchSelect = document.querySelectorAll('.search__select-list li');
const SearchSelectSpan = document.querySelector('.search__select span');

searchSelect.forEach(li=> {
    li.addEventListener('click', ()=> {
        SearchSelectSpan.textContent = li.textContent;
        let filterApi;

        if(li.textContent == 'All') {
            filterApi = 'https://restcountries.com/v3.1/all';
        } else {
            filterApi = `https://restcountries.com/v3.1/region/${li.textContent}`;
        }
        
        request(filterApi).then((data) => {
            createCountries(data);
        }).catch((err) => {
           alert(err.message);
        });  
    });
});