import Card from '../Card/'

import './style.css'

const ExperienciaDeTrabalho = (props) => {

    return (

        <section id='secaoExpDeTrab' className={props.corPadrao ? 'modo-escuro-trabalho' : 'modo-claro-trabalho'}>
            <div id='container-texto' className={props.corPadrao ? 'container-texto-modo-escuro' : 'container-texto-modo-claro'}>
                <h2>Experiências De Trabalho</h2>
                <p className='paragrafos'>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>
            </div>

            <div className='container-cards limite-area'>
                <Card
                    corPadrao={props.corPadrao}
                    mes='JUNHO 2012 - 2016'
                    titulo='Web Designer'
                    subtitulo='Pied Piper StartUp.' informacao='Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores' />

                <Card
                    corPadrao={props.corPadrao}
                    mes='AGOSTO 2016 - 2019'
                    titulo='Product Designer'
                    subtitulo='E Corp.'
                    informacao='Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra' />

                <Card
                    corPadrao={props.corPadrao}
                    mes='FEVEREIRO 2019 - 2021'
                    titulo='Digital Consulting'
                    subtitulo='Arasaka Inc.' informacao='Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução' />
            </div>
        </section>
    )
}

export default ExperienciaDeTrabalho;