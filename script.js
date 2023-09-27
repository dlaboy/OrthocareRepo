// var ph = document.querySelectorAll('.products-header');

// [...ph].forEach((product_header)=>{
//   product_header.addEventListener('click',function(){
//     var ps = document.querySelectorAll('.products-section');
    
//     [...ps].forEach((product_section)=>{
//       product_section.classList.toggle('d-none');
//     })
//   })
// });

// var sh = document.querySelectorAll('.services-header');

// [...sh].forEach((services_header)=>{
//   services_header.addEventListener('click',function(){
//     var ss = document.querySelectorAll('.services-section');
    
//     [...ss].forEach((services_section)=>{
//       services_section.classList.toggle('d-none');
//     })
//   })
// });

var spine = document.querySelectorAll('.spine');

[...spine].forEach((spine)=>{
  spine.addEventListener('click',()=>{
    var spineSection = document.querySelectorAll('.spine-products');
    [...spineSection].forEach((spineSec)=>{
      spineSec.classList.toggle('d-none');

    })
  })
})

var sports = document.querySelectorAll('.sports');

[...sports].forEach((sports)=>{
  sports.addEventListener('click',()=>{
    var sportsSection = document.querySelectorAll('.sports-products');
    [...sportsSection].forEach((sportsSec)=>{
      sportsSec.classList.toggle('d-none');

    })
  })
})

var hip = document.querySelectorAll('.hip');

[...hip].forEach((hip)=>{
  hip.addEventListener('click',()=>{
    var hipsSection = document.querySelectorAll('.hip-products');
    [...hipsSection].forEach((hipsSec)=>{
      hipsSec.classList.toggle('d-none');

    })
  })
})

var knee = document.querySelectorAll('.knee');

[...knee].forEach((knee)=>{
  knee.addEventListener('click',()=>{
    var kneeSection = document.querySelectorAll('.knee-products');
    [...kneeSection].forEach((kneeSec)=>{
      kneeSec.classList.toggle('d-none');

    })
  })
})

var trauma = document.querySelectorAll('.trauma');

[...trauma].forEach((trauma)=>{
  trauma.addEventListener('click',()=>{
    var traumaSection = document.querySelectorAll('.trauma-products');
    [...traumaSection].forEach((traumaSec)=>{
      traumaSec.classList.toggle('d-none');

    })
  })
})
var wound = document.querySelectorAll('.wound');

[...wound].forEach((wound)=>{
  wound.addEventListener('click',()=>{
    var woundSection = document.querySelectorAll('.wound-products');
    [...woundSection].forEach((woundSec)=>{
      woundSec.classList.toggle('d-none');

    })
  })
})

var pands = document.querySelectorAll('.pands');

    [...pands].forEach((pand)=>{

      pand.addEventListener('click',function(){
        pand.classList.toggle('pands-flipped');
      })
    })

    function LangClick(){
      
      if(document.getElementById("lang-dis").classList.contains("d-none")){
        document.getElementById("lang-dis").classList.remove("d-none");
        document.getElementById("x").classList.remove("d-none");
        document.getElementById("text").classList.add("d-none");

      }
      else{
        document.getElementById("x").classList.add("d-none");
        document.getElementById("lang-dis").classList.add("d-none");
        document.getElementById("text").classList.remove("d-none");

        
      }
    }
    document.getElementById("lang-tog").addEventListener('click',LangClick);

    const navbar = document.querySelector(".nav");
    const section = document.querySelector("section");

    window.addEventListener("scroll", () => {
      if (window.scrollY > section.offsetTop) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    });