import axios from 'axios';
import $ from 'jquery';
import fs from 'fs';

axios.get('https://talaikis.com/api/quotes/random/')
    .then(response => {
        $('#quote').html(`${response.data.quote} (${response.data.author})`);
    });

const root = document.querySelector(':root');
$('.boxes span').each(function (i) {
    $(this).click(function (e) {
        root.style.setProperty('--theme-color', e.target.style.background);
    });
});

const copyright = fs.readFileSync(__dirname + '/src/assets/txt/copyright.txt', 'utf8');
$('#copyright').html(copyright);
