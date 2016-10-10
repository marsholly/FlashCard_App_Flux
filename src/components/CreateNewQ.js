import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import FlashcardAction from '../actions/FlashcardAction';
import uuid from 'uuid';

const style = {
  margin: 12,
};

export default class CreateNewQ extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      question: '',
      alternativeAnswers: '',
      correctAnswer: ''
    };
    this.createNewQuestion = this.createNewQuestion.bind(this);
  }

  createNewQuestion() {
    let { category, question, alternativeAnswers, correctAnswer } = this.state;
    let flashcardQuestion = {
      category,
      question,
      alternativeAnswers,
      correctAnswer,
      id: uuid()
    };
    FlashcardAction.createNewQuestion(flashcardQuestion);
    this.setState({
      category: '',
      question: '',
      alternativeAnswers: '',
      correctAnswer: ''
    });
  }

  render() {
    return (
      <div className="row">
        <div className="text-center">
          <h4>New Question</h4>
          <TextField
            floatingLabelText="Category"
            value={this.state.category}
            onChange={e => this.setState({category: e.target.value})}
          />
          <br />
          <TextField
            floatingLabelText="Question"
            fullWidth={true}
            value={this.state.question}
            onChange={e => this.setState({question: e.target.value})}
          />
          <br />
          <TextField
            hintText="Alternative Answers"
            fullWidth={true}
            multiLine={true}
            rows={2}
            rowsMax={4}
            value={this.state.alternativeAnswers}
            onChange={e => this.setState({alternativeAnswers: e.target.value})}
          />
          <br />
          <TextField
            floatingLabelText="Correct Answer"
            fullWidth={true}
            value={this.state.correctAnswer}
            onChange={e => this.setState({correctAnswer: e.target.value})}
          />
          <br />
          <RaisedButton label="ADD" primary={true} style={style} onClick={this.createNewQuestion}/>
        </div>
      </div>
    )
  }
};
