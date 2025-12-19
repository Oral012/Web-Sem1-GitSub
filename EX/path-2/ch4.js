function ch4(text, char){

    let count=0;
    for(let i=0; i< text.length;i++){
        if(text[i]== char) count++;
    }
    return count;
}