let state = { 
    title: "Hello!", message: "" 
};
const template = (state) => { 
    return ` <h3>${state.title}</h3> <p>${state.message}</p> `; 
};
const render = (htmlString, el) => { 
    el.innerHTML = htmlString; 
};

const update = (newState) => { 
    state = { ...state, ...newState}; // patch state, overwrite old data with new properties 
    window.dispatchEvent(new Event("statechange"));  
};

const test = document.createElement('div');
test.className='app';
app.append(test);



window.addEventListener("statechange", () => { 
    render(template(state), document.querySelector(".app")); 
}); 

update({ message: "Is it me you are looking for?" });