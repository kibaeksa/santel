const callback = () => {

    const mainTextBox = document.getElementById('main-text');
    const mainTextHeight = mainTextBox.clientHeight;

    console.log(mainTextHeight);

    mainTextBox.style.marginTop = -mainTextHeight / 2 +'px'

    window.addEventListener('resize' , event => {
        document.getElementById('main-video').style.width = `${window.innerWidth}px`;
        document.getElementById('main-video').style.height = `${window.innerHeight}px`;
        mainTextBox.style.marginTop = -mainTextHeight / 2 +'px'
    });

    setTimeout(() => {
        document.getElementsByTagName('html')[0].classList.add('main-page');
        document.querySelector('.main').classList.add('loaded');
        initVideo('/images/temp/bg2.mp4');
    },100);

};

// index 페이지에서 WORKS 페이지로 다이렉트 이동

    import worksListUI from '../ui/worksList';

    let currentState = undefined;
    let renderTimer;
    const rootElem = document.getElementById('contents');

    const getFilteredHash = (str = window.location.hash) => {
        const hashInfo = {};
        const arrayToHash = str.replace(/#\/?/,'').split('/');

        if(arrayToHash.length <= 1 && arrayToHash[0] == ''){
            hashInfo.name = 'index';
        }else{
            hashInfo.name = arrayToHash[0];
            arrayToHash.splice(0,1);
            hashInfo.params = arrayToHash.length == 0 ? null : arrayToHash;
        }

        return hashInfo;
    };

    const getObjectByCategory = name => {
        if(name != undefined){
            let result;
            switch(currentState){
                case 'workslist' :
                    result = worksListUI;
                    break;
                default:
                    break;
            }

            return result;
        }
    };

    const destroy = () =>{
        const obj = getObjectByCategory(currentState);
        if(obj && obj.destroy){
            obj.destroy();
        }
    };

    const setGnbButton = ctgrName => {
        console.log(ctgrName);
        let targetElem;
        switch(ctgrName){
            case 'workslist' :
                targetElem = document.getElementById('button-works');
                break;
        }

        console.log(targetElem);

        if(targetElem){
            [...document.querySelectorAll('#button-works')].map(liElem => {
                liElem.className = '';
            });
            targetElem.className = 'active';
        }
    };

    const render = () => {
        let renderData;
        const hashData = getFilteredHash(window.location.hash);
        // destroy();
        switch(hashData.name){
            case 'works' :
                currentState = 'workslist';
                renderData = worksListUI.render(ContentsData , hashData);
                break;
            default :
                renderData = {
                    htmlString : '<div class="error404">유효하지 않은 페이지입니다.</div>'
                }
        }

        setGnbButton(currentState);
        rootElem.innerHTML = renderData.htmlString;
        if(renderData.callback){
            renderData.callback();
        }
    };

    render();

    window.addEventListener('hashchange' , render);

    (() => {

        [...document.querySelectorAll('#button-works')].map( (elem , index) => {
            elem.addEventListener('click', event => {
                const target = event.currentTarget;
                if(target.parentNode.className.match(/\s?active\s?/)){
                    return;
                }

                renderTimer = setTimeout(() => {
                    destroy();
                    setTimeout(() => {
                        currentState = target.dataset.ctgr;
                        window.location.hash = target.dataset.href;
                    },200);
                },550);
            });
        });

    })();
// END, index 페이지에서 WORKS 페이지로 다이렉트 이동

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
                <div id="main-text" class="gnb-menu-wrapper">
                    <h6>A CREATIVE DIGITAL AGENCY.</h6>
                    <span></span>
                    <h2 class="pc-ver">WE MAKE SUCCESSFUL DIGITAL<br />STORIES FOR WEB &amp; MOBILE</h2>
                    <h2 class="tab-ver">WE MAKE<br />SUCCESSFUL DIGITAL<br />STORIES FOR<br /> WEB &amp; MOBILE</h2>
                    <h2 class="mob-ver">WE MAKE<br /> SUCCESSFUL<br /> DIGITAL<br />STORIES FOR<br /> WEB &amp;<br /> MOBILE</h2>
                    <a href="javascript:void(0)" data-href="/works" data-ctgr="workslist" id="button-works">OUR WORKS</a>
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
