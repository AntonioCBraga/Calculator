var displayNum = 0;
var result = 0;
var currentNum = 0;
var savedCN = 9999999999999999999999;
var savedOP = "";
var c = 0; //check if multiple operations are pressed before a number [3 + - * * 4] -> makes it [3 * 4];


function screen(){
    displayNum = currentNum;
    document.getElementById("text").innerText = displayNum.toString();   
}

function displayResult(){
    displayNum = result;
    document.getElementById("text").innerText = result.toString(); 
}


function oper1(oper){
    savedCN = currentNum;
    currentNum = 0;
    savedOP = oper;

    c++;
   
    
}

function isButton(op){


    if(op === "C"){
        displayNum = 0;
        currentNum = 0;
        savedCN = 9999999999999999999999;
        savedOP = "";
        screen();
        return;
        
    }


    
    if(c > 0){
        
        if(op == '='){
            if(savedOP === "+"){
                result = currentNum + savedCN
                displayResult();
                currentNum = 0;
                savedCN = 9999999999999999999999;
                
            }
            else if(savedOP === "-"){                
                result = savedCN - currentNum;
                displayResult();
                currentNum = 0;
                savedCN = 9999999999999999999999;
            }
            else if(savedOP === "*"){
                result = currentNum * savedCN
                displayResult();
                currentNum = 0;
                savedCN = 9999999999999999999999;
            }
            else if(savedOP === "/"){
                result = savedCN / currentNum ;
                displayResult();
                currentNum = 0;
                savedCN = 9999999999999999999999;
            }
        }
        savedOP = op;
        return;
    }
    


    if(savedCN == 9999999999999999999999 && c == 0) {//top
        if(op === "+"){
            oper1(op)
        }
        else if(op === "-"){
            
            oper1(op);
            
        }
        else if(op === "*"){
           
            oper1(op)
        }
        else if(op === "/"){
           
            oper1(op)
        }   
    }
    else if(savedCN != 9999999999999999999999 && c == 0){
        if(op === "="){
            
            if(savedOP === "+"){
                result = currentNum + savedCN
                displayResult();
                currentNum = 0;
                savedCN = 9999999999999999999999;
                
            }
            else if(savedOP === "-"){                
                result = savedCN - currentNum;
                displayResult();
                currentNum = 0;
                savedCN = 9999999999999999999999;
            }
            else if(savedOP === "*"){
                result = currentNum * savedCN
                displayResult();
                currentNum = 0;
                savedCN = 9999999999999999999999;
            }
            else if(savedOP === "/"){
                result = savedCN / currentNum ;
                displayResult();
                currentNum = 0;
                savedCN = 9999999999999999999999;
            }
        
        }
        else if(c == 0 && op != "="){
            
            if(savedOP === "+"){
                result = currentNum + savedCN;
                displayResult()
                savedCN = result;
                currentNum= 0;
                savedOP = op;
                c ++;
                
            }
            else if(savedOP === "-"){                
                result = savedCN - currentNum;
                displayResult()
                savedCN = result;
                currentNum= 0;
                savedOP = op;
                c ++;
            }
            else if(savedOP === "*"){
                result = currentNum * savedCN;
                displayResult()
                savedCN = result;
                currentNum= 0;
                savedOP = op;
                c ++;
            }
            else if(savedOP === "/"){
                result = savedCN / currentNum ;
                displayResult()
                savedCN = result;
                currentNum= 0;
                savedOP = op;
                c ++;

            }
        }
        
        

    }
}


function clickHandler(e){
    
    if(currentNum == "Error 404"){
        currentNum = 0;
        var savedCN = 0;
        var savedOP = "";
        screen()
        return;
    }

    let b = this.id;
    let numba = parseInt(b);

    if(isNaN(numba)){
        isButton(b)
        
        
    }
    else if(currentNum == 0 ){
        currentNum = numba;
        c = 0;
        screen();

    }
    else if(currentNum > 0) {
        currentNum = currentNum*10 + numba;
        c = 0;
        screen();
    }
   
}







let bttns = document.querySelectorAll('.asd');
bttns.forEach(bttns => bttns.addEventListener('click',(clickHandler)))

