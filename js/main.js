//Preloader
window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}

document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.navigation-menu').classList.toggle('show');
});