
    // const chooseBtn = document.querySelector('.btn');
    let addInput = document.querySelector('.input');
    const btnSize = document.querySelector('#set'),
        addSize = document.querySelector('.size'),
        addChoose = document.querySelector('.choose');


     let color = 'black';
    let click = true;
    let pink = 'pink';
    let size = 16;
    function createBord (size, color) {
        let wrapper = document.querySelector('.art-wrapper');
        let squares = wrapper.querySelectorAll('div');
        squares.forEach((div) => div.remove());
        wrapper.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
        wrapper.style.gridTemplateRows = `repeat(${size} , 1fr)`;
        let amout = size * size;
        for(let i = 0; i<amout; i++) {
            let square = document.createElement('div');
            square.addEventListener('mouseover', colorSquare);
            square.style.backgroundColor = color;
            wrapper.insertAdjacentElement('beforeend', square);
        }
    }
    createBord(32, pink);
    
    function resetBoard() {
            let wrapper = document.querySelector('.art-wrapper');
            let squares = wrapper.querySelectorAll('div');
            squares.forEach((div) => div.style.backgroundColor = pink);
        }
    // Quastions to square
    let secondQua;
    function quastion() {
        secondQua = prompt('enter number must be 2 and 100');
        return secondQua;
    }
    // chooseBtn.addEventListener('click', () => {
    //     for(let i= 0; i<1; i++) {
    //       quastion();  
    //       if(secondQua >=2 && secondQua <=100) {
    //         createBord(secondQua, pink);
    //     }else if (secondQua === null) {
    //         createBord(32, pink);
    //         break;
    //     } else { 
    //         alert('to many, input must be 2 and 100');
    //         i--;
    //         } 
         
    //     }
    // });
    
   
   
    function colorSquare () {
       if(click) {
        if(color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
       }
    }
    function changeColor(choice) {
        color = choice;
    }
    
    function isMode() {
      document.querySelector('body').addEventListener('click', (e) => {
        if(e.target.tagName != "BUTTON" && e.target.tagName != "INPUT" ) {
            click = !click;
        if(click) {
            document.querySelector('.mode').textContent = 'Mode Coloring';
        } else {
            document.querySelector('.mode').textContent = 'Mode not Coloring';
        }
        }
    });  
    }
    isMode();

    function changeSize(arg) {
        if(arg >=2 && arg <=100 ) {
            createBord(arg, pink);
        } else {
            alert('to many, input must be 2 and 100');
        }
    }
    
    function isSize() {
        btnSize.addEventListener('click', () => {
                let newSize = addInput.value;
                if(newSize >=2 && newSize <=100 ) {
                    addSize.textContent = `Size board is: ${newSize}`;
                } else { 
                    addInput.value = 32;
                    addSize.textContent = `To many, input must be 2 and 100`;
                }
                changeSize(newSize);
        });
    }
    isSize();

    function isColor () {
        document.querySelector('.buttons').addEventListener('click', () => {
            addChoose.textContent= `Color is: ${color}`;
        });
        
        console.log(addChoose);
    }
    isColor();
    function chooseClicked() {
        document.querySelector('.buttons').addEventListener('click', (e) => {
            if(e.target.tagName === 'BUTTON') {
                console.log('done');
            }
        });
    }
    const btnCl = (e) => {
        const id = e.target.class;
        console.log(id);
    };
  

    
    
    