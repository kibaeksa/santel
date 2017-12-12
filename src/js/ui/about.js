const callback = () => {
    console.log('callback');
};

export default {
    render(){
        const htmlString = `
            <div class="about" style="padding-top:120px;text-align:center;">
                <h2>ABOUT</h2>
            </div>
        `;

        return {
            htmlString,
            callback
        }
    },
    destroy(){

    }
}
