
/****************************/
/* Find elements in the DOM */
/* **************************/


// by Id
const mainTitle = document.getElementById("main-title")
mainTitle.innerText = "Full Stuck Developers e-commerce"

// by class name
const infoCollection = document.getElementsByClassName("info")
const infoElementsArray = [...infoCollection]; // convert html collection to an array
infoElementsArray.forEach(element => {
    element.style.color = "blue"
})


// by tag name
const allParagraphsHtmlCollection = document.getElementsByTagName("p")


// by css selectors....
const first = document.querySelector("header h2") // first element matching this css selector
const all =   document.querySelectorAll("header h2") // all the elements matching this css selector

all.forEach( (elm) => {
    elm.style.color = "purple"
    elm.style.background = "yellow"
})


//
// context: document vs. element
//

const allParagraphsInDocument = document.getElementsByTagName("p");

// get all p inside element with id #products
const productsElm = document.getElementById("products")
const allParagraphsInProductsElm = productsElm.getElementsByTagName("p")

const allParagraphsInProductsElm_Alternative = document.querySelectorAll("#products p")



/**************/
/* Properties */
/**************/

// Read/Modify html contents --> elm.innerHTML
const pikachuElm = document.getElementById("pikachu")
pikachuElm.innerHTML = `
    <div>
        <p>one<p>
        <p>two
            <a href="#">click here for more info</a>
        <p>
    </div>
    `

// Read/Modify text content --> elm.innerText
const linkElm = document.getElementById("my-link")
linkElm.innerText = "About us & our story"


// Read/Modify CSS --> elm.style
mainTitle.style.color = "green"
mainTitle.style.background = "orange"
mainTitle.style.padding = "20px"
mainTitle.style.borderRadius = "10px"


// Read/Modify the id --> elm.id
// mainTitle.id = "this-is-the-new-id"


// Read/Modify class --> elm.className
// mainTitle.className = "cool-title header"


//
// elm.classList (provides methods to access class names)
//
// - elm.classList.remove("foo");
// - elm.classList.add("new-class")
// - elm.classList.toggle("active")

mainTitle.classList.add("box")
mainTitle.classList.toggle("active")




/**************/
/* Attributes */
/**************/

// get: elm.getAttribute(attributeName);
const result = linkElm.getAttribute("href")
console.log(result);

// modify or create: elm.setAttribute(name, value);
linkElm.setAttribute("href", "https://ironhack.com")
linkElm.setAttribute("target", "_blank")




/*********************/
/* Create a DOM node */
/*********************/

// step1: create the element
const newImg = document.createElement("img")

// step2: add content or modify (ex. innerHTML...)
newImg.setAttribute("src", "./images/pikachu.jpg")
newImg.setAttribute("alt", "pikachu image")

//step3: append to the dom: `parentElm.appendChild()`
const parentElm = document.getElementById("pikachu")
parentElm.appendChild(newImg)





/**************/
/**************/
/*   Events   */
/**************/
/**************/

/*

examples of events
  - mouse events (e.g. click, mouseover...)
  - keyboard events (e.g. keydown, keypress, keyup)
  - Document (DOMContentLoaded, ...)
  - Full list: https://www.w3schools.com/jsref/dom_obj_event.asp


elm.addEventListener(typeOfevent, code)

*/

const btn1 = document.getElementById("button-1")

btn1.addEventListener("click", () => {
    console.log("hurray, user clicked on button 1!")
})


//
// Append a paragraph every time the user clicks on a button
//

const btnThree = document.getElementById("add-paragraph")

btnThree.addEventListener("click", () => {
    // step1: create the element
    const newParagraph = document.createElement("p")

    // step2: add content or modify (ex. innerHTML...)
    newParagraph.innerText = "This paragraph was creared dynamically."

    //step3: append to the dom: `parentElm.appendChild()`
    const parentElm = document.getElementById("box-3")
    parentElm.appendChild(newParagraph)
})




//
// Detect spacebar + "event" object
//


document.addEventListener("keydown", (event) => {
    if(event.code === "Space"){
        console.log("user pressed space bar")
    } else {
        console.log("user pressed some other key...")
    }
})



/*************************************/
/* Attach event to multiple elements */
/*************************************/

const allBtn = document.querySelectorAll(".btn")

allBtn.forEach((elm) => {
    elm.addEventListener("click", () => {
        console.log("**** click on a generic button ****")
    })
})


