// IPO Input -> Process -> Output

// Constant Data

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v3/schedule/';

// State Data

let animeData, animeDetail, animeDay;

// Cached Element References

const $dailygroup = $('#dailygroup');
const $navDay = $('#days')

// Attached Event Listeners

$navDay.on('click', 'a', handleNavClick);
$dailygroup.on('click', 'article.card', handleClick);

// Functions

init();

function init() {
    getData();
}

function getData() {

    // fetch data using AJAX
    $.ajax(BASE_URL).then(function(data) {
        
        animeData = data;
        console.log(animeData);
        render();
      
    }, function(error) {
        console.log('Error: ', error);
    });
}

function handleNavClick() {
    if('#sun') {
        animeDay = 'sunday';
    }
    if('#mon') {
        animeDay = 'monday';
    }
    if('#tues') {
        animeDay = 'tuesday';
    }
    if('#wed') {
        animeDay = 'wednesday';
    }
    if('#thur') {
        animeDay = 'thursday';
    }
    if('#fri') {
        animeDay = 'friday';
    }
    if('#sat') {
        animeDay = 'saturday';
    }

    return animeDay;
}

function handleClick() {
    alert('card was clicked!');
}

function render(animeDay) {

    const htmlArray = animeData.monday.map(anime => {
        return`
        <article data-url="${anime.url}" class="card flex-ctr">
            <img src="${anime.image_url}"></img>
        </article>
        `;
    });

    $dailygroup.html(htmlArray);

}