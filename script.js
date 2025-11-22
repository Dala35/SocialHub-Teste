let publicacoes = [];
let eventos = [];

document.addEventListener('DOMContentLoaded', () => {
  const formPublicacao = document.getElementById('form-publicacao');
  const formEvento = document.getElementById('form-evento');

  formPublicacao.addEventListener('submit', (e) => {
    e.preventDefault();
    const conteudo = document.getElementById('conteudo').value;
    publicacoes.push(conteudo);
    document.getElementById('lista-publicacoes').innerHTML = '';
    publicacoes.forEach((publicacao) => {
      const p = document.createElement('p');
      p.textContent = publicacao;
      document.getElementById('lista-publicacoes').appendChild(p);
    });
    document.getElementById('conteudo').value = '';
  });

  formEvento.addEventListener('submit', (e) => {
    e.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const localizacao = document.getElementById('localizacao').value;
    eventos.push({ titulo, descricao, data, hora, localizacao });
    document.getElementById('lista-eventos').innerHTML = '';
    eventos.forEach((evento) => {
      const p = document.createElement('p');
      p.textContent = `${evento.titulo} - ${evento.data} ${evento.hora} - ${evento.localizacao}`;
      document.getElementById('lista-eventos').appendChild(p);
    });
    document.getElementById('titulo').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('data').value = '';
    document.getElementById('hora').value = '';
    document.getElementById('localizacao').value = '';
  });
});
