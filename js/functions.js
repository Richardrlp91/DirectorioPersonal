let theme=document.getElementById("theme");

/*CAMBIO DE DISEÑO TEMA*/
var select_theme=document.getElementById("select_theme");
select_theme.addEventListener('change',function(){
    var option__select_theme=this.options[select_theme.selectedIndex];
    if(option__select_theme.value=='dark'){
        theme.setAttribute('href','styles/theme-dark.css');
    }else{
        theme.setAttribute('href','styles/theme-light.css');

    };
});

/*CAMBIAR TEXTOS*/
function showTexts(){
    ocultar(divAgo);ocultar(divSelene);ocultar(divCall);ocultar(divRemedy);ocultar(divCorreo);ocultar(divSo);ocultar(divGesper);

    switch(selector.value){
    case 'pre': divcont.classList.remove('.d-none');break;
    case 'ago': divAgo.classList.remove('d-none');divAgo.innerHTML=text_agora;break;
    case 'sel': divSelene.classList.remove('d-none');divSelene.innerHTML=text_selene;break;
    case 'rem': divRemedy.classList.remove('d-none');divRemedy.innerHTML=text_remedy;break;
    case 'cor': divCorreo.classList.remove('d-none');divCorreo.innerHTML=text_correo;break;
    case 'sis': divSo.classList.remove('d-none');divSo.innerHTML=text_so;break;
    case 'fig': divGesper.classList.remove('d-none');divGesper.innerHTML=text_figesper;break;
    case 'call': divCall.classList.remove('d-none');divCall.innerHTML=text_llamadas;break;
    
    }
}

