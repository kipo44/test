function CapitalizeFirstLetter(str){
    return str[0].toUpperCase() + str.toLowerCase().slice(1);
}


function sayHello(name){
    if(name == 'Mark'){
        console.log('Hi, Mark!');
    }
    else{   
        console.log(`Hello, ${name}!`);
    }
}


function filterStrings(arr, len){
    let temp = arr.filter(function(word){
        return word.length < len;
    });
    return temp;
}

