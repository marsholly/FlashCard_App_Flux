import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';

const style = {
  margin: 12,
};

export default class CreateNewQ extends Component {
  render() {
    return (
      <div className="row">
        <div className="text-center">
          <h4>New Question</h4>
          <TextField hintText="Category" floatingLabelText="Category" />
          <br />
          <TextField hintText="Question" floatingLabelText="Question" fullWidth={true} />
          <br />
          <TextField
            hintText="Alternative Answers"
            fullWidth={true}
            multiLine={true}
            rows={2}
            rowsMax={4}
          />
          <br />
          <TextField hintText="Correct Answer" floatingLabelText="Correct Answer" fullWidth={true} />
          <br />
          <RaisedButton label="ADD" primary={true} style={style} />
        </div>
      </div>
    )
  }
};
