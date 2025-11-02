const button=document.querySelectorAll('.buttons');
const body=document.querySelector('body')

button.forEach((item) => {
          item.addEventListener('click',function(e){
                    if(e.target.id==='Grey'){
                              body.style.backgroundColor= 'grey';
                    }
                    if(e.target.id==='Yellow'){
                              body.style.backgroundColor='rgba(166, 168, 27, 1)';
                    }
                    if(e.target.id==='Blue'){
                              body.style.backgroundColor='rgb(27, 108, 165)';
                    }
                    if(e.target.id==='Orange'){
                              body.style.backgroundColor= 'rgb(237, 133, 20)';
                    }
          })
})