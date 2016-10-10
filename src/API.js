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
  removeFlashcardQuestion(id) {
    axios.delete(`/practice/${id}`)
      .then(res => res.data)
      .then(ServerAction.recieveFlashcardQuestion)
      .catch(console.error)
  },
  updateFlashcardQuestion(newQuestion) {
    let id = newQuestion.id;
    axios.put(`/practice/${id}`, newQuestion)
      .then(res => res.data)
      .then(ServerAction.recieveFlashcardQuestion)
      .catch(console.error)
  },
}

export default API;
