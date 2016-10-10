import API from '../API';
import AppDispatcher from '../AppDispatcher';

const FlashcardAction = {
  getAllFlashcardQuestions() {
    API.getAllFlashcardQuestions()
  },
  createNewQuestion(flashcardQuestion) {
    API.createNewQuestion(flashcardQuestion)
  },
  removeFlashcardQuestion(id) {
    API.removeFlashcardQuestion(id)
  },
  updateFlashcardQuestion(newQuestion) {
    API.updateFlashcardQuestion(newQuestion)
  },
  nextFlashcardQuestion(id) {
    AppDispatcher.dispatch({
      type: 'NEXT_FLASHCARD_QUESTION',
      payload: { id }
    });
  }

}

export default FlashcardAction;
