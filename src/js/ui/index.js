const callback = () => {

    const mainTextBox = document.getElementById('main-text');
    const mainTextHeight = mainTextBox.clientHeight;

    mainTextBox.style.marginTop = -mainTextHeight / 2 +'px'

    window.addEventListener('resize' , event => {
        document.getElementById('main-video').style.width = `${window.innerWidth}px`;
        document.getElementById('main-video').style.height = `${window.innerHeight}px`;
        mainTextBox.style.marginTop = -mainTextHeight / 2 +'px'
    });

    setTimeout(() => {
        document.getElementsByTagName('html')[0].classList.add('main-page');
        document.querySelector('.main').classList.add('loaded');
        initVideo('/images/temp/intro.mp4');
    },100);

};

const initVideo = videoSrc => {
    const elemVideo = document.createElement('video');
    const elemSource = document.createElement('source');
    const targetElem = document.querySelector('#main-video>div');

    elemVideo.autoplay = true;
    elemVideo.loop = true;
    elemVideo.muted = true;

    elemSource.src = videoSrc;
    elemSource.type = 'video/mp4';
    elemVideo.appendChild(elemSource);

    elemVideo.onloadstart = function(){
        targetElem.appendChild(elemVideo);
        setTimeout(function(){
            elemVideo.className += 'loaded';
            setTimeout(function(){
                elemVideo.play();
            },100);
        },500);

    }

    elemVideo.onended = event => {
        event.currentTarget.parentNode.parentNode.removeChild(this.parentNode);
    }
};

export default {
    render(contentsData){
        const parentWidth = document.getElementById('contents').clientWidth;

        let htmlString = `
            <div class="main">
                <div id="main-video" style="width:${window.innerWidth}px;height:${window.innerHeight}px;">
                    <div>
                        <video autoplay="" muted="" style="position:absolute;top:50%;">
                            <source src="https://monopo.co.jp/wp-content/themes/monopo/video/index.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
                <div id="main-text" class="gnb-menu-wrapper">
                    <h6>A CREATIVE DIGITAL AGENCY.</h6>
                    <span></span>
                    <h2 class="pc-ver">WE MAKE SUCCESSFUL DIGITAL<br />STORIES FOR WEB &amp; MOBILE</h2>
                    <h2 class="tab-ver">WE MAKE<br />SUCCESSFUL DIGITAL<br />STORIES FOR<br /> WEB &amp; MOBILE</h2>
                    <h2 class="mob-ver">WE MAKE<br /> SUCCESSFUL<br /> DIGITAL<br />STORIES FOR<br /> WEB &amp;<br /> MOBILE</h2>
                    <a href="/#/works" data-href="/works" data-ctgr="workslist" id="button-works">
                        <p>OUR WORKS</p>
                        <div></div>
                    </a>
                </div>
            </div>
        `;

        return {
            htmlString,
            callback
        };
    },
    destroy() {
        document.getElementsByTagName('html')[0].classList.remove('main-page');
        document.querySelector('.main').classList.add('destroy');
    }
};
