const el = document.querySelector('.holder');
el.addEventListener('mouseover',(e)=>{
    e.target.classList.add("active");
});
el.addEventListener('mousedown',(e)=>{
    e.target.classList.remove('active');
});
el.addEventListener('mousemove',coor);
function coor(){
    let html = "X:" + event.clientX + "| Y:" + event.clientY;
    document.getElementById('output').innerHTML= html;
}