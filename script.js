let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                }catch{
                    display.innerText = 'Error';
                }
                break;
            default:
                display.innerText+=e.target.innerText;
        }
    })
}) 

document.addEventListener('keyup', (event) => {
    var name = event.key;
    switch(name){
        case 'C':
            display.innerText = '';
            break;
        case 'Backspace':
            if(display.innerText){
                display.innerText = display.innerText.slice(0,-1);
            }
            break;
        case '=':
            try{
                display.innerText = eval(display.innerText);
            }catch{
                display.innerText = 'Error';
            }
            break;
        case 'Enter':
            try{
                display.innerText = eval(display.innerText);
            }catch{
                display.innerText = 'Error';
            }
            break;
        
        default:
            if(name == '1' || name == '2' || name == '3' || name == '4' || name == '5' || name == '6' || name == '7' || name == '8' || name == '9' || name == '+' || name == '-' || name == '*' || name == '/' || name == ')' || name == '(' || name == '0')
            display.innerText+=name;
    }
  }, false);
