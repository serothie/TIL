const UNSPLASH_API_KEY = "IFmvpT_tFlEb7U_S24GfLlkzWw-2YhmeqaAXH7WvM5o";
const body = document.querySelector("body")
console.log(body);

function getImage() {
    fetch(`https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&query=landscape&orientation=landscape`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        const bgImage = json.urls.full;
        const img = new Image();
        img.src = bgImage;
        img.classList.add('bgImage');
        body.prepend(img);
    });
}

function init() {
    getImage()
};

init();