import API from '../API';

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

}

export default FlashcardAction;
