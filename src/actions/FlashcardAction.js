import API from '../API';

const FlashcardAction = {
  getAllFlashcardQuestions() {
    console.log('FLASHCARDACTIONS JS !!!!!');
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
