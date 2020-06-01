
const { containerBootstrap } = require('@nlpjs/core');
const { Nlp } = require('@nlpjs/nlp');
const { LangEn } = require('@nlpjs/lang-en-min');

let nlpMain = async (eventString) => {
  const container = await containerBootstrap();
  container.use(Nlp);
  container.use(LangEn);
  const nlp = container.get('nlp');
  nlp.settings.autoSave = false;
  nlp.addLanguage('en');
  // Adds the utterances and intents for the NLP
  nlp.addDocument('en', 'goodbye for now', 'greetings.bye');
  nlp.addDocument('en', 'bye bye take care', 'greetings.bye');
  nlp.addDocument('en', 'okay see you later', 'greetings.bye');
  nlp.addDocument('en', 'bye for now', 'greetings.bye');
  nlp.addDocument('en', 'i must go', 'greetings.bye');
  nlp.addDocument('en', 'hello', 'greetings.hello');
  nlp.addDocument('en', 'hi', 'greetings.hello');
  nlp.addDocument('en', 'howdy', 'greetings.hello');

  // Train also the NLG
  nlp.addAnswer('en', 'greetings.bye', 'Till next time');
  nlp.addAnswer('en', 'greetings.bye', 'see you soon!');
  nlp.addAnswer('en', 'greetings.hello', 'Hey there!');
  nlp.addAnswer('en', 'greetings.hello', 'Greetings!');
  await nlp.train();
  const response = await nlp.process('en', eventString);
  console.log(response)
  alert(response.answer);
}

export default nlpMain

// const { dockStart } = require('@nlpjs/basic');
// // var fs = require("fs")
// // import { dockStart } from '@nlpjs/basic';
//
//
// async function nlptest() {
//   const dock = await dockStart({ use: ['Basic']});
//   const nlp = dock.get('nlp');
//   nlp.addLanguage('en');
//   // Adds the utterances and intents for the NLP
//   nlp.addDocument('en', 'goodbye for now', 'greetings.bye');
//   nlp.addDocument('en', 'bye bye take care', 'greetings.bye');
//   nlp.addDocument('en', 'okay see you later', 'greetings.bye');
//   nlp.addDocument('en', 'bye for now', 'greetings.bye');
//   nlp.addDocument('en', 'i must go', 'greetings.bye');
//   nlp.addDocument('en', 'hello', 'greetings.hello');
//   nlp.addDocument('en', 'hi', 'greetings.hello');
//   nlp.addDocument('en', 'howdy', 'greetings.hello');
//
//   // Train also the NLG
//   nlp.addAnswer('en', 'greetings.bye', 'Till next time');
//   nlp.addAnswer('en', 'greetings.bye', 'see you soon!');
//   nlp.addAnswer('en', 'greetings.hello', 'Hey there!');
//   nlp.addAnswer('en', 'greetings.hello', 'Greetings!');  await nlp.train();
//   const response = await nlp.process('en', 'I should go now');
//   alert(response);
// }
//
// const somefunct = () => {
//   nlptest()
// }


// const { NlpManager } = require('node-nlp');
//
// const manager = new NlpManager({ languages: ['en'] });
// // Adds the utterances and intents for the NLP
// manager.addDocument('en', 'goodbye for now', 'greetings.bye');
// manager.addDocument('en', 'bye bye take care', 'greetings.bye');
// manager.addDocument('en', 'okay see you later', 'greetings.bye');
// manager.addDocument('en', 'bye for now', 'greetings.bye');
// manager.addDocument('en', 'i must go', 'greetings.bye');
// manager.addDocument('en', 'hello', 'greetings.hello');
// manager.addDocument('en', 'hi', 'greetings.hello');
// manager.addDocument('en', 'howdy', 'greetings.hello');
//
// // Train also the NLG
// manager.addAnswer('en', 'greetings.bye', 'Till next time');
// manager.addAnswer('en', 'greetings.bye', 'see you soon!');
// manager.addAnswer('en', 'greetings.hello', 'Hey there!');
// manager.addAnswer('en', 'greetings.hello', 'Greetings!');
//
// // Train and save the model.
// async function somefunct() {
//     await manager.train();
//     manager.save();
//     const response = await manager.process('en', 'I should go now');
//     console.log(response);
// }
//
// export default somefunct
