
var languageButton = document.querySelector('.lang-item');

languageButton.addEventListener('click', ()=>{
  var text = document.querySelectorAll('.eng, .esp');
  [... text].forEach((t)=>{
    t.classList.toggle('d-none');

  })

})






var spine = document.querySelectorAll('.spine');

var spineCloser = document.querySelectorAll('.spine-close');

[...spineCloser].forEach((closer)=>[
  closer.addEventListener('click',()=>{
    var spineSection = document.querySelectorAll('.spine-products');
      [...spineSection].forEach((spineSec)=>{
        spineSec.classList.toggle('d-none');
  
      })
  })
]);



[...spine].forEach((spine)=>{
  spine.addEventListener('click',()=>{
    var spineSection = document.querySelectorAll('.spine-products');
    [...spineSection].forEach((spineSec)=>{
      spineSec.classList.toggle('d-none');

    })

  })
})


var sports = document.querySelectorAll('.sports');

var sportsCloser = document.querySelectorAll('.sports-close');

[...sportsCloser].forEach((closer)=>[
  closer.addEventListener('click',()=>{
    var sportsSection = document.querySelectorAll('.sports-products');
      [...sportsSection].forEach((sportsSec)=>{
        sportsSec.classList.toggle('d-none');
  
      })
  })
]);

[...sports].forEach((sports)=>{
  sports.addEventListener('click',()=>{
    var sportsSection = document.querySelectorAll('.sports-products');
    [...sportsSection].forEach((sportsSec)=>{
      sportsSec.classList.toggle('d-none');

    })
  })
})

var hip = document.querySelectorAll('.hip');

var hipCloser = document.querySelectorAll('.hip-close');

[...hipCloser].forEach((closer)=>[
  closer.addEventListener('click',()=>{
    var hipSection = document.querySelectorAll('.hip-products');
      [...hipSection].forEach((hipSec)=>{
        hipSec.classList.toggle('d-none');
  
      })
  })
]);

[...hip].forEach((hip)=>{
  hip.addEventListener('click',()=>{
    var hipsSection = document.querySelectorAll('.hip-products');
    [...hipsSection].forEach((hipsSec)=>{
      hipsSec.classList.toggle('d-none');

    })
  })
})

var knee = document.querySelectorAll('.knee');

var kneeCloser = document.querySelectorAll('.knee-close');

[...kneeCloser].forEach((closer)=>[
  closer.addEventListener('click',()=>{
    var kneeSection = document.querySelectorAll('.knee-products');
      [...kneeSection].forEach((kneeSec)=>{
        kneeSec.classList.toggle('d-none');
  
      })
  })
]);

[...knee].forEach((knee)=>{
  knee.addEventListener('click',()=>{
    var kneeSection = document.querySelectorAll('.knee-products');
    [...kneeSection].forEach((kneeSec)=>{
      kneeSec.classList.toggle('d-none');

    })
  })
})

var trauma = document.querySelectorAll('.trauma');

var traumaCloser = document.querySelectorAll('.trauma-close');

[...traumaCloser].forEach((closer)=>[
  closer.addEventListener('click',()=>{
    var traumaSection = document.querySelectorAll('.trauma-products');
      [...traumaSection].forEach((traumaSec)=>{
        traumaSec.classList.toggle('d-none');
  
      })
  })
]);

[...trauma].forEach((trauma)=>{
  trauma.addEventListener('click',()=>{
    var traumaSection = document.querySelectorAll('.trauma-products');
    [...traumaSection].forEach((traumaSec)=>{
      traumaSec.classList.toggle('d-none');

    })
  })
})
var wound = document.querySelectorAll('.wound');

var woundCloser = document.querySelectorAll('.wound-close');

[...woundCloser].forEach((closer)=>[
  closer.addEventListener('click',()=>{
    var woundSection = document.querySelectorAll('.wound-products');
      [...woundSection].forEach((woundSec)=>{
        woundSec.classList.toggle('d-none');
  
      })
  })
]);

[...wound].forEach((wound)=>{
  wound.addEventListener('click',()=>{
    var woundSection = document.querySelectorAll('.wound-products');
    [...woundSection].forEach((woundSec)=>{
      woundSec.classList.toggle('d-none');

    })
  })
})

// Ophthalmics Products click listeners
var ophta = document.querySelectorAll('.ophta');

var ophtaCloser = document.querySelectorAll('.ophta-close');

[...ophtaCloser].forEach((closer)=>[
  closer.addEventListener('click',()=>{
    var ophtaSection = document.querySelectorAll('.ophta-products');
      [...ophtaSection].forEach((ophtaSec)=>{
        ophtaSec.classList.toggle('d-none');
  
      })
  })
]);

[...ophta].forEach((ophta)=>{
  ophta.addEventListener('click',()=>{
    var ophtaSection = document.querySelectorAll('.ophta-products');
    [...ophtaSection].forEach((ophtaSec)=>{
      ophtaSec.classList.toggle('d-none');

    })
  })
})

// Medical Supplies Products click listeners
var supp = document.querySelectorAll('.supp');

var suppCloser = document.querySelectorAll('.supp-close');

[...suppCloser].forEach((closer)=>[
  closer.addEventListener('click',()=>{
    var suppSection = document.querySelectorAll('.supp-products');
      [...suppSection].forEach((suppSec)=>{
        suppSec.classList.toggle('d-none');
  
      })
  })
]);

