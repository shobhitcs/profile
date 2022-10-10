window.addEventListener('scroll',animate);

function animate(){
     let elements=document.querySelectorAll('.init');
        console.log(elements);
     let windowheight=window.innerHeight;
     let topoffset=elements[0].getBoundingClientRect().top;
     let checkpoint=150;

     if(topoffset<windowheight-checkpoint){
        elements[0].classList.add('active');
     }
}