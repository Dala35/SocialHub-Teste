$(document).ready(function() {
  // Lidar com a submissão do formulário de publicação
  $('#form-publicacao').submit(function(event) {
    event.preventDefault();
    var conteudo = $('#conteudo').val();
    var fotos = $('#fotos')[0].files;
    var formData = new FormData();
    formData.append('conteudo', conteudo);
    for (var i = 0; i < fotos.length; i++) {
      formData.append('fotos', fotos[i]);
    }
    $.ajax({
      type: 'POST',
      url: '/publicacao',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data) {
        console.log(data);
        $('#lista-publicacoes').append('<p>' + data.conteudo + '</p>');
      }
    });
  });

  // Lidar com a submissão do formulário de evento
  $('#form-evento').submit(function(event) {
    event.preventDefault();
    var titulo = $('#titulo').val();
    var descricao = $('#descricao').val();
    var data = $('#data').val();
    var hora = $('#hora').val();
    var localizacao = $('#localizacao').val();
    $.ajax({
      type: 'POST',
      url: '/evento',
      data: {
        titulo: titulo,
        descricao: descricao,
        data: data,
        hora: hora,
        localizacao: localizacao
      },
      success: function(data) {
        console.log(data);
        $('#lista-eventos').append('<p>' + data.titulo + '</p>');
      }
    });
  });

  // Lidar com a submissão do formulário de grupo
  $('#form-grupo').submit(function(event) {
    event.preventDefault();
    var nome = $('#nome-grupo').val();
    var descricao = $('#descricao-grupo').val();
    $.ajax({
      type: 'POST',
      url: '/grupo',
      data: {
        nome: nome,
        descricao: descricao
      },
      success: function(data) {
        console.log(data);
        $('#lista-grupos').append('<p>' + data.nome + '</p>');
      }
    });
  });
});
// Seu script JavaScript aqui
console.log('Olá, mundo!');
