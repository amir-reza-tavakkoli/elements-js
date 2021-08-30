export function create(type, attributes) {
    try{
        if(type === ''){throw new Error("empty element is'nt allowed")}
        let newlyCreatedElement = document.createElement(type);
        for (let key in attributes){
            newlyCreatedElement.setAttribute(key, attributes[key])
        }
        return newlyCreatedElement;
    }
    catch(err){
        if(err instanceof TypeError){
            console.log(err.name,err.message);
        }
        else{
            throw err;
        }
    }
}

export function mount(element, selector) {
    try{
        let whereToAppend = document.querySelectorAll(selector)[0];
        whereToAppend.appendChild(element);
        return whereToAppend;
    }
    catch(err){
        if(err instanceof TypeError){
            console.log(err.name,"bad query");
        }
        else{
            throw err;
        }
    }
}
