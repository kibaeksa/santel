import ContentsData from './data/data';
import mainUI from './ui/mainUI';

const rootElem = document.getElementById('wrapper');

console.log(111);
const render = renderData => {
    rootElem.innerHTML = renderData.htmlString;
    renderData.callback();
};


render(mainUI.render(ContentsData));


const renderView = data => {

};

const renderContact = data => {

};

const loadRendering = () => {

};
