export default {
    getNameToLink(str){
        return str.toLowerCase().replace(/\s+/g ,'-');
    },
    getLinkToName(str){
        return str.toLowerCase().replace(/\-/g ,' ');
    },
    getCategoryData(name ,contentsData){
        console.log(11);
        for(let i = 0; i < contentsData.length; i++){
            console.log(contentsData[i].name.toLowerCase());
            console.log(this.getLinkToName(name));
            if(contentsData[i].name.toLowerCase() == this.getLinkToName(name)){

                return {
                    index : i,
                    name : contentsData[i].name,
                    data : contentsData[i]
                }
            }
        }

        return false;
    }
}
