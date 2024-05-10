/* eslint-disable react/prop-types */
import './Card.css'
import React from "react"
import data from "../data/Data"

export default function Card() {

  const [quizData, setQuizData]= React.useState(data)

  const quizElements = quizData.map(quiz => {

    function handleClick(id){
      setQuizData(prevAnswer=>{
        return prevAnswer.map(answer => {
          return id === answer.id?  {...answer, show: !answer.show} : answer
        })
      })
    }

    return(
      <div className="card" key= {quiz.id}>
        <div className="question-card" onClick={()=> handleClick(quiz.id)}>
          <h2 className='question'> {quiz.question}</h2>
          <div className={`sign ${quiz.show? "dark-purple":"pink"}`}>{quiz.show? "-":"+"}</div>
        </div>
        <p className={`answer ${quiz.show? "":"hide"}`}> {quiz.answer}</p>
      </div>
    )
  })

  return(
    <>

     {quizElements}



    </>
  )
}
