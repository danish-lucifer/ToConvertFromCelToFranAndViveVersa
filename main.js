function fun1(){
    str=document.getElementById("inp1").value;
    console.log(str,'str');
    str=Number(str);
    str1=document.getElementById("degree").value;
    str2="";
    if(str1=='Fahrenheit'){
        str2=(str*(9/5)+32);
        console.log(str2,'str2');
        str=str+ ' C';
        str2=str2+ ' F';
    }
    if(str1=='Celcius'){
        str2=((str-32)*(5/9));
        console.log(str2,'str22');
        str=str+' F';
        str2=str2+ ' C';
    }
    document.getElementById("inp1").value=str;
    document.getElementById('inp2').value=str2;
}