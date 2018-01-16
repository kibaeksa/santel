import Utils from '../utils/common'

let categoryName = '';
const callback = () => {
    setTimeout(() => {
        document.querySelector('.work-detail').className += ' loaded';
    },300);
    window.scrollTo(0,0);

    const viewPage = loadHTML(`/viewAssets/${categoryName}.html`)
        .then(result => {
            if(result.match(/Cannot GET/)){
                document.querySelector('.work-detail .view-contents').insertAdjacentHTML('afterbegin',`<div class="error404">카테고리가 존재하지 않습니다.</div>`);
            }else{
                document.querySelector('.work-detail .view-contents').insertAdjacentHTML('afterbegin',result);
            }
        })
        .catch(error => {
            console.log(error);
        })
};

const loadHTML = async path => {
    const htmlProm = await fetch(path)
        .then(result => {
            return result.text();
        })
        .then(html => html)
        .catch(() => {
            throw 'HTML 파일을 읽지 못했습니다.';
        });

    return htmlProm;
}

export default {
    render(contentsData , paramData){
        let htmlString = ``;
        let viewData = Utils.getCategoryData(paramData.params[0] , contentsData);

        if(viewData){
            categoryName = viewData.data.name;
            htmlString += `
                <style>
                 #header h1 a{color: #121212;}
                </style>
                <div class="work-detail">
                    <div class="container">
                        <div class="header">
                            <h2>${viewData.data.title}</h2>
                            <div class="date">${viewData.data.date}</div>
                        </div>
                        <div class="contents">


                        <!--
                            <div class="short-info">
                                <div class="title">${viewData.data.title}</div>
                                <div class="description">${viewData.data.description}</div>
                                <ul>
                                    <li>
                                        <dl>
                                            <dt>TITLE</dt>
                                            <dd>${viewData.data.title}</dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>CLIEN</dt>
                                            <dd>${viewData.data.client ? viewData.data.client : '-'}</dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>URL</dt>
                                            <dd>${viewData.data.url ? `<a href="${viewData.data.url.match(/http:\/\//g) ? viewData.data.url : 'http://'+viewData.data.url }" target="_blank">${viewData.data.url}</a>` : '-'}</dd>
                                        </dl>
                                    </li>
                                </ul>
                            </div>

                            -->


                            <div class="view-contents">

                            </div>

                            <div class="short-info">
                                <div class="title">${viewData.data.title}</div>
                                <div class="description">${viewData.data.description}</div>
                                <ul>
                                    <li>
                                        <dl>
                                            <dt>Title</dt>
                                            <dd>${viewData.data.title}</dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>Client</dt>
                                            <dd>${viewData.data.client ? viewData.data.client : '-'}</dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>URL</dt>
                                            <dd>${viewData.data.url ? `<a href="${viewData.data.url.match(/http:\/\//g) ? viewData.data.url : 'http://'+viewData.data.url }" target="_blank">${viewData.data.url}</a>` : '-'}</dd>
                                        </dl>
                                    </li>
                                </ul>
                            </div>
                            <!-- short-info END -->

                        </div>
                        <!-- contents END -->

                        <div class="indicator">
                            <div class="page-button-wrapper button-left-wrapper">
                                <a href="/#/works/${viewData.index == 0 ? Utils.getNameToLink(contentsData[contentsData.length-1].name) : Utils.getNameToLink(contentsData[viewData.index-1].name)}" class="page-button"></a>
                                <div class="info-next">
                                    <span class="prefix">이전</span>
                                    <div class="article-name">${viewData.index == 0 ? contentsData[contentsData.length-1].name : contentsData[viewData.index-1].name}</div>
                                </div>
                            </div>

                            <!--
                            <div class="page-button-wrapper button-center-wrapper">
                                <a href="/#/works">Works List</a>
                            </div>
                            -->

                            <div class="page-button-wrapper button-right-wrapper">
                                <a href="/#/works/${viewData.index == contentsData.length-1 ? Utils.getNameToLink(contentsData[0].name) : Utils.getNameToLink(contentsData[viewData.index+1].name)}" class="page-button" data-test="${viewData.index == contentsData.length-1}"></a>

                                <div class="info-next">
                                    <span class="prefix">다음</span>
                                    <div class="article-name">${viewData.index == contentsData.length-1 ? contentsData[0].name : contentsData[viewData.index+1].name}</div>
                                </div>
                            </div>

                            <div class="page-number-wrapper">
                                <div class="inner">
                                    <strong>${viewData.index+1}</strong>
                                    <span>/ ${contentsData.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- container END -->
                </div>
                <!-- work-detail END -->
            `;
            // ${viewData.data.viewContents ? viewData.data.viewContents : `<div class="no-contents">NO CONTENTS</div>`}
        }else{
            htmlString += `
                <div class="error404">카테고리가 존재하지 않습니다.</div>
            `;
        }

        return {
            htmlString,
            callback
        };
    },
    destroy(){

    }
}
