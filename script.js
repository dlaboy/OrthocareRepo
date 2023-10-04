
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