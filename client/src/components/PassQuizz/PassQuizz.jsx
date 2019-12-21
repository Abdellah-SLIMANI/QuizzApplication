import React from 'react'
import PassQuizzNav from './PassQuizzNav'
import './PassQuizz.css'

class PassQuizz extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <PassQuizzNav />
            </div>
        )
    }
}

export default PassQuizz