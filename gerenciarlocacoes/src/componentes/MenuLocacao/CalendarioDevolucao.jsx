import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarioDevolucao = () => {
  const [dataInicio, setDataInicio] = useState(new Date());
  const [dataDevolucao, setDataDevolucao] = useState(null);

  const handleDataInicioChange = (date) => {
    setDataInicio(date);
  };

  const handleDataDevolucaoChange = (date) => {
    setDataDevolucao(date);
  };

  return (
    <div className="calendario-container">
      <div className="calendario-item">
        <label>Data de Início:</label>
        <DatePicker
          selected={dataInicio}
          onChange={handleDataInicioChange}
          dateFormat="dd/MM/yyyy"
          todayButton="Hoje"
          readOnly
        />
      </div>
      <div className="calendario-item">
        <label>Data de Devolução:</label>
        <DatePicker
          selected={dataDevolucao}
          onChange={handleDataDevolucaoChange}
          dateFormat="dd/MM/yyyy"
          minDate={dataInicio}
        />
      </div>
    </div>
  );
};

export default CalendarioDevolucao;
