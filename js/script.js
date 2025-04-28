let $=document
const btnsElem=$.querySelectorAll('.btn')

btnsElem.forEach(function(circle){
        circle.addEventListener('click',function(event){
                $.documentElement.style.setProperty('--theme-color',event.target.dataset.color)
        })        
})
