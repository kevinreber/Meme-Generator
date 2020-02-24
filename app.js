let memes;

// When window loads, start new MemeGenerator
window.addEventListener("load", () => {
    memes = new MemeGenerator();
});

class MemeGenerator {
    constructor() {

        // DOM
        this.submitBtn = document.getElementById('submit-meme');
        this.memeList = document.getElementById('memes');

        this.addEvents()
    }

    // Event delegates
    addEvents() {
        this.submitBtn.addEventListener('click', (e) => this.checkURL(e));
        this.memeList.addEventListener('click', (e) => this.deleteMeme(e));
    }

    // Checks if users input URL is a valid url and image
    checkURL(e) {
        const url = document.getElementById('url').value; // User's url input
        e.preventDefault();

        if (url.match(/\.(jpeg|jpg|gif|png)$/) === null || url === '' || url.length === 0) { // If url is invalid, alert appears
            alert("Invalid Image!");
        } else {    // If url is valid, create gif
                this.createGif(url);
        }
    }

    // Creates gif using user input
    createGif(src) {
        const topTxt = document.getElementById('top-text');
        const bottomTxt = document.getElementById('bottom-text');

        const html = `
            <div class="meme">
                <div class="meme-overlay"><span class="delete-meme">x</span></div>
                <h1 class="meme-txt top-txt">${topTxt.value}</h1>
                <img class="meme-img" src="${src}" alt="meme" align="middle">
                <h1 class="meme-txt bottom-txt">${bottomTxt.value}</h1>
            </div>
            `
        this.memeList.innerHTML += html;
        document.getElementById('form').reset(); //Reset form
    }

    // Deletes meme user selects  
    deleteMeme(e) {
        if (e.target.classList.contains('delete-meme')) {
            const meme = e.target.parentElement.parentElement;
            this.memeList.removeChild(meme);
        }
    }
}

//1st submit - 1.5hr
//2nd submit - 1hr