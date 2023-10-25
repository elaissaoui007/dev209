let salary ;  
let numberAbscences ;
function raise (salary){

    return salary + salary * 0.1;
    

}
function anualSalary(salary,numberAbscences){
    let output =salary * 12+raise(salary);
    if(numberAbscences>10){
        output -= 1000;

    }


    return output;

}

