describe("Meme Generator Tests", function () {

    // DOM
    const memeList = document.getElementById('memes'); // Meme list
    const url = document.getElementById('url'); // User's url input
    const topTxt = document.getElementById('top-text'); // Top text input value
    const bottomTxt = document.getElementById('bottom-text'); // Bottom text input value

    // Source
    const src = 'https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg';

    beforeEach(function () {
        url.value = src;
        topTxt.value = 'This text should display on top!';
        bottomTxt.value = 'This text should display on bottom!';
    });

    it('should display an alert when url input is empty', function () {
        spyOn(window, 'alert');

        url.value = '';
        memes.checkURL();

        expect(window.alert).toHaveBeenCalledWith('Invalid Image!')
    });

    it('should have html in memeList', function () {
        memes.createGif(src);

        const html = `
            <div class="meme">
                <div class="meme-overlay"><span class="delete-meme">x</span></div>
                <h1 class="meme-txt top-txt">This text should display on top!</h1>
                <img class="meme-img" src="${src}" alt="meme" align="middle">
                <h1 class="meme-txt bottom-txt">This text should display on bottom!</h1>
            </div>
        `;

        expect(memeList.innerHTML).toEqual(html);
    });

    it('it should have one child element', function () {
        memes.createGif(src);

        expect(memeList.childElementCount).toEqual(1);
    });

    it('it should have two child elements', function () {
        memes.createGif(src);
        memes.createGif(src);

        expect(memeList.childElementCount).toEqual(2);
    });

    it('should not have text in top and bottom text', function () {
        topTxt.value = '';
        bottomTxt.value = '';

        memes.createGif(src);

        const topTxtInnerText = document.querySelector('.meme .top-txt').innerText;
        const bottomTxtInnerText = document.querySelector('.meme .bottom-txt').innerText;

        expect(topTxtInnerText).toEqual(topTxt.value);
        expect(bottomTxtInnerText).toEqual(topTxt.value);
    });

    afterEach(function () {
        url.value = '';
        topTxt.value = '';
        bottomTxt.value = '';
        memeList.innerHTML = '';
    });
});