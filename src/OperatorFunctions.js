export function handleCe (str){
    let str1 = str;
    console.log(str);
    let i = 0;
    for( i= str1.length - 1; i>0; i--){
        let ch = str1.charAt(i);
        console.log(ch);
        let divide = 	'\u{00F7}';
        if(ch === '-'|| ch==='+' || ch==='x'||ch===divide||ch==='%'){
           
           break;
        }
    }

    str1=str1.slice(0,i);
    console.log(str1);
    return str1;
}

export function handleBack (str){
    let str1 = str;
   

    str1=str1.slice(0,str1.length-1);
    
    return str1;
}

export function replaceLastOperator(str,operator){
    let lastChar = str.charAt(str.length -1);
    for(let i = 0; i<=9; i++){
        if(lastChar == 'i'){
            return str;
        }
    }
    let newStr = str;
    if(operator == '-' && lastChar=='('){
        
        return newStr+=operator;
    }
    else{
         newStr =  newStr.slice(0,newStr.length-1);
         return newStr+operator;
    }
    
}

export function handleBrackets(parenthesis,str){
    let strNew = str;
    
   if(parenthesis == true){ 
    let lastChar = strNew.charAt(strNew.length -1);
    console.log('this is from function'+" "+ str);
    for(let i = 0; i<=9; i++){
        if(lastChar == i){
            console.log('this is from if'+" "+ lastChar);

            strNew+=')';
            return strNew;
        }
    }
    return strNew;
}
    
   

    else{
        return strNew+='(';
    }
}