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
  const [final, setFinal] = useState(false)
  // MENSAGEM SE ERROU OU ACERTOU
  const [resCerta, setResCerta] = useState(false)
  const [resErrada, setResErrada] = useState(false)
  // STATE PARA PEGAR O NUMERO DO QUIZ DA VEIS
  const [nuAleatorio, setNuAleatorio] = useState(0)

  const [selectedAnswer, setSelectedAnswer] = useState(null);


  // LETS PARA ARMAZENAR PERGUNTAS QUESTÃO E RESPOSTA
  let pergun = PerguntasERespostas[nuAleatorio].pergunta
  let questoes = PerguntasERespostas[nuAleatorio].questoes
  //let ques = selectedAnswer;
  let ress = PerguntasERespostas[nuAleatorio].res


  //FUNÇÃO PARA IR PARA PROXIMA PERGUNTA
  const geradorNumerosUnicos = () => {
    if (nuAleatorio >= 9) {
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
  const selecionarResposta = (e:any) => {
    const answer = e.target.innerText;
    setSelectedAnswer(answer);
};



  // VERIFICA SE A RESPOSTA ESTA VAZIA E VERIFICA SE ESTA CERTA OU NÃO
  const finalizar = () => {
    if (selectedAnswer === '') return; // Certifique-se de que `selectedAnswer` está inicializado corretamente como ''
    if (selectedAnswer === ress) {
        setResCerta(true);
        setQtdAcertos(qtdAcertos + 1);
    } else {
        setResErrada(true);
        setQtdErros(qtdErros + 1);
    }
    setSelectedAnswer('' || null); // Reset após a checagem
};










  return (
    <C.Container>
      <C.TemaDoQuiz>Tema do Quiz "Programação"</C.TemaDoQuiz>

      <C.ContainerMain>

        <C.AreaPergunta>
          <h3>{pergun}</h3>
        </C.AreaPergunta>

        <C.AreaQues>
          <C.Ol>
            <C.Li onClick={(e) => selecionarResposta(e)} style={{ color: selectedAnswer === questoes.quesA ? '#889C9B' : '#F2E3D5' }}>{questoes.quesA}</C.Li>
            <C.Li onClick={(e) => selecionarResposta(e)} style={{ color: selectedAnswer === questoes.quesB ? '#889C9B' : '#F2E3D5' }}>{questoes.quesB}</C.Li>
            <C.Li onClick={(e) => selecionarResposta(e)} style={{ color: selectedAnswer === questoes.quesC ? '#889C9B' : '#F2E3D5' }}>{questoes.quesC}</C.Li>
            <C.Li onClick={(e) => selecionarResposta(e)} style={{ color: selectedAnswer === questoes.quesD ? '#889C9B' : '#F2E3D5' }}>{questoes.quesD}</C.Li>
          </C.Ol>
        </C.AreaQues>
      </C.ContainerMain>


      <C.Btns onClick={finalizar}>Comfirmar</C.Btns>

      {final && (
        <C.AreaDeResposta>
          <C.TextFinal>Quiz Finalizado!</C.TextFinal>
        </C.AreaDeResposta>
      )}

      {resCerta && (
        <C.AreaDeResposta>
          <C.TextRespostaCerta>Resposta certa, parabéns!!!</C.TextRespostaCerta>
          <C.Btns onClick={geradorNumerosUnicos}>Proxima Pergunta</C.Btns>
        </C.AreaDeResposta>
      )}

      {resErrada && (
        <C.AreaDeResposta>
          <C.TextRespostaErrada>Mais sorte na próxima!!!</C.TextRespostaErrada>
          <C.Btns onClick={geradorNumerosUnicos}>Proxima Pergunta</C.Btns>
        </C.AreaDeResposta>
      )}

      <br />
      <div>
        <C.TextRespostaCerta>Você Acertou: {qtdAcertos}</C.TextRespostaCerta>
        <br />
        <C.TextRespostaErrada>Você Errou: {qtdErros}</C.TextRespostaErrada>
      </div>
    </C.Container>
  )



}

export default App
