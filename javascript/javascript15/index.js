//browser events
//evemt 
// respond
//  data-stored




//montitorevents(documents)

//unmontitorevents(documents)

//eventtarget(entity where event recieve{may be u apply event listener})
//after click -what action performed-event_listener
//see this lecture


//syntax
//<event-target>.addeventlistener(eventtype,function action)


// function changetext(event){
// console.log(event) 
// let fpara=document.getElementById('fpara')
// fpara.textContent='kushagra jee'
// }
// let fpara=document.getElementById('fpara')
// fpara.addEventListener('click',changetext)
// fpara.removeEventListener('click',changetext)//same function referce which used in addlistener


//phase of event

//1-capturing phase
//2-at target phase
// 3- bubbling phase


//addeventlistener by default  works on bubbling phase

//capturing phase mae addeventlistener use krne ke liye usecapture kr lo
// fpara.addEventListener('click',changetext,true)//true for capturing phase false for bubbligng

//event objects



//default actions :everu elemtnt have default action
//check anchor tag


// let anchor=document.getElementById('fanchor')
// console.log(anchor)
// anchor.addEventListener('click',function(event){
//     event.preventDefault()
//     anchor.textContent='dddd'


// })


//avoiding to much listener

let paras=document.getElementById('wrapper')

// function alertpara(event){
//         alert('click on '+ event.target.textContent)
//     }

function alertpara(event){
    if(event.target.nodeName=='SPAN')
        alert('click on '+ event.target.textContent)
    }

// for(let i=0;i<paras.length;i++){
//     let p=paras[i];
//     p.addEventListener('click',alertpara)
// }

 paras.addEventListener('click',alertpara)