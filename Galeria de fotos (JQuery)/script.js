//Forma como acessamos algum elemento atraves do jQuery $('nome do elemento html').evento(function)

$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()

        const enderecoDaNovaImagem = $('#endereço-imagem-link').val()
        const novoItem = $("<li style='display: none;'></li>")
        $(`<img src="${enderecoDaNovaImagem}">`).appendTo(novoItem)
        $(`
            <div class="overlay-image-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
            </div>
        `).appendTo(novoItem).val()
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#endereço-imagem-link').val("")
    })
})