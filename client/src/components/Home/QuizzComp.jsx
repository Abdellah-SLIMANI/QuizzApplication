import React, { Component } from 'react'
import "./Home.css"


class QuizzComp extends Component{
    constructor(props){
        super(props);
        this.state= {
            isActive : true,
            quizzName : 'Tp Assembleur',
        }
    }

    render(){
        const date = Date();
        return(
            <div className="QuizzContainer">
                <h1>{this.state.quizzName}</h1>
                <hr/>
                <button>Pass Quizz</button>
                <hr/>
                <footer>{date}</footer>
            </div>
        )
    }
}

export default QuizzComp