// friendly message
let day = new Date();
let showday = "";

switch( day.getDay()){

            case 0:
                showday = "Super Sunday";
                break;
            case 1:
                showday ="Awesome Monday"; 
                break;   
            case 2:
                showday ="Happy Tuesday"; 
                break;
            case 3:
                showday ="Joyful Wednesday"; 
                break;
            case 4:
                showday ="Wonderful Thursday";
                break;  
                
            case 5:
                showday ="Fantastic Friday"; 
                break;
            
            case 6:
                showday ="Nice Saturday"
                
                break;

}

document.getElementById("demo").innerHTML = showday;

// taskbar active
  const navBtns = document.querySelectorAll('.btn');

  navBtns.forEach(btn => {
    btn.addEventListener('click', ()=> {
      removeActive();
      btn.classList.add('active');
    });

    function removeActive(){
        navBtns.forEach((btn)=>{
            btn.classList.remove('active');
        })
    }

    if (btn.href === window.location.href) {
      btn.classList.add('active');
    }
    else{
        btn.classList.remove('active');
    }
  });
  
  //background looping
  const bgImageArray = ['image/bg1.png', 'image/bg2.jpg', 'image/bg3.jpg', 'image/bg4.avif'];
  function bgImageSequence() {
    for (let i = 0; i < bgImageArray.length; i++) {
      setTimeout(() => {
        document.getElementById("body").style.background = "url("+ bgImageArray[i] +") no-repeat bottom right";
        document.getElementById("body").style.backgroundSize = "cover";

        
        if (i === bgImageArray.length - 1) {
          setTimeout(() => {
            bgImageSequence(); 
          }, 1000);
        }
    
      }, 1000 * i);
    }
  }

  bgImageSequence();