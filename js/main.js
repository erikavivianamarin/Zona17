document.addEventListener('DOMContentLoaded', ()=>{
    const elementosCaruosel = document.querySelectorAll('.Caruosel');
    M.Caruosel.int(elementosCaruosel,{
        duration: 150,
        dist:-80,
        shift: 5,
        numVisible: 3,
        indicautors: true,
        noWrap: true
    });
});