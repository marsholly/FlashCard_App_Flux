import axios from 'axios';
import ServerAction from './actions/ServerAction';

const API = {
  getAllFlashcardQuestions() {
    axios.get('/practice')
      .then(res => res.data)
      .then(ServerAction.recieveFlashcardQuestion)
      .catch(console.error)
  },
  createNewQuestion(flashcardQuestion) {
    axios.post('/practice', flashcardQuestion)
      .then(res => res.data )
      .then(ServerAction.recieveFlashcardQuestion)
      .catch(console.error)
  },

}

export default API;
