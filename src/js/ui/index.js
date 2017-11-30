const callback = () => {
    setTimeout(() => {
        document.getElementsByTagName('html')[0].classList.add('main-page');
        document.querySelector('.main').classList.add('loaded');
        initVideo('/images/temp/bg2.mp4');
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
                            <source src="https://monopo.co.jp/wp-content/themes/monopo/video/bg2.mp4" type="video/mp4">
                        </video>
                    </div>
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
