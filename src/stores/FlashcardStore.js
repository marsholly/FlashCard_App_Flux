import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';

let _flashcardQuestions = null;

class FlashcardStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECIEVE_FLASHCARD_QUESTION':
          console.log('STORE RECEIVE FCQ !!!!', action.payload.questions);
          _flashcardQuestions = action.payload.questions;
          this.emit('CHANGE');
          break;

      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAllQuestions() {
    console.log('get all questions', _flashcardQuestions);
    return _flashcardQuestions;
  }
}

export default new FlashcardStore();
