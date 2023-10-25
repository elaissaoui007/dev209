let salary = 25000  
function raise (salary){

    return salary + salary * 0.1;
    

}
function anualSalary(salary){

    return salary * 12+raise(salary);
    
}