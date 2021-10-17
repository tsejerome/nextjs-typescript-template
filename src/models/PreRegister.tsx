import { firestore } from '../services/firebase';

const collection_web_questions = 'web_questions';
const collection_web_answers = 'web_answers';

const addToWaitlist = (email: string, name: string) => {
  return new Promise((resolve, reject) => {
    const postData = {
      last_updated: new Date(),
      created_at: new Date(),
    };
    firestore
      .collection('pre-register')
      .add(postData)
      .then(() => {
        resolve('success');
      })
      .catch((err) => {
        console.error(err);
        reject('error:unknown');
      });
  });
};

export { addToWaitlist };
