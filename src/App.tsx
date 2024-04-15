import { useState } from 'react'
import * as C from './styles'

function App() {

  let PerguntasERespostas = [
    {
      pergunta: 'Qual das seguintes opções é uma linguagem de programação amplamente utilizada para desenvolvimento web?',
      questoes: {
        quesA: 'HTML',
        quesB: 'CSS',
        quesC: 'JavaScript',
        quesD: 'Microsoft Word'
      },
      res: 'JavaScript'
    },
    {
      pergunta: 'O que o termo "POO" significa em programação?',
      questoes: {
        quesA: 'Programação Orientada a Objetos',
        quesB: 'Processo Organizacional Operacional',
        quesC: 'Programação Ofuscada Obrigatória',
        quesD: 'Processo Operacional Óptimo'
      },
      res: 'Programação Orientada a Objetos'
    },
    {
      pergunta: 'Qual dessas opções NÃO é um sistema de controle de versão?',
      questoes: {
        quesA: 'Git',
        quesB: 'Subversion',
        quesC: 'Mercurial',
        quesD: 'Photoshop'
      },
      res: 'Photoshop'
    },
    {
      pergunta: 'Em que linguagem de programação o framework React é baseado?',
      questoes: {
        quesA: 'Python',
        quesB: 'JavaScript',
        quesC: 'Ruby',
        quesD: 'C#'
      },
      res: 'JavaScript'
    },
    {
      pergunta: 'Qual é o propósito principal de uma função em programação?',
      questoes: {
        quesA: 'Armazenar dados',
        quesB: 'Criar uma sequência de comandos',
        quesC: 'Realizar uma tarefa específica',
        quesD: 'Modificar o sistema operacional'
      },
      res: 'Realizar uma tarefa específica'
    },
    {
      pergunta: 'O que significa a sigla "SQL"?',
      questoes: {
        quesA: 'Sequential Query Language',
        quesB: 'Structured Question Language',
        quesC: 'Structured Query Language',
        quesD: 'Standalone Query Language'
      },
      res: 'Structured Query Language'
    },
    {
      pergunta: 'Qual destes é um princípio fundamental da programação funcional?',
      questoes: {
        quesA: 'Herança',
        quesB: 'Polimorfismo',
        quesC: 'Imutabilidade',
        quesD: 'Encapsulamento'
      },
      res: 'Imutabilidade'
    },
    {
      pergunta: 'Em qual linguagem de programação o Django é um framework?',
      questoes: {
        quesA: 'PHP',
        quesB: 'JavaScript',
        quesC: 'Python',
        quesD: 'Ruby'
      },
      res: 'Python'
    },
    {
      pergunta: 'O que é um "loop" em programação?',
      questoes: {
        quesA: 'Uma função recursiva',
        quesB: 'Uma estrutura que repete um bloco de código',
        quesC: 'Uma variável especial',
        quesD: 'Um tipo de exceção'
      },
      res: 'Uma estrutura que repete um bloco de código'
    },
    {
      pergunta: 'Qual das seguintes opções é um editor de código amplamente utilizado?',
      questoes: {
        quesA: 'Microsoft Word',
        quesB: 'Notepad',
        quesC: 'Visual Studio Code',
        quesD: 'Paint'
      },
      res: 'Visual Studio Code'
    }
  ];

  //ARMAZENAR QUANTO QUE A PESSOA ERROU E A CERTOU
  const [qtdErros, setQtdErros] = useState(0)
  const [qtdAcertos, setQtdAcertos] = useState(0)
  // MENSAGEM FINAL
  const [final , setFinal] = useState(false)
  // MENSAGEM SE ERROU OU ACERTOU
  const [resCerta, setResCerta] = useState(false)
  const [resErrada, setResErrada] = useState(false)
  // STATE PARA PEGAR O NUMERO DO QUIZ DA VEIS
  const [nuAleatorio, setNuAleatorio] = useState(0)

  // LETS PARA ARMAZENAR PERGUNTAS QUESTÃO E RESPOSTA
  let pergun = PerguntasERespostas[nuAleatorio].pergunta
  let questoes = PerguntasERespostas[nuAleatorio].questoes
  let ques = '';
  let ress = PerguntasERespostas[nuAleatorio].res


  //FUNÇÃO PARA IR PARA PROXIMA PERGUNTA
  const geradorNumerosUnicos = ()=> {
    if(nuAleatorio >= 9){
      setFinal(true)
      setResCerta(false)
      setResErrada(false)
      return
    }
    setNuAleatorio(nuAleatorio + 1)
    setResCerta(false)
    setResErrada(false)
  }



  //PEGAR RESPOSTA SELECIONADA
  const selecionarResposta = (e: any) =>ques = e.target.innerText;

  // VERIFICA SE A RESPOSTA ESTA VAZIA E VERIFICA SE ESTA CERTA OU NÃO
  const finalizar = () => {
    if (ques === '') return
    if (ques === ress) {
      setResCerta(true)
      setQtdAcertos(qtdAcertos + 1)
    } else {
      setResErrada(true)
      setQtdErros(qtdErros + 1)
    }
  }



  return (
    <C.Container>
      <h1 style={{ margin: '10px auto' }}>Tema do Quiz <span style={{ textTransform: 'uppercase' }}>"Programação"</span></h1>

      <C.AreaPergunta>
        <h3>{pergun}</h3>
      </C.AreaPergunta>

      <C.AreaQues>
        <C.Ol>
          <C.Li onClick={(e) => selecionarResposta(e)}>{questoes.quesA}</C.Li>
          <C.Li onClick={(e) => selecionarResposta(e)}>{questoes.quesB}</C.Li>
          <C.Li onClick={(e) => selecionarResposta(e)}>{questoes.quesC}</C.Li>
          <C.Li onClick={(e) => selecionarResposta(e)}>{questoes.quesD}</C.Li>
        </C.Ol>
      </C.AreaQues>

      <button onClick={finalizar}>Comfirmar</button>

      {final && (
        <C.AreaDeResposta>
          <C.TextFinal>Quiz Finalizado!</C.TextFinal>
        </C.AreaDeResposta>
      )}

      {resCerta && (
        <C.AreaDeResposta>
          <C.TextRespostaCerta>Resposta certa Parabens!!!</C.TextRespostaCerta>
          <button onClick={geradorNumerosUnicos}>Proxima Pergunta</button>
        </C.AreaDeResposta>
      )}

      {resErrada && (
        <C.AreaDeResposta>
          <C.TextRespostaErrada>Resposta Errada Mais Sorte da Proxima!!!</C.TextRespostaErrada>
          <button onClick={geradorNumerosUnicos}>Proxima Pergunta</button>
        </C.AreaDeResposta>
      )}

      <br />
      <div>
        <C.TextRespostaCerta>Voce Acerto: {qtdAcertos}</C.TextRespostaCerta>
        <br />
        <C.TextRespostaErrada>Voce Errou: {qtdErros}</C.TextRespostaErrada>
      </div>
    </C.Container>
  )

  

}

export default App
