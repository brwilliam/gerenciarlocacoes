import React, { useState } from 'react';

const FiltrarAluno = () => {
  const [filtros, setFiltros] = useState({
    ra: '',
    nome: '',
    serie: '',
  });

  const [alunosFiltrados, setAlunosFiltrados] = useState([]);
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);
  const [semPesquisa, setSemPesquisa] = useState(false);
  const [semResultados, setSemResultados] = useState(false);

  const alunos = [
    { ra: '123456', nome: 'Aluno 1', serie: '4º Série' },
    { ra: '789012', nome: 'Aluno 2', serie: '3º Série' },
  
  ];

  const handleFiltroChange = (event) => {
    const { name, value } = event.target;
    setFiltros((prevFiltros) => ({ ...prevFiltros, [name]: value }));
  };

  const handlePesquisarClick = () => {
    const hasFiltros = Object.values(filtros).some((filtro) => filtro.trim() !== '');

    if (!hasFiltros) {
      setSemPesquisa(true);
      setAlunosFiltrados([]);
      setAlunoSelecionado(null);
      setSemResultados(false);
      return;
    }

    const alunosFiltrados = alunos.filter((aluno) => {
      return (
        aluno.ra.toString().includes(filtros.ra) &&
        aluno.nome.toLowerCase().includes(filtros.nome.toLowerCase()) &&
        aluno.serie.toLowerCase().includes(filtros.serie.toLowerCase())
      );
    });

    setSemPesquisa(false);
    setAlunosFiltrados(alunosFiltrados);
    setAlunoSelecionado(null);
    setSemResultados(alunosFiltrados.length === 0);
  };

  const handleSelecionarClick = (aluno) => {
    setAlunoSelecionado((prevAlunoSelecionado) => (prevAlunoSelecionado === aluno ? null : aluno));
    setAlunosFiltrados((prevAlunosFiltrados) =>
      prevAlunosFiltrados.includes(aluno) ? prevAlunosFiltrados.filter((a) => a === aluno) : [...prevAlunosFiltrados, aluno]
    );
  };

  return (
    <div className="container mt-4">
      {!alunoSelecionado && (
        <div className="row">
          <div className="col-md-4">
            <label>RA:</label>
            <input type="text" className="form-control" name="ra" value={filtros.ra} onChange={handleFiltroChange} />
          </div>
          <div className="col-md-4">
            <label>Nome Completo:</label>
            <input type="text" className="form-control" name="nome" value={filtros.nome} onChange={handleFiltroChange} />
          </div>
          <div className="col-md-4">
            <label>Série:</label>
            <input type="text" className="form-control" name="serie" value={filtros.serie} onChange={handleFiltroChange} />
          </div>
        </div>
      )}

      {!alunoSelecionado && (
        <button className="btn btn-primary mt-2" onClick={handlePesquisarClick}>
          Pesquisar
        </button>
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

      {alunosFiltrados.length > 0 && (
        <table className="table mt-4">
          <thead>
            <tr>
              <th>RA</th>
              <th>Nome Completo</th>
              <th>Série</th>
              <th>Selecionar</th>
            </tr>
          </thead>
          <tbody>
            {alunosFiltrados.map((aluno) => (
              <tr key={aluno.ra}>
                <td>{aluno.ra}</td>
                <td>{aluno.nome}</td>
                <td>{aluno.serie}</td>
                <td>
                  <button
                    className={`btn ${alunoSelecionado === aluno ? 'btn-success' : 'btn-primary'}`}
                    onClick={() => handleSelecionarClick(aluno)}
                  >
                    {alunoSelecionado === aluno ? 'Selecionado' : 'Selecionar'}
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

export default FiltrarAluno;
