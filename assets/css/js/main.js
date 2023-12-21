{
let name ="Anar";
let surname="Babazade";
let student=false
let result= `Adi : ${name} - Soyadi: ${surname} - telebedir: ${student ==true ?"beli" :"xeyr"}`;
console.log(result);
}


{
let name=prompt("gmail unvaninizi qeyd edin");
let passwords=prompt("sifrenizi daxil edin");
function registration(name,passwords){
    let userName="babazadeanar94@gmail.com";
    let userPasswords="babazade1997";
    name===userName&& passwords===userPasswords ? alert("SUCCES") :alert("WRONG");
}
registration(name,passwords);
console.log(name,passwords)
}



{
    function getPi(){
        return 3.14;
    }
    function circle(r){
        return getPi()*r** 2;
    }  
   console.log( circle(4));
}
{
    const getPi=()=>{
        return 3.14;
    }
    const circle=(r)=>{
        return getPi()*r**2;
    }
    console.log(circle(5));
}


{
let elements=(a,b)=>{
    let result=a+b
    return result
}
console.log(elements(4,3));


}
{
    let a=5
    let b= "5"
    let result=a*b
    isNaN (result) ? alert("xahis olunur reqem daxil edin") :alert(result)
    console.log(result);
}
