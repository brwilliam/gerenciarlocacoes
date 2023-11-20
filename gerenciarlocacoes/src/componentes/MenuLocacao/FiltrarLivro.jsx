import React, { useState } from 'react';

const FiltrarLivro = () => {
  const [filtros, setFiltros] = useState({
    codigo: '',
    titulo: '',
    autor: '',
    editora: '',
    colecao: '',
    ano: '',
  });

  const [livrosFiltrados, setLivrosFiltrados] = useState([]);
  const [livroSelecionado, setLivroSelecionado] = useState(null);
  const [semPesquisa, setSemPesquisa] = useState(false);
  const [semResultados, setSemResultados] = useState(false);

  const livros = [
    { codigo: 1, titulo: 'Livro 1', autor: 'Autor 1', editora: 'Editora A', colecao: 'Colecao X', ano: 2020 },
    { codigo: 2, titulo: 'Livro 2', autor: 'Autor 2', editora: 'Editora B', colecao: 'Colecao Y', ano: 2021 },

  ];

  const handleFiltroChange = (event) => {
    const { name, value } = event.target;
    setFiltros((prevFiltros) => ({ ...prevFiltros, [name]: value }));
  };

  const handlePesquisarClick = () => {
    const hasFiltros = Object.values(filtros).some((filtro) => filtro.trim() !== '');

    if (!hasFiltros) {
      setSemPesquisa(true);
      setLivrosFiltrados([]);
      setLivroSelecionado(null);
      setSemResultados(false);
      return;
    }

    const livrosFiltrados = livros.filter((livro) => {
      return (
        livro.codigo.toString().includes(filtros.codigo) &&
        livro.titulo.toLowerCase().includes(filtros.titulo.toLowerCase()) &&
        livro.autor.toLowerCase().includes(filtros.autor.toLowerCase()) &&
        livro.editora.toLowerCase().includes(filtros.editora.toLowerCase()) &&
        livro.colecao.toLowerCase().includes(filtros.colecao.toLowerCase()) &&
        livro.ano.toString().includes(filtros.ano)
      );
    });

    setSemPesquisa(false);
    setLivrosFiltrados(livrosFiltrados);
    setLivroSelecionado(null);
    setSemResultados(livrosFiltrados.length === 0);
  };

  const handleSelecionarClick = (livro) => {
    setLivroSelecionado((prevLivroSelecionado) => (prevLivroSelecionado === livro ? null : livro));
  };

  return (
    <div className="container mt-4">
      {!livroSelecionado && (
        <>
          <div className="row">
            <div className="col-md-4">
              <label>Código:</label>
              <input type="text" className="form-control" name="codigo" value={filtros.codigo} onChange={handleFiltroChange} />
            </div>
            <div className="col-md-4">
              <label>Título:</label>
              <input type="text" className="form-control" name="titulo" value={filtros.titulo} onChange={handleFiltroChange} />
            </div>
            <div className="col-md-4">
              <label>Autor:</label>
              <input type="text" className="form-control" name="autor" value={filtros.autor} onChange={handleFiltroChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label>Editora:</label>
              <input type="text" className="form-control" name="editora" value={filtros.editora} onChange={handleFiltroChange} />
            </div>
            <div className="col-md-4">
              <label>Coleção:</label>
              <input type="text" className="form-control" name="colecao" value={filtros.colecao} onChange={handleFiltroChange} />
            </div>
            <div className="col-md-4">
              <label>Ano:</label>
              <input type="text" className="form-control" name="ano" value={filtros.ano} onChange={handleFiltroChange} />
            </div>
          </div>
          <button className="btn btn-primary mt-2" onClick={handlePesquisarClick}>
            Pesquisar
          </button>
        </>
      )}

      {semPesquisa && (
        <div className="alert alert-warning mt-2" role="alert">
          Nenhuma pesquisa realizada. Preencha pelo menos um campo para realizar a pesquisa.
        </div>
      )}

      {semResultados && !semPesquisa && (
        <div className="alert alert-info mt-2" role="alert">
          Nenhum resultado encontrado para os filtros informados.
        </div>
      )}

      {livrosFiltrados.length > 0 && (
        <table className={`table mt-4 ${livroSelecionado ? 'hidden' : ''}`}>
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Editora</th>
              <th>Coleção</th>
              <th>Ano</th>
              <th>Selecionar</th>
            </tr>
          </thead>
          <tbody>
            {livrosFiltrados.map((livro) => (
              <tr key={livro.codigo}>
                <td>{livro.codigo}</td>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>{livro.editora}</td>
                <td>{livro.colecao}</td>
                <td>{livro.ano}</td>
                <td>
                  <button
                    className={`btn ${livroSelecionado === livro ? 'btn-success' : 'btn-primary'}`}
                    onClick={() => handleSelecionarClick(livro)}
                  >
                    {livroSelecionado === livro ? 'Selecionado' : 'Selecionar'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
};

export default FiltrarLivro;
