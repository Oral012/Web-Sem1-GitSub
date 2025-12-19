function ch6(vote){

    let a=0,b=0,c=0;
    for(let i=0; i< text.length;i++){
        if(vote[i]=='A') a++;
        else if (vote[i]=='B') b++;
        else if (vote[i]=='C') c++;
    }
    if(a>b && a>c) console.log("A is the winner");
    else if (b>a && b>c) console.log("B is the winner");
    else if (c>a && c>b) console.log("C is the winner");
    else if (a == b || b ==c) {
        if (a == b)console.log("Both A abd B are the winner");
        else if (a==c) console.log("Both A abd C are the winner");
        else console.log("Both B abd C are the winner");
    }
    else console.log("There is not vote yet");
}