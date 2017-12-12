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
<<<<<<< HEAD
            htmlString : `
                <div class="about" style="padding-top:120px;text-align:center;">
                    <h2>ABOUT</h2>
                    <p>하이하이</p>
                </div>`
=======
            htmlString,
            callback
>>>>>>> b4b8d8d08807112c69ed79fbe9bc8ab0adce2c64
        }
    },
    destroy(){

    }
}
