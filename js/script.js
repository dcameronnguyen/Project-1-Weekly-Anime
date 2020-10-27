// IPO Input -> Process -> Output

// Constant Data

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v3/schedule/';

// State Data

let animeData, animeDay;

// Cached Element References

const $dailygroup = $('#dailygroup');
const $navDay = $('#days')

// Attached Event Listeners

$navDay.on('click', 'p', handleNavClick);
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
      
    }, function(error) {
        console.log('Error: ', error);
    });
}

function handleNavClick(evt) {
    
    animeDay = evt.target.id;
    
    render();

}

function handleClick() {
    alert('card was clicked');
}

function render() {

    const htmlArray = animeData[animeDay].map(anime => {
        return`
        <article data-url="${anime.url}" class="card flex-ctr">
            <img src="${anime.image_url}"></img>
        </article>
        `;
    });

    $dailygroup.html(htmlArray);

}