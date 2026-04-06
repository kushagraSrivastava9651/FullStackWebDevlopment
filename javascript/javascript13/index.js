//js dom manipulation-->window object(all global var and function lie under window object) --> global object


//Dom:(document object model)
//(html code hai-- ishka javascript object bna diya-- jisko document khte hai)== DOM


//tags-> token-> nodes[(multiple nodes)=DOM]

//          html
//           / \
//         /.   \
//        body.  head


//          window
//           / \.  \
//         /.   \    \
//        DOM.  BOM.   js Core


//BOM(BROWSER OBJEECT MODEL):INTRACTION WITH BROWSER EXCEPT HTML IS UNDER BOM

//fetch contnet by  document.getelementby(class or id or tag)

//docuemnt.queryselector({.classname,#idname,tage})
//docuemnt.queryselectorAll({.classname,#idname,tage})

//update html as well we can do
//1-innerHTMl
//2-outer html
//3- text-content(complete content text)
//4- innertext(same as display in ui)


//add elemt 

//createelement
//.appendchild


//insertadjacenthtml()-2 things requiremt position and content

// for position
//1before begin
//after begin
//after end
//before end

// let mydiv=document.querySelector('#mydiv')
// let newelement=document.createElement('span')
// newelement.textContent='dfhuwfaa'
// mydiv.insertAdjacentElement('beforebegin',newelement)


//remove element
let mydiv=document.querySelector('#mydiv')
let child=document.querySelector('#fpara')
mydiv.removeChild(child)