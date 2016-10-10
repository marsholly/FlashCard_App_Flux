import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';

let _flashcardQuestions = [];

class FlashcardStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECIEVE_FLASHCARD_QUESTION':
          _flashcardQuestions = action.payload.questions;
          this.emit('CHANGE');
          break;
        case 'NEXT_FLASHCARD_QUESTION':
          let { id } = action.payload;
          let newFlashcardQuestions = _flashcardQuestions.filter(f=>{
            return f.id !== id;
          });
          _flashcardQuestions = newFlashcardQuestions;
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
    return _flashcardQuestions;
  }
}

export default new FlashcardStore();
