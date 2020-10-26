// IPO Input -> Process -> Output

// Constant Data

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v3/schedule/';

// State Data

let animeData, animeDetail;

// Cached Element References

const $dailygroup = $('#dailygroup');

// Attached Event Listeners

$dailygroup.on('click', 'article.card', handleClick);

// Functions

init();

function init() {
    getData();
}

function getData(detail_URL) {
    console.log('detail URL', detail_URL)

    let url;

    if(detail_URL === undefined) {
        url = BASE_URL;
    } else {
        url = detail_URL;
    }

    // fetch data using AJAX
    $.ajax(url).then(function(data) {
        if(detail_URL === undefined) {
            animeData = data;
        
        } else {
            animeDetail = data;

            render(true);
        }
    }, function(error) {
        console.log('Error: ', error);
    });
}

function handleClick() {
    getData(this.dataset.url);
}

// function render() {
//     if(showModal === true) {
//         const $modalContent = $(`
//             <h5></h5>
//             <p>Height:</p>
//             <p>Moves:</p>
//             <p>Abilities: </p>
//         `);
//         const $modal = $('#animodal');
//         $modal.html($modalContent)
//         $modal.modal();
//     } else {
//         const htmlArray = animeData.results.map(anime => {
//             return`
//             <article data-url="${anime.url}" class="card flex-ctr">
//                 <h3>${anime.title}</h3>
//             </article>
//             `;
//         });
//         $dailygroup.html(htmlArray);
//     }
// }