[...supp].forEach((supp)=>{
  supp.addEventListener('click',()=>{
    var suppSection = document.querySelectorAll('.supp-products');
    [...suppSection].forEach((suppSec)=>{
      suppSec.classList.toggle('d-none');

    })
  })
})



var st = document.querySelectorAll('.st');

var stCloser = document.querySelectorAll('.st-close');

[...stCloser].forEach((closer)=>[
  closer.addEventListener('click',()=>{
    var stSection = document.querySelectorAll('.st-services');
      [...stSection].forEach((stSec)=>{
        stSec.classList.toggle('d-none');
  
      })
  })
]);

[...st].forEach((st)=>{
  st.addEventListener('click',()=>{
    var stSection = document.querySelectorAll('.st-services');
    [...stSection].forEach((stSec)=>{
      stSec.classList.toggle('d-none');

    })
  })
})

var o = document.querySelectorAll('.oscb');

var oCloser = document.querySelectorAll('.oscb-close');

[...oCloser].forEach((closer)=>[
  closer.addEventListener('click',()=>{
    var stSection = document.querySelectorAll('.oscb-services');
      [...stSection].forEach((stSec)=>{
        stSec.classList.toggle('d-none');
  
      })
  })
]);

[...o].forEach((st)=>{
  st.addEventListener('click',()=>{
    var stSection = document.querySelectorAll('.oscb-services');
    [...stSection].forEach((stSec)=>{
      stSec.classList.toggle('d-none');

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
        document.getElementById("x2").classList.remove("d-none");
        document.getElementById("text").classList.add("d-none");
        document.getElementById("text1").classList.add("d-none");

      }
      else{
        document.getElementById("x").classList.add("d-none");
        document.getElementById("x2").classList.add("d-none");
        document.getElementById("lang-dis").classList.add("d-none");
        document.getElementById("text").classList.remove("d-none");
        document.getElementById("text1").classList.remove("d-none");

        
      }
    }
    document.getElementById("lang-tog1").addEventListener('click',LangClick);
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


    // slideshow 
var nextbutton = document.querySelectorAll(".next");


var firstArmorImage = document.querySelectorAll(".first-c-armor");
var secondArmorImage = document.querySelectorAll(".second-c-armor");
var thirdArmorImage = document.querySelectorAll(".third-c-armor");

var arrowLeft = document.querySelectorAll('.arrow-left');
var arrowRight = document.querySelectorAll('.arrow-right');

var emptyPrevious = document.querySelectorAll('.empty-previous');
var emptyNext = document.querySelectorAll('.empty-next');

[...nextbutton].forEach((nButton)=>{
  nButton.addEventListener('click',function(){

    [...firstArmorImage,
     ...secondArmorImage,
     ...thirdArmorImage, 
     ...arrowLeft, 
     ...arrowRight, 
     ...emptyNext, 
     ...emptyPrevious].forEach((element,index)=>{
      if(index < 2){
        console.log(index)
        if(!firstArmorImage[index].classList.contains('d-none') && secondArmorImage[index].classList.contains('d-none')){
          firstArmorImage[index].classList.add('d-none');
          secondArmorImage[index].classList.remove('d-none');
        }
        else if(!secondArmorImage[index].classList.contains('d-none') && thirdArmorImage[index].classList.contains('d-none')){
          secondArmorImage[index].classList.add('d-none');
          thirdArmorImage[index].classList.remove('d-none');
        }
         if(!firstArmorImage[index].classList.contains('d-none')){
          emptyPrevious[index].classList.remove('d-none');
          arrowLeft[index].classList.add('d-none');
        
        }
        else{
          emptyPrevious[index].classList.add('d-none');
          arrowLeft[index].classList.remove('d-none');
        }

        if(!thirdArmorImage[index].classList.contains('d-none')){
          emptyNext[index].classList.remove('d-none');
          arrowRight[index].classList.add('d-none');
        
        }
        else{
          emptyNext[index].classList.add('d-none');
          arrowRight[index].classList.remove('d-none');
        }

      }
    })
   
    
    
 

  })
})

var previousbutton = document.querySelectorAll('.previous');


[...previousbutton].forEach((pButton)=>{
  pButton.addEventListener('click',function(){
    [...firstArmorImage,
      ...secondArmorImage,
      ...thirdArmorImage, 
      ...arrowLeft, 
      ...arrowRight, 
      ...emptyNext, 
      ...emptyPrevious].forEach((element,index)=>{
       if(index < 2){
         console.log(index)
         if(firstArmorImage[index].classList.contains('d-none') && !secondArmorImage[index].classList.contains('d-none')){
          firstArmorImage[index].classList.remove('d-none');
          secondArmorImage[index].classList.add('d-none');
        }
        else if(secondArmorImage[index].classList.contains('d-none') && !thirdArmorImage[index].classList.contains('d-none')){
          secondArmorImage[index].classList.remove('d-none');
          thirdArmorImage[index].classList.add('d-none');
      
      
        }
      
        
        if(!firstArmorImage[index].classList.contains('d-none')){
          emptyPrevious[index].classList.remove('d-none');
          arrowLeft[index].classList.add('d-none');
        
        }
        else{
          emptyPrevious[index].classList.add('d-none');
          arrowLeft[index].classList.remove('d-none');
        }
        
        if(!thirdArmorImage[index].classList.contains('d-none')){
          emptyNext[index].classList.remove('d-none');
          arrowRight[index].classList.add('d-none');
        
        }
        else{
          emptyNext[index].classList.add('d-none');
          arrowRight[index].classList.remove('d-none');
        }
        
 
       }
     })
  })
})




p

