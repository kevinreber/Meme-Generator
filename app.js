document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit-meme')
    const memeList = document.getElementById('memes');

    //Creates gif using user input
    function createGif(src) {
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
        memeList.innerHTML += html;
        document.getElementById('form').reset(); //Reset form
    }

    //Checks if users input URL is a valid url and image
    function checkURL(e) {
        const url = document.getElementById('url').value;   //User's url input
        e.preventDefault();

        if (url.match(/\.(jpeg|jpg|gif|png)$/) === null || url === '' || url.length === 0) {    //If url is invalid, alert appears
            alert("Invalid Image!");
        } else {
            createGif(url);
        }
    }

    //Deletes meme user selects  
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