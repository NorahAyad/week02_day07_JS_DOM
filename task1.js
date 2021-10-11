
function size(){
    const header=document.querySelector("h1");
header.style.fontSize= "20px";
}

function stlye(){
    const p=document.querySelector('p');
    p.style.fontStyle= " italic"  ;
    p.style.backgroundColor="red";
}
function Highlight(){
    const p2=document.querySelector('p');
    p2.style.backgroundColor="red";

}
function hid(){
    const img=document.querySelector("img");
img.style.visibility='hidden';

}
function two(){
    const img2=document.querySelector("img");
    // img2.style.visibility='hidden';
    
    // img2.src="img/1.png";
    
    if( img2.src==="http://127.0.0.1:5500/img/1.png"){

        img2.src="http://www.javatpoint.com/images/javascript/javascript_logo.png";
       
    } else{
        img2.src="img/1.png";
       

}}
function haver(){
const m= document.querySelector("img");
if( m.src==="http://127.0.0.1:5500/img/1.png"){

    m.src="http://www.javatpoint.com/images/javascript/javascript_logo.png";
   
} else{
    m.src="img/1.png";
   
}

}

function haver1(){
    alert("nnn")
}
function haver2(){
    const m= document.querySelector("p");

    if(m.style.color==="green"){
        m.style.color="black";
    }else{
        m.style.color="green";
    }
    
}