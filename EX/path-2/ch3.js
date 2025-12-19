function ch3(array){

    let sum=0;
    let size = array.length;
    for(let i=0; i<size; i++){
        sum+= array[i];
    }
    
    return sum/size;
}