import React, { Component } from 'react';
import { Link } from 'react-router'
import FlashcardStore from '../stores/FlashcardStore';
import FlashcardAction from '../actions/FlashcardAction';

export default class PracticeNavbar extends Component {
  constructor() {
    super();
    this.state = {
      flashcard: FlashcardStore.getAllQuestions(),
    }
    this._onChange = this._onChange.bind(this);
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

  render() {
    let { flashcard } = this.state;
    let categoryLink;
    if(flashcard.length){
      let categoryArr = [];
      flashcard.forEach(f => {
        let category = f.category;
        if(!categoryArr.includes(category)){
          categoryArr.push(category);
        }
      })
      categoryLink = categoryArr.map((categoryName, index) => {
        return (<li key={index}><Link to={`/practices/categoryQuestion/${categoryName}`}>{categoryName}</Link></li>)
      });
    } else {
      categoryLink = <li></li>
    }

    return (
      <div className="container">
        <div className="row">
          <ol className="breadcrumb">
            <li><Link to='/practices/randomQuestion'>Random</Link></li>
            {categoryLink}
          </ol>
        </div>
        {this.props.children}
      </div>
    )
  }
};
