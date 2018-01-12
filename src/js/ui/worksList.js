import Utils from '../utils/common'

const callback = () => {
    const itemElems = document.querySelectorAll('.items-wrapper .item');

    [...itemElems].map((item , index)=>{
        item.addEventListener('click', handleClick);

        item.querySelector('.img').addEventListener('mousemove', event => {
            handleImageMove(item.querySelectorAll('.img img') ,event);
        });

        item.querySelector('.img').addEventListener('mouseleave', event => {
            handleImageOut(item.querySelectorAll('.img img') ,event);
        });

        setTimeout( () => {
            item.className += ' loaded';
        },index * 50)

    });
};

const handleClick = event => {
    // console.log(event.currentTarget.dataset.href);
    window.location.href = event.currentTarget.dataset.href;
};

const handleImageMove = (imgData , event) => {
    const length = imgData.length;
    const width = event.currentTarget.clientWidth;
    const unit = event.currentTarget.clientWidth / length;

    let curIndex = Math.floor((event.clientX - event.currentTarget.getBoundingClientRect().left) / unit);
    curIndex = curIndex < 0 ? 0 : curIndex;


     [...imgData].map((img , index) => {
         if(index == curIndex){
             img.className = 'loaded active';
         }else{
            img.className = 'loaded';
         }

    });
};

const handleImageOut = (imgData , event) => {
     [...imgData].map((img , index) => {
         if(index == 0){
             img.className = 'loaded active';
         }else{
             img.className = 'loaded';
         }
    });
};

export default {
    render(contentsData , paramData){
        let htmlString = ``;
        /* List */
        htmlString = `
            <style>
             #header h1 a{color: #121212;}
            </style>
            <div class="items-wrapper container clearfix">
                <h2>RECENT WORK</h2>
        `;
        let viewCol = 3;
        contentsData.map((data,index) => {
            const itemColsOrder = Math.abs(index%viewCol);
            const itemRowsOrder = Math.floor(index / viewCol);
            let elemLink = Utils.getNameToLink(data.name);

            htmlString += `
                <div class="item" data-id="${index}" data-href="/#/works/${elemLink}">
                    <div class="item-wrapper">
                        <div class="img">
                            ${ data.thumbnails.imgList.map((imgPath , index)=> `<img src="${data.thumbnails.publicPath + imgPath}" ${index == 0 ? `class="active"` : ''} alt="" />`).join('') }
                        </div>
                        <div class="info">
                            <h3>${data.title}</h3>
                            <div class="date">${data.date}</div>
                        </div>
                    </div>

                </div>
            `;
        });
        htmlString += `</div>`;


        return {
            htmlString,
            callback
        };
    },
    destroy() {
        [...document.querySelectorAll('.items-wrapper .item')].map(elem => {
            elem.className += ' destroy';
        });
    }
};
