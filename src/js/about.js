import '../css/main.css'; 
import './mode';
import {createCountryInfo} from './updataUI';
import request from './request';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const country = urlParams.get('country');
const countryApi = `https://restcountries.com/v3.1/${country}`;

request(countryApi).then((data) => {
    createCountryInfo(data[0]);
}).catch((err) => {
   alert(err.message);
});  