document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
        type: 'carousel',
        autoplay: 5000, // Tempo de auto-avanço em milissegundos (opcional)
        hoverpause: true, // Pausa a reprodução automática quando o cursor está sobre o carrossel (opcional)
        animationDuration: 800, // Duração da animação em milissegundos (opcional)
        animationTimingFunc: 'ease-in-out' // Função de temporização da animação (opcional)
    }).mount();
});
