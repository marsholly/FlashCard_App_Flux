import React, { Component } from 'react';
import FlashcardStore from '../stores/FlashcardStore';
import FlashcardAction from '../actions/FlashcardAction';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, Dialog, FlatButton, TextField} from 'material-ui';

export default class EditAndDelQ extends Component {
  constructor() {
    super();
    this.state = {
      flashcard: FlashcardStore.getAllQuestions(),
      open: false,
      editCategory: '',
      editQuestion: '',
      editAlternativeAnswers: '',
      editCorrectAnswer: '',
      editId:''
    }
    this._onChange = this._onChange.bind(this);
    this.removeQuestion = this.removeQuestion.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.handleOpen =  this.handleOpen.bind(this);
    this.handleClose =  this.handleClose.bind(this);
    this.saveUpdateQuestion =  this.saveUpdateQuestion.bind(this);
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
  }

  updateQuestion(row) {
    this.handleOpen();
    this.setState({
      editCategory: row.category,
      editQuestion: row.question,
      editAlternativeAnswers: row.alternativeAnswers,
      editCorrectAnswer: row.correctAnswer,
      editId: row.id
    });
  }

  handleOpen() {
   this.setState({ open: true });
 }

 handleClose() {
   this.setState({ open: false });
 }

 saveUpdateQuestion() {
   let { editCategory, editQuestion, editAlternativeAnswers, editCorrectAnswer, editId } = this.state;
   let newQuestion = {
     category: editCategory,
     question: editQuestion,
     alternativeAnswers: editAlternativeAnswers,
     correctAnswer: editCorrectAnswer,
     id: editId
   }
   FlashcardAction.updateFlashcardQuestion(newQuestion);
   this.setState({editId: ''});
   this.handleClose();
 }

  render() {
    let { flashcard } = this.state;
    let tableData = [];
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Save"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.saveUpdateQuestion}
      />,
    ];

    if(flashcard.length) {
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
                      <TableRowColumn className="colSize">{row.category}</TableRowColumn>
                      <TableRowColumn className="colSize">{row.question}</TableRowColumn>
                      <TableRowColumn className="colSize">{row.alternativeAnswers}</TableRowColumn>
                      <TableRowColumn className="colSize">{row.correctAnswer}</TableRowColumn>
                      <TableRowColumn>
                        <button className="btn btn-xs btn-success" onClick={()=>this.updateQuestion(row)}>
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
          <Dialog
            title="Update Flashcard"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            autoScrollBodyContent={true}
          >
          <TextField floatingLabelText="Category" value={this.state.editCategory} onChange={e => {this.setState({editCategory: e.target.value})}}/><br />
          <TextField floatingLabelText="Question" fullWidth={true} value={this.state.editQuestion} onChange={e => {this.setState({editQuestion: e.target.value})}}/><br />
          <TextField
            floatingLabelText="Alternative Answers"
            multiLine={true}
            rows={2}
            rowsMax={4}
            fullWidth={true}
            value={this.state.editAlternativeAnswers}
            onChange={e => {this.setState({editAlternativeAnswers: e.target.value})}}
          /><br />
          <TextField floatingLabelText="Correct Answer" fullWidth={true} value={this.state.editCorrectAnswer} onChange={e => {this.setState({editCorrectAnswer: e.target.value})}}/>
        </Dialog>
        </div>
      )
    } else {
      return <div></div>
    }
  }
};
