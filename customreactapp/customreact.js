const customRender = (reactElement , divcontainer) =>{

// let Domelement = document.createElement(reactElement.type);
// Domelement.innerHTML = reactElement.childern
// Domelement.setAttribute("href" , reactElement.props.href)
// Domelement.setAttribute("target" , reactElement.props.target)
// divcontainer.appendChild(Domelement)

let Domelement = document.createElement(reactElement.type);
Domelement.innerHTML = reactElement.childern
for (const prop in reactElement.props) {
    if (prop === "childern") continue;
    
   Domelement.setAttribute(prop , reactElement.props[prop])
    
}
divcontainer.appendChild(Domelement)
}

const reactElement = {
    type: "a",
    props : {
        href: "https://google.com",
        target : "_blank"
    },
    childern: "Click Me To Visit Google"
}


let MainRoot = document.getElementById('root');

customRender(reactElement , MainRoot)





//  {/* {createReactelement} { /*This IS The Way To Get Evalated Expression  In React This evalutaed Expression Is Called Getting THe Output Of Varibale */ } */}