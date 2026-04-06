let spara=document.getElementById('spara')
console.log(spara)
spara.style.cssText='background-color: yellow; color:blue; padding:2rem'

let fdiv=document.querySelector('#fdiv')
fdiv.setAttribute('class','fclass')
fdiv.setAttribute('class','fssclass')

fdiv.setAttribute('style','background-color:pink;')

let fpara=document.getElementById('fpara')
console.log(fpara.className)
fpara.classList.add('thirdclass')
fpara.classList.toggle('thirdclass')//remove
fpara.classList.toggle('thirdclass')//add
fpara.classList.contains('thirdclass')//add