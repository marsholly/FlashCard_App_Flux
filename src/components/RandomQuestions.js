import React, { Component } from 'react';
import FlashcardStore from '../stores/FlashcardStore';
import FlashcardAction from '../actions/FlashcardAction';
import FlipCard from 'react-flipcard';
import {FlatButton} from 'material-ui';


export default class RandomQuestions extends Component {
  constructor() {
    super();
    this.state = {
      flashcard: FlashcardStore.getAllQuestions()
    }
    this._onChange = this._onChange.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.reviewQuestion = this.reviewQuestion.bind(this);
  }

  componentDidMount() {
    FlashcardAction.getAllFlashcardQuestions();
    FlashcardStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    FlashcardStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({flashcard: FlashcardStore.getAllQuestions()});
  }

  nextQuestion(id) {
    FlashcardAction.nextFlashcardQuestion(id);
  }

  reviewQuestion() {
    FlashcardAction.getAllFlashcardQuestions();
  }

  render() {
    let { flashcard } = this.state;
    if(flashcard.length){
      let len = flashcard.length;
      let index = Math.floor(Math.random() * len);
      let card = flashcard[index];
      let selections = card.alternativeAnswers;
      let selection = selections.split(',').map((s, index) => {
        return (<div key={index}><h3>({index+1}):  {s}</h3></div>)
      })
      return (
        <div className="container">
          <div className="row">
            <div className="flashcardcenter">
              <FlipCard>
                <div className="flashcard">
                  <div><h2>{(card.category).toUpperCase()}</h2></div>
                  <hr />
                  <div><h3>Q: {card.question}</h3></div>
                  <hr />
                  {selection}
                </div>
                <div className="flashcard" >
                  <h2>Answer: </h2>
                  <hr />
                  <h1>{card.correctAnswer}</h1>
                </div>
              </FlipCard>
            </div>
          </div>
          <div className="row">
            <div className="text-center">
              <FlatButton label="NEXT" primary={true} onClick={()=>this.nextQuestion(card.id)}/>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="text-center">
          <h1>NO QUESTION! OR PRESS BUTTON GO TO REVIEW</h1>
          <FlatButton label="REVIEW" secondary={true} onClick={this.reviewQuestion}/>
        </div>
      )
    }
  }
};
