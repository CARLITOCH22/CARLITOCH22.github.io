// Aquí puedes agregar funcionalidades JavaScript si las necesitas,
// por ejemplo, para mejorar la interacción del formulario de comentarios
// (sin funcionalidad de backend, solo se podría manipular el DOM).

document.addEventListener('DOMContentLoaded', function() {
    const formularioComentario = document.getElementById('formulario-comentario');
    const listaDeComentarios = document.getElementById('lista-de-comentarios');
    const textareaComentario = formularioComentario.querySelector('textarea');

    formularioComentario.addEventListener('submit', function(event) {
        event.preventDefault();
        const comentarioTexto = textareaComentario.value.trim();
        if (comentarioTexto) {
            const nuevoComentario = document.createElement('p');
            nuevoComentario.textContent = comentarioTexto;
            listaDeComentarios.appendChild(nuevoComentario);
            textareaComentario.value = ''; // Limpiar el textarea
            if (listaDeComentarios.querySelector('p:first-child') && listaDeComentarios.querySelector('p:first-child').textContent.includes('Aún no hay comentarios')) {
                listaDeComentarios.removeChild(listaDeComentarios.querySelector('p:first-child'));
            }
        } else {
            alert('Por favor, introduce un comentario.');
        }
    });
});
