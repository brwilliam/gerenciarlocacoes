import CalendarioDevolucao from './CalendarioDevolucao';
import FiltrarLivro from './FiltrarLivro';
import './MenuLocacao.css';
import RegistrarLocacao from './RegistrarLocacao';
import SelecionarLocador from './SelecionarLocador';
import TabelaLocacao from './TabelaLocacao'


function MenuLocacao() {
    return ( 
        <div>
        <h1>Selecione o Livro</h1>
        <FiltrarLivro />
        <br/>
        <h2>Selecione o Locador</h2>
        <SelecionarLocador />
        <br />
        <CalendarioDevolucao />
        <RegistrarLocacao />
        <br />
        <TabelaLocacao />
        </div>
    );
}

export default MenuLocacao;