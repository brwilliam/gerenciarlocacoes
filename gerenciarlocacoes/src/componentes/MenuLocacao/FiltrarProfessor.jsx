import React, { useState } from 'react';

const FiltrarProfessor = () => {
  const [filtros, setFiltros] = useState({
    matricula: '',
    nome: '',
    disciplina: '',
  });

  const [professoresFiltrados, setProfessoresFiltrados] = useState([]);
  const [professorSelecionado, setProfessorSelecionado] = useState(null);
  const [semPesquisa, setSemPesquisa] = useState(false);
  const [semResultados, setSemResultados] = useState(false);

  const disciplinas = ['Português', 'Matemática', 'História', 'Geografia', 'Ciências', 'Artes', 'Inglês'];

  const professores = [
    { matricula: '98765', nome: 'Professor 1', disciplina: 'Matemática' },
    { matricula: '54321', nome: 'Professor 2', disciplina: 'Português' },
  ];

  const handleFiltroChange = (event) => {
    const { name, value } = event.target;
    setFiltros((prevFiltros) => ({ ...prevFiltros, [name]: value }));
  };

  const handlePesquisarClick = () => {
    const hasFiltros = Object.values(filtros).some((filtro) => filtro.trim() !== '');

    if (!hasFiltros) {
      setSemPesquisa(true);
      setProfessoresFiltrados([]);
      setProfessorSelecionado(null);
      setSemResultados(false);
      return;
    }

    const professoresFiltrados = professores.filter((professor) => {
      return (
        professor.matricula.toString().includes(filtros.matricula) &&
        professor.nome.toLowerCase().includes(filtros.nome.toLowerCase()) &&
        professor.disciplina.toLowerCase().includes(filtros.disciplina.toLowerCase())
      );
    });

    setSemPesquisa(false);
    setProfessoresFiltrados(professoresFiltrados);
    setProfessorSelecionado(null);
    setSemResultados(professoresFiltrados.length === 0);
  };

  const handleSelecionarClick = (professor) => {
    setProfessorSelecionado((prevProfessorSelecionado) =>
      prevProfessorSelecionado === professor ? null : professor
    );
  };

  return (
    <div className="container mt-4">
      {!professorSelecionado && (
        <div className="row">
          <div className="col-md-4">
            <label>Matrícula:</label>
            <input type="text" className="form-control" name="matricula" value={filtros.matricula} onChange={handleFiltroChange} />
          </div>
          <div className="col-md-4">
            <label>Nome Completo:</label>
            <input type="text" className="form-control" name="nome" value={filtros.nome} onChange={handleFiltroChange} />
          </div>
          <div className="col-md-4">
            <label>Disciplina:</label>
            <select className="form-control" name="disciplina" value={filtros.disciplina} onChange={handleFiltroChange}>
              <option value="">Selecione...</option>
              {disciplinas.map((disciplina) => (
                <option key={disciplina} value={disciplina}>
                  {disciplina}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {!professorSelecionado && (
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

      {professoresFiltrados.length > 0 && (
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Nome Completo</th>
              <th>Disciplina</th>
              <th>Selecionar</th>
            </tr>
          </thead>
          <tbody>
            {professoresFiltrados.map((professor) => (
              <tr key={professor.matricula}>
                <td>{professor.matricula}</td>
                <td>{professor.nome}</td>
                <td>{professor.disciplina}</td>
                <td>
                  <button
                    className={`btn ${professorSelecionado === professor ? 'btn-success' : 'btn-primary'}`}
                    onClick={() => handleSelecionarClick(professor)}
                  >
                    {professorSelecionado === professor ? 'Selecionado' : 'Selecionar'}
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

export default FiltrarProfessor;
