const callback = () => {
    const itemElems = document.querySelectorAll('.item-wrapper .item');

    [...itemElems].map((item , index)=>{
        item.querySelector('.img').addEventListener('mousemove', event => {
            handleImageMove(item.querySelectorAll('.img img') ,event);
        });

        item.querySelector('.img').addEventListener('mouseleave', event => {
            handleImageOut(item.querySelectorAll('.img img') ,event);
        });
    });
};

const handleImageMove = (imgData , event) => {
    const length = imgData.length;
    const width = event.currentTarget.clientWidth;
    const unit = event.currentTarget.clientWidth / length;

    let curIndex = Math.floor((event.clientX - event.currentTarget.getBoundingClientRect().left) / unit);
    curIndex = curIndex < 0 ? 0 : curIndex;


     [...imgData].map((img , index) => {
         if(index == curIndex){
             img.className = 'active';
         }else{
            img.className = '';
         }

    });
};

const handleImageOut = (imgData , event) => {
     [...imgData].map((img , index) => {
         if(index == 0){
             img.className = 'active';
         }else{
             img.className = '';
         }
    });
};

export default {
    render(contentsData){
        const parentWidth = document.getElementById('wrapper').clientWidth;
        // const wrapperPadding = 100;
        const itemPadding = 50;
        const contentWidth = 495;
        const contentHeight = 346;
        const ratio = contentHeight/contentWidth;

        let htmlString = `<div class="main item-wrapper">`;
        let viewCol = 4;
        let width = (parentWidth - itemPadding * (viewCol+1)) / viewCol;

        contentsData.map((data,index) => {
            const itemColsOrder = Math.abs(index%viewCol);
            const itemRowsOrder = Math.floor(index / viewCol);
            htmlString += `
                <div class="item" data-id="${index}"
                    style="width:${width}px;height:${width * ratio}px;top:${itemRowsOrder * (width * ratio) + (itemPadding * itemRowsOrder)}px;left : ${itemColsOrder == 0 ? itemPadding : itemColsOrder * width + itemPadding * itemColsOrder}px;"
                >
                    <div class="img">
                        ${ data.thumbnails.map((imgPath , index)=> index == 0 ? `<img src="${imgPath}" class="active" alt="" />` : `<img src="${imgPath}" alt="" />`).join('') }
                    </div>
                    <div class="info">
                        <h2>${data.title}</h2>
                        <div class="description">${data.description}</div>
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
        console.log('destroy');
    }
};
