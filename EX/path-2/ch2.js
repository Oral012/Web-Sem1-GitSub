function ch2(array){
    let size = array.length;
    for(let i=0; i< size/2; i++){
        let temp= array[i];
        array[i]=array[size-1-i];
        array[size-1-i]= temp;
    }

    return array;
}