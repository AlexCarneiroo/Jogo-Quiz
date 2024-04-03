import { useState , useEffect } from 'react'
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
    }
  ]

  
  const listQuiz = PerguntasERespostas;
  let ques='';
  let ress = PerguntasERespostas[0].res


  const teste = (e:any)=>{
    let res = e.target.innerText
    ques = res
  }

  const finalizar = ()=>{
    if(ques === ress){
      console.log('Resposta CERTA')
    }else{
      console.log('Resposta INCORRETA')
    }

    console.log(ques , ress)
  }


  return (
    <C.Container>
      <h1>Tema do Quiz <span style={{ textTransform: 'uppercase' }}>"Programação"</span></h1>

      <C.AreaPergunta>
        {listQuiz.map((item, index) => (
          <div key={index}>
            {item.pergunta}
          </div>
        ))}
      </C.AreaPergunta>

      <C.AreaQues>
        {listQuiz.map((item, index) => (
          <C.Ol key={index}>
            <C.Li onClick={(e)=>teste(e)}>{item.questoes.quesA}</C.Li>
            <C.Li onClick={(e)=>teste(e)}>{item.questoes.quesB}</C.Li>
            <C.Li onClick={(e)=>teste(e)}>{item.questoes.quesC}</C.Li>
            <C.Li onClick={(e)=>teste(e)}>{item.questoes.quesD}</C.Li>
          </C.Ol>
        ))}
      </C.AreaQues>

      <button onClick={finalizar}>Comfirmar</button>
    </C.Container>
  )

}

export default App
