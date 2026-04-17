const customRender = (reactElement , divcontainer) =>{

// let Domelement = document.createElement(reactElement.type);
// Domelement.innerHTML = reactElement.children
// Domelement.setAttribute("href" , reactElement.props.href)
// Domelement.setAttribute("target" , reactElement.props.target)
// divcontainer.appendChild(Domelement)

let Domelement = document.createElement(reactElement.type);
Domelement.innerHTML = reactElement.children
for (const prop in reactElement.props) {
    if (prop === "children") continue;
    
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
    children: "Click Me To Visit Google"
}


let MainRoot = document.getElementById('root');

customRender(reactElement , MainRoot)





