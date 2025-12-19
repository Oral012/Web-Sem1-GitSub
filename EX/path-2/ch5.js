function ch5(text){

    let count=1;
    for(let i=0; i< text.length;i++){
        if(text[i]== ' ') count++;
    }
    
    return count;
}