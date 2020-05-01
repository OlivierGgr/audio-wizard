import React, { useState, useContext } from 'react'
import questions from '../../data/questions'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import UserContext from '../../UserContext'

import { FaLongArrowAltRight } from 'react-icons/fa'
import './Main.css'

export default function Main() {
    const [total, setTotal] = useState(questions.length)
    const [questionNb, setQuestionNb] = useState(0)
    const {user, addName, addSurname, addGender} = useContext(UserContext)

    // GESTION DES DONNES FOURNIES PAR L'UTILISATEUR
    const handleTextInput = (e) => {
        e.target.placeholder === "Nom" ? addSurname(e.target.value) : addName(e.target.value) 
    }
    const handleSelectInput = (e) => {
        addGender(e.target.value)
    }

    const handleClick = () => {
        setQuestionNb(questionNb + 1)
    }

    // DISPLAY DYNAMIQUE DES QUESTIONS PROVENANT D'UN DICTIONNAIRE DE QUESTIONS
    function questionFactory(data, number) {
        return data[number].question
    }
    // DISPLAY DYNAMIQUE DES REPONSES PROVENANT D'UN DICTIONNAIRE DE QUESTIONS
    function answerFactory(data, number) {
        return data[number].answers.map(answer => {
            return data[number].type === "text" ? 
            <input key={answer} type={data[number].type} placeholder={answer} className={data[number].type} onChange={e => handleTextInput(e)}/>
            :
            <input key={answer} type={data[number].type} placeholder={answer} value={answer} className={data[number].type} onClick={e => handleSelectInput(e)} />
        })
    }

    // DISPLAY DYNAMIQUE DE LA DERNIERE VUE
    function greetingsFactory(data){
        return data.gender === "Homme" ? <h2>Monsieur {data.surname} {data.name}</h2> : <h2>Madame {data.surname} {data.name}</h2>
    }

    return (
        <div className="main">
            <Container>
                {/* S'IL RESTE DES QUESTIONS A POSER, LES VUES AVEC QUESTIONS SERONT AFFICHEES */}
            {total > questionNb ?
                <Card className="text-center">
                    <Card.Header>{questionFactory(questions, questionNb)}</Card.Header>
                    <Card.Body>
                        <div className="formAnswer">
                            {answerFactory(questions, questionNb)}
                        </div>
                        <button onClick={() => handleClick()}><FaLongArrowAltRight style={{fill: "white", height: "2.2em", width: "3.2em"}}/></button>
                    </Card.Body>
                </Card>
                    :
                    // SI TOUTES LES QUESTIONS ONT ÉTÉES REPONDUES ON PASSE A LA DERNIERE VUE
                <Card className="text-center">
                    <Card.Body>
                        <div className="formAnswer">
                            {greetingsFactory(user)}
                        </div>
                    </Card.Body>
                </Card>
                }
            </Container>
        </div>
    )
}