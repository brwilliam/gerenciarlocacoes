import React from 'react';

const TabelaLocacao = ({ dadosLocacao, onDevolverLivro, onExtenderDevolucao }) => {
  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th colSpan="4">Livro</th>
          <th colSpan="3">Locador</th>
          <th>Prazo</th>
          <th>Selecionar</th>
        </tr>
        <tr>
          <th>Código do Livro</th>
          <th>Título</th>
          <th>Autor</th>
          <th>Editora</th>
          <th>RA/Matricula</th>
          <th>Nome</th>
          <th>Disciplina/Série</th>
          <th>Devolução</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {dadosLocacao.map((locacao) => (
          <tr key={locacao.codigoLivro}>
            <td>{locacao.codigoLivro}</td>
            <td>{locacao.tituloLivro}</td>
            <td>{locacao.autorLivro}</td>
            <td>{locacao.editoraLivro}</td>
            <td>{locacao.raMatricula}</td>
            <td>{locacao.nomeLocador}</td>
            <td>{locacao.disciplinaSerieLocador}</td>
            <td>{locacao.dataDevolucao}</td>
            <td>
              <div className="btn-group" role="group">
                <button className="btn btn-primary" onClick={() => onDevolverLivro(locacao)}>
                  Devolver
                </button>
                <button className="btn btn-warning" onClick={() => onExtenderDevolucao(locacao)}>
                  Extender
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Exemplo de uso
const App = () => {
  const dadosLocacao = [
    {
      codigoLivro: 'L001',
      tituloLivro: 'Livro 1',
      autorLivro: 'Autor 1',
      editoraLivro: 'Editora 1',
      raMatricula: '123456',
      nomeLocador: 'Locador 1',
      disciplinaSerieLocador: '2º Série',
      dataDevolucao: '01/01/2024',
    },
    {
      codigoLivro: 'L002',
      tituloLivro: 'Livro 2',
      autorLivro: 'Autor 2',
      editoraLivro: 'Editora 2',
      raMatricula: '789012',
      nomeLocador: 'Locador 2',
      disciplinaSerieLocador: '3º Série',
      dataDevolucao: '02/01/2024',
    },
    {
      codigoLivro: 'L003',
      tituloLivro: 'Livro 3',
      autorLivro: 'Autor 3',
      editoraLivro: 'Editora 3',
      raMatricula: '345678',
      nomeLocador: 'Locador 3',
      disciplinaSerieLocador: 'História',
      dataDevolucao: '03/01/2024',
    },
    {
      codigoLivro: 'L004',
      tituloLivro: 'Livro 4',
      autorLivro: 'Autor 4',
      editoraLivro: 'Editora 4',
      raMatricula: '901234',
      nomeLocador: 'Locador 4',
      disciplinaSerieLocador: 'Ciências',
      dataDevolucao: '04/01/2024',
    },
    // Adicione mais dados conforme necessário
  ];

  const handleDevolverLivro = (locacao) => {
    //lógica para devolver o livro
    console.log('Livro devolvido:', locacao);
  };

  const handleExtenderDevolucao = (locacao) => {
    // lógica para estender a data de devolução
    console.log('Devolução extendida para o livro:', locacao);
  };

  return (
    <div>
      <h1>Registros</h1>
      <TabelaLocacao
        dadosLocacao={dadosLocacao}
        onDevolverLivro={handleDevolverLivro}
        onExtenderDevolucao={handleExtenderDevolucao}
      />
    </div>
  );
};

export default App;
