import AppDispatcher from '../AppDispatcher';

const ServerAction = {
  recieveFlashcardQuestion(questions) {
    AppDispatcher.dispatch({
      type: 'RECIEVE_FLASHCARD_QUESTION',
      payload: {questions}
    })
  },

}

export default ServerAction;
