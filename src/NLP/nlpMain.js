
const { containerBootstrap } = require('@nlpjs/core');
const { Nlp } = require('@nlpjs/nlp');
const { LangKo } = require('@nlpjs/lang-ko');

let nlpMain = async (eventString) => {
  const container = await containerBootstrap();
  container.use(Nlp);
  container.use(LangKo);
  const nlp = container.get('nlp');
  nlp.settings.autoSave = false;
  nlp.addLanguage('ko');
  // Adds the utterances and intents for the NLP
  nlp.addDocument('ko', '잘 있어!', 'greetings.bye');
  nlp.addDocument('ko', '빠이 바이', 'greetings.bye');
  nlp.addDocument('ko', '다음에 또 보도록 하자', 'greetings.bye');
  nlp.addDocument('ko', '조심히 들어가', 'greetings.bye');
  nlp.addDocument('ko', '집에 갈 때가 되었어', 'greetings.bye');
  nlp.addDocument('ko', '하이하이', 'greetings.hello');
  nlp.addDocument('ko', '어 안녕', 'greetings.hello');
  nlp.addDocument('ko', '잘 지냈어?', 'greetings.hello');

  // Train also the NLG
  nlp.addAnswer('ko', 'greetings.bye', '또 보자구');
  nlp.addAnswer('ko', 'greetings.bye', '담에 봐');
  nlp.addAnswer('ko', 'greetings.hello', '방가방가');
  nlp.addAnswer('ko', 'greetings.hello', '안녕하세요');
  await nlp.train();
  const response = await nlp.process('ko', eventString);
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
