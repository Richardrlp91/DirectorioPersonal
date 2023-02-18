let theme=document.getElementById("theme");
var select_theme=document.getElementById("select_theme");
select_theme.addEventListener('change',function(){
    var option__select_theme=this.options[select_theme.selectedIndex];
    if(option__select_theme.value=='dark'){
        theme.setAttribute('href','styles/theme-dark.css');
    }else{
        theme.setAttribute('href','styles/theme-light.css');

    };

//     console.log(pro);
//     // switch(color_theme.value){
//     //     case "light":
//     //         alert("Es light");
//     //         theme.removeAttribute[href];
//     //         theme.setAttribute[href="dark"];
//     //         break;
//     //     case color_theme.value=='dark':
//     //         alert("es dark");
//     //         theme.removeAttribute[href];
//     //         theme.setAttribute[href="light"];
//     //         break;
//     //     }
});
