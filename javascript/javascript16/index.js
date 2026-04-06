// //performance improvement
// const t1=performance.now()
// for(let i=0;i<100;i++){
//     let para=document.createElement('p')
//     para.textContent='hello'
//     document.body.appendChild(para)
// }
// const t2=performance.now()
// console.log('total time by code 1: ' + (t2-t1))


// let div=document.createElement('div')


// const t3=performance.now()
// for(let i=0;i<100;i++){
//     let para=document.createElement('p')
//     para.textContent='hello'
//     div.appendChild(para)
// }
// document.body.appendChild(div)
// const t4=performance.now()
// console.log('total time by code 2: ' + (t4-t3))

// //reflow and repaint

// //reflow: proces of calculating position and dimension of element(computaional high)
// //repaint: rocess of displaying pixel by pixel(faster)//see video



//document fragment(light wt document object):when append element then no reflow and repaint that why it fast


let fragment=document.createDocumentFragment();
for(let i=0;i<10000;i++){
    let p=document.createElement('p')
    p.textContent='jjdfk'
    //no reflow and no repaint
    fragment.appendChild(p)
}
 //1 reflow and 1 repaint
document.body.appendChild(fragment)