let box=document.querySelector("#box");
let images=document.querySelector("#image");

let next=document.querySelector("#next");

let prev=document.querySelector("#prev");


let links = [
    "./605592.png",
    "https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1601758063541-d2f50b4aafb2?q=80&w=2005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1587559070757-f72a388edbba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1729111977815-a4f64ea98416?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
];

firstImage(0);
function firstImage(num){
    images.innerHTML=``;
   let img=document.createElement("img");
   img.src=links[num];
   img.style.height=300+"px";
   img.style.width=300+"px";

   images.append(img);

}

next.addEventListener("click",imageChange);
prev.addEventListener("click",imageChange);


let c=1;

function imageChange(event){
    let opt=event.target;

    if(opt==next){
        c=c+1;
        c=c%links.length;

    }
    else{
        c=c-1;
        c=(c+links.length)%links.length;
    }
    firstImage(c);
    
}

