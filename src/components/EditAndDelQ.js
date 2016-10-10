import React, { Component } from 'react';
import FlashcardStore from '../stores/FlashcardStore';
import FlashcardAction from '../actions/FlashcardAction';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';

export default class EditAndDelQ extends Component {
  constructor() {
    super();
    this.state = {
      flashcard: FlashcardStore.getAllQuestions()
    }
    this._onChange = this._onChange.bind(this);
    this.removeQuestion = this.removeQuestion.bind(this);

  }

  componentWillMount() {
    FlashcardAction.getAllFlashcardQuestions();
    FlashcardStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    FlashcardStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({flashcard: FlashcardStore.getAllQuestions()});
  }

  removeQuestion(id) {
    FlashcardAction.removeFlashcardQuestion(id);
    console.log('HELLO HOLLY', FlashcardStore.getAllQuestions());
  }

  render() {
    let { flashcard } = this.state;
    console.log('flashcard:', flashcard)
    let tableData = [];
    if(flashcard) {
      tableData = flashcard;
      return (
        <div className="container">
          <div className="row">
            <div className="text-center">
              <h4>Update Questions</h4>
              <Table height='300px'>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn tooltip="Category">Category</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Question">Question</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Alternative Answers">Alternative Answers</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Correct Answer">Correct Answer</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Edit">Edit</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Delete">Delete</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody showRowHover={true} stripedRows={true} >
                  { tableData.map(row => (
                    <TableRow key={row.id} >
                      <TableRowColumn>{row.category}</TableRowColumn>
                      <TableRowColumn>{row.question}</TableRowColumn>
                      <TableRowColumn>{row.alternativeAnswers}</TableRowColumn>
                      <TableRowColumn>{row.correctAnswer}</TableRowColumn>
                      <TableRowColumn>
                        <button className="btn btn-xs btn-success">
                          <i className="glyphicon glyphicon-pencil"></i>
                        </button>
                      </TableRowColumn>
                      <TableRowColumn>
                        <button className="btn btn-xs btn-danger" onClick={()=>this.removeQuestion(row.id)}>
                          <i className="glyphicon glyphicon-trash"></i>
                        </button>
                      </TableRowColumn>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
};
