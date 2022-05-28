let input_dec = document.querySelector(".dec"), 
input_hex = document.querySelector(".hex"),
input_oct = document.querySelector(".oct"),
input_bin = document.querySelector(".bin");
let  value="";

// main
input_dec.addEventListener("keyup", (even)=>{
   
    ellow_char(input_dec,even.keyCode, 96,105, even.key);
    if(parseInt(value)){
    input_hex.value = parseInt(value,10).toString(16);
    input_bin.value = parseInt(value,10).toString(2);
    input_oct.value = parseInt(value,10).toString(8);
}else{
    input_hex.value = input_oct.value =  input_bin.value ="";
}
   
})
input_oct.addEventListener("keyup", (even)=>{
   
    ellow_char(input_oct,even.keyCode, 96,103, even.key);
    if(parseInt(value)){
    input_hex.value = parseInt(value,8).toString(16);
    input_bin.value = parseInt(value,8).toString(2);
    input_dec.value = parseInt(value,8).toString(10);
}else{
    input_hex.value = input_dec.value =  input_bin.value ="";
}
   
})


input_bin.addEventListener("keyup", (even)=>{
    ellow_char(input_bin,even.keyCode, 96,97, even.key);
    if(parseInt(value)){
    input_hex.value = parseInt(value,2).toString(16);
    input_oct.value = parseInt(value,2).toString(8);
    input_dec.value = parseInt(value,2).toString(10);
}else{
    input_hex.value = input_dec.value =  input_oct.value ="";
}
   
})
input_hex.addEventListener("keyup", (even)=>{
    
        if( (even.keyCode < 96 || even.keyCode > 105) ){
            if(even.keyCode == 8 ||even.keyCode == 13){ value = input_hex.value; return true}
            //si c'est la touche backspace: on efface le contenu de l'élement
            
            if((even.keyCode < 65 || even.keyCode > 70)){
                if(even.keyCode == 8 ||even.keyCode == 13){ value = input_hex.value; return true}
                for( i = 0; i < input_hex.value.length -1; i++){
                    value += input_hex.value[i];
                }
                input_hex.value = value;
            }else{
                value += even.key;
            } 
    
        }else{
            value += even.key;   
    }
    if(parseInt(value,16)){
    input_bin.value = parseInt(value,16).toString(2);
    input_oct.value = parseInt(value,16).toString(8);
    input_dec.value = parseInt(value,16).toString(10);
}else{
    input_bin.value = input_dec.value =  input_oct.value ="";
}
   
})





/**
 * la fonction qui autorise l'écriture d'une caractère dans un champ
 */
let ellow_char = (element, keyCode, min_keyCode, max_keyCode, char)=>{
    
    if(keyCode < min_keyCode || keyCode > max_keyCode ){
        if(keyCode == 8 ||keyCode == 13){ value = element.value; return true}
        //si c'est la touche backspace: on efface le contenu de l'élement
        value = "";
        for( i = 0; i < element.value.length -1; i++){
            value += element.value[i];
        }
        element.value = value;

    }else{
        value += char;
    }
    /*if(keyCode == 8){
        element.value =""; value ="";  
    }*/
   
}