// SelecionarLocador.js
import React, { useState } from 'react';
import FiltrarAluno from './FiltrarAluno';
import FiltrarProfessor from './FiltrarProfessor';

const SelecionarLocador = () => {
  const [selecao, setSelecao] = useState(null);

  const handleSelecionar = (opcao) => {
    setSelecao((prevSelecao) => (prevSelecao === opcao ? null : opcao));
  };

  return (
    <div>
      <div className="button-container">
        <button
          className={`btn ${selecao === 'aluno' ? 'btn-dark' : 'btn-light'}`}
          onClick={() => handleSelecionar('aluno')}
        >
          Aluno
        </button>
        <button
          className={`btn ${selecao === 'professor' ? 'btn-dark' : 'btn-light'}`}
          onClick={() => handleSelecionar('professor')}
        >
          Professor
        </button>
      </div>

      {selecao === 'aluno' && <FiltrarAluno selecionado={selecao === 'aluno'} />}
      {selecao === 'professor' && <FiltrarProfessor selecionado={selecao === 'professor'} />}
    </div>
  );
};

export default SelecionarLocador;
