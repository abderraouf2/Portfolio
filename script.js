const hello= document.getElementById("1");
const I= document.getElementById("2");
const abd=document.getElementById("3");
const body=document.getElementById("body");
hello.addEventListener('mouseenter',function()
{
 hello.innerHTML="projects";
 
}
)
hello.addEventListener('mouseout',function(){
  hello.innerHTML="HELLO,"
})

I.addEventListener('mouseenter',function()
{
 I.innerHTML="About";
 
}
)
I.addEventListener('mouseout',function(){
  I.innerHTML="I'M"
})
abd.addEventListener('mouseenter',function()
{
 abd.innerHTML="Contact";
 
}
)
abd.addEventListener('mouseout',function(){
  abd.innerHTML="ABDERRAOUF"
})
const mobileTap=(x)=>{
  if(x.matches){
    let a=document.getElementById("tap");
      a.innerHTML="show";
    body.addEventListener("click",function(){
      hello.innerHTML="PROJECTS,";
      hello.style.marginTop="10%";  
      I.innerHTML="ABOUT,";
      I.style.marginTop="10%";
      abd.innerHTML="CONTACT";
      abd.style.marginTop="10%";
    })
    let count=0;
    count++;
  }
  if (count===1) {
    body.addEventListener("click",function(){
      hello.innerHTML="HELLO,,";  
      I.innerHTML="I'M,";
      abd.innerHTML="ABDERRAOUF";
    });
    count=0;
  }
  
}

  var x = window.matchMedia("(max-width: 600px)")
  mobileTap(x);
  x.addListener(mobileTap);
  
 
