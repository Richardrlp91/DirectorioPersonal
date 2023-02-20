var selector=document.querySelector('#ShowText');
var divcont=document.querySelector('.divcont');;
var divAgo=document.querySelector('.agora');
var divSelene=document.querySelector('.selene');
var divSelene=document.querySelector('.selene');
var divRemedy=document.querySelector('.remedy');
var divCorreo=document.querySelector('.correo');
var divSo=document.querySelector('.so');
var divGesper=document.querySelector('.figesper');
var divCall=document.querySelector('.llamadas');
var inputUser=document.querySelector('.loginU');
var inputRef=document.querySelector('.loginR');
var inputInc=document.querySelector('.inc');
var btnEnviar=document.querySelector('#enviar');



var textUser=fbtnEnviar(inputUser);
var textRef=fbtnEnviar(inputRef);
var textInc=fbtnEnviar(inputInc);



selector.addEventListener('click',()=>{
    selector.addEventListener('change',function(){showTexts();});
})

function ocultar(element){
    element.classList.add('d-none');
}

function fbtnEnviar(p1){
    p1.addEventListener('keyup',(e)=>{
        let i=p1.value;
        let x=this;
        x=i;
        console.log(x);
        return x;

    });

}
