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
    $.ajax(BASE_URL).then(function (data) {

        animeData = data;

    }, function (error) {
        console.log('Error: ', error);
    });
}

function handleNavClick(evt) {

    animeDay = evt.target.id;

    render();

}

function handleClick() {

    let animeObj = animeData[animeDay][this.dataset.index];
    const $modalContent = $(`
        <p><strong>Title:</strong> ${animeObj.title}</p>
        <br>
        <p><strong>Synopsis:</strong> ${animeObj.synopsis}</p>
        <br>
        <p><strong>JPN 1st Aired Date:</strong> ${animeObj.airing_start}</p>
    `);
    const $modal = $('#animodal');
    $modal.html($modalContent)
    $modal.modal();


}

function render() {

    const htmlArray = animeData[animeDay].map((animeObj, index) => {
        return `
        <article data-title="${animeObj.title}" data-synop="${animeObj.synopsis}" data-index="${index}" class="card flex-ctr">
            <img src="${animeObj.image_url}"></img>
        </article>
        `;

    });

    $dailygroup.html(htmlArray);

}