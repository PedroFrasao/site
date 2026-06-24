// Menu Responsivo Hamburger - Mundo Animal
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    if (!nav || !header) return;

    // Cria o botão hamburger
    const btn = document.createElement('button');
    btn.classList.add('btn-hamburger');
    btn.setAttribute('aria-label', 'Abrir menu');
    btn.innerHTML = '<span></span><span></span><span></span>';
    header.appendChild(btn);

    // Alterna menu ao clicar
    btn.addEventListener('click', function () {
        nav.classList.toggle('nav-aberto');
        btn.classList.toggle('ativo');
        const aberto = nav.classList.contains('nav-aberto');
        btn.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });

    // Fecha ao clicar em um link
    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('nav-aberto');
            btn.classList.remove('ativo');
            btn.setAttribute('aria-label', 'Abrir menu');
        });
    });
});
