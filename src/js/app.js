import ContentsData from './data/data';
import Router from './utils/router';
import mainUI from './ui/index';
import worksListUI from './ui/worksList';
import workViewUI from './ui/workView'
import aboutUI from './ui/about'

let currentState = undefined;
let renderTimer;
const rootElem = document.getElementById('contents');

const getFilteredHash = (str = window.hash) => {

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
            case 'worksview' :
                result = workViewUI;
                break;
            case 'index' :
                result = mainUI;
                break;
            case 'about' :
                result = aboutUI;
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
        case 'index' :
            targetElem = document.getElementById('gnb-button-home');
            break;
        case 'workslist' :
        case 'worksview' :
            targetElem = document.getElementById('gnb-button-works');
            break;
        case 'about' :
            console.log(11);
            targetElem = document.getElementById('gnb-button-about');
            break;
        case 'culture' :
            targetElem = document.getElementById('gnb-button-culture');
            break;
    }

    console.log(targetElem);

    if(targetElem){
        [...document.querySelectorAll('#gnb-menu .main-menu li')].map(liElem => {
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
            currentState = 'works';
            if(!hashData.params || !hashData.params.length || hashData.params[0] == ''){
                currentState += 'list'
                renderData = worksListUI.render(ContentsData , hashData);
            }else{
                currentState += 'view'
                renderData = workViewUI.render(ContentsData , hashData);
            }
            break;
        case 'about' :
            currentState = 'about';
            renderData = aboutUI.render(ContentsData);
            break;
        case 'culture' :
            currentState = 'culture';
            break;
        case 'index' :
            currentState = 'index';
            renderData = mainUI.render(ContentsData);
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

const handleGlobalNav = () => {

};

(() => {
    let lastScrollOffset = 0;
    let isOpenGnb = false;
    document.querySelector('#header .gnb-menu-button').addEventListener('click',event => {
        if(isOpenGnb){
            document.getElementsByTagName('html')[0].classList.remove('nav-open','inactive-scroll');
            document.getElementById('gnb-menu').classList.remove('open');
            event.currentTarget.classList.remove('open');

        }else{
            document.getElementsByTagName('html')[0].classList.add('nav-open','inactive-scroll');
            document.getElementById('gnb-menu').classList.add('open');
            event.currentTarget.classList.add('open');
            window.scrollTo(0,0);
        }

        isOpenGnb = !isOpenGnb;
    });

    [...document.querySelectorAll('#gnb-menu .main-menu li a')].map( (elem , index) => {
        elem.addEventListener('click', event => {
            const target = event.currentTarget;
            if(target.parentNode.className.match(/\s?active\s?/)){
                return;
            }

            setGnbButton(target.dataset.ctgr);

            isOpenGnb = false;
            document.getElementsByTagName('html')[0].classList.remove('nav-open','inactive-scroll');
            document.getElementById('gnb-menu').classList.remove('open');
            document.querySelector('#header .gnb-menu-button').classList.remove('open');

            renderTimer = setTimeout(() => {
                destroy();
                setTimeout(() => {
                    currentState = target.dataset.ctgr;
                    window.location.hash = target.dataset.href;
                },200);
            },550);
        });
    });

    document.querySelector('#header h1 a').addEventListener('click', event => {
        if(currentState == 'index'){
            return;
        }

        window.location.hash = event.currentTarget.dataset.href;


    });
})();
