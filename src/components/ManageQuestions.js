import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ManageQuestions extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h3>Manage Questions Data</h3>
            <img src="https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/512/add-notes.png" width="25" height="30"/>
            <Link to='/manage/addQuestion'>Add New Question</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <img src="http://www.freeiconspng.com/uploads/edit-notes-icons-21.png" width="25" height="30"/>
            <Link to='/manage/editQuestion'>Edit Question</Link>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
};
