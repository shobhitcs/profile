let tabs=document.querySelectorAll('.tab');
let links=document.querySelectorAll('.links');
let elements=document.querySelectorAll('.init');
animate();
window.addEventListener('scroll',animate);

function animate(){
        let scrollheight=window.scrollY;
        // console.log(scrollheight);

        let windowheight=window.innerHeight;
        let heightperc=0.44*windowheight;
        let checkpoint=100;
        for(let i=0;i<elements.length;i++){
            let topoffset=elements[i].getBoundingClientRect().top;
            
            if(topoffset<windowheight-checkpoint){
                elements[i].classList.add('active');
            }
            
        }
        for(let j=0;j<tabs.length;j++){
            let taboffset=tabs[j].getBoundingClientRect().top;
            let tabbottomoffset=tabs[j].getBoundingClientRect().bottom;
            
            if(taboffset<windowheight-heightperc && tabbottomoffset>windowheight-heightperc){
                links[j].classList.add('linkactive');
            }
            else
            if(links[j].classList.contains('linkactive')){
                links[j].classList.remove('linkactive')
            }
            
        }
}
function scrollwindow(){
    scrollTo(0,0);
}