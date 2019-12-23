import React from 'react'
import './PassQuizz.css'

class PassQuizzNav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            quizz : []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/quizzs')
            .then(res => res.json())
            .then(data => this.setState({quizz : data}))
    }

    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li><button>Submit</button></li>
                        <li><h1>Welcome to QuizzApp</h1></li>
                        <li><h2>*Timer*</h2></li>
                    </ul>
                    </nav>
                    <div className="quizzContainer">
                    {this.state.quizz.map((quiz) => {
                            return (
                            <div className="questionContainer" key={quiz.id}>
                                <h3>{quiz.question}</h3>
                                <input type="checkbox"/> {quiz.answer1}
                                <br/>
                                <input type="checkbox"/> {quiz.answer2}
                                <br/>
                                <input type="checkbox"/> {quiz.answer3}
                                <br/>
                                <input type="checkbox"/> {quiz.answer4}
                                <br/>
                                <hr/>
                            </div>
                            )
                        })}
                    </div>                
            </div>
        )
    }
}

export default PassQuizzNav