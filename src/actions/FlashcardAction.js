import API from '../API';

const FlashcardAction = {
  getAllFlashcardQuestions() {
    API.getAllFlashcardQuestions()
  },
  createNewQuestion(flashcardQuestion) {
    API.createNewQuestion(flashcardQuestion)
  }

}

export default FlashcardAction;
