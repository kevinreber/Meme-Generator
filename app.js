document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const url = document.getElementById('url');
    const topTxt = document.getElementById('top-text');
    const bottomTxt = document.getElementById('bottom-text');
    const submitBtn = document.getElementById('submit-meme')

    const memeList = document.getElementById('memes');

    function createGif(src) {
        const html = `
            <div class="meme">
                <div class="meme-overlay"><span class="delete-meme">x</span></div>
                <h1 class="meme-txt top-txt">${topTxt.value}</h1>
                <img class="meme-img" src="${src}" alt="meme" align="middle">
                <h1 class="meme-txt bottom-txt">${bottomTxt.value}</h1>
            </div>
            `
        memeList.innerHTML += html;
        form.reset();
    }

    function checkURL(e) {
        e.preventDefault();
        const gifLink = url.value;

        // if (gifLink.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        createGif(gifLink);
        // } else {
        // alert("Invalid Link!");
        // form.reset();
        // }
    }

    function deleteMeme(e) {
        if (e.target.classList.contains('delete-meme')) {
            const meme = e.target.parentElement.parentElement;
            memeList.removeChild(meme);
        }
    }

    submitBtn.addEventListener('click', checkURL);
    memeList.addEventListener('click', deleteMeme)
})

//Time total: 1.5hr