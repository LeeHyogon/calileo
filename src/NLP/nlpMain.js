import corpusCalileo from "./corpusCalileo";
import stringDivider from './stringDivider.js'
// import executor from './stringDivider.js'
import _ from "lodash";


const { containerBootstrap } = require("@nlpjs/core");
const { Nlp } = require("@nlpjs/nlp");
const { LangEn } = require("@nlpjs/lang-en");
const { LangKo } = require("@nlpjs/lang-ko");
// const { requestfs } = require('@nlpjs/request-rn');

let nlpConfig = async () => {
  const container = await containerBootstrap();
  container.use(Nlp);
  container.use(LangKo);
  const nlp = container.get("nlp");
  nlp.settings.autoSave = false;
  nlp.addLanguage("ko");
  return nlp;
};

let nlpTrain = async (NLP, corpus) => {
  _.map(corpus.Document, input =>
    NLP.addDocument(input.lang, input.inputString, input.group)
  );
  _.map(corpus.Answer, output =>
    NLP.addAnswer(output.lang, output.group, output.outputString)
  );
  await NLP.train();
  return NLP;
};

let nlpProcess = () => {};

export let nlpMain = async (NLP, eventString) => {
  const response = await NLP.process("ko", eventString);
  console.log(response);
  if (response.answer == "일정 문장") {
    stringDivider(eventString);
    // executor().then(
    //     () => console.log('finished!'),
    //     (error) => console.error('Error Occurred!', error)
    // );

  }
  else if (response.answer == "일정 요약") {
    alert("요약" + eventString);
  }
};

export const trainedNlp = nlpConfig().then(res => nlpTrain(res, corpusCalileo));
// .then(res => {
// console.log(res);
//   return res.process("ko", "하이보이루");
// })
// .then(res => console.log(res));
// console.log(nlp)
// let trainedNlp = nlpTrain( nlp )

// export { trainedNlp, nlpMain };

// let nlpMainOld = async (eventString) => {
//   const container = await containerBootstrap();
//   // container.register('fs', requestfs)
//   container.use(Nlp);
//   container.use(LangKo);
//   // container.use(LangEn)
//   const nlp = container.get('nlp');
//   nlp.settings.autoSave = false;
//   // await NLP.addCorpus('./corpus-en.json')
//   nlp.addLanguage('ko');
//   // Adds the utterances and intents for the NLP
//   nlp.addDocument('ko', '잘 있어!', 'greetings.bye');
//   nlp.addDocument('ko', '빠이 바이', 'greetings.bye');
//   NLP.addDocument('ko', '다음에 또 보도록 하자', 'greetings.bye');
//   NLP.addDocument('ko', '조심히 들어가', 'greetings.bye');
//   NLP.addDocument('ko', '집에 갈 때가 되었어', 'greetings.bye');
//   NLP.addDocument('ko', '하이하이', 'greetings.hello');
//   NLP.addDocument('ko', '어 안녕', 'greetings.hello');
//   NLP.addDocument('ko', '잘 지냈어?', 'greetings.hello');
//
//   // Train also the NLG
//   nlp.addAnswer('ko', 'greetings.bye', '또 보자구');
//   nlp.addAnswer('ko', 'greetings.bye', '담에 봐');
//   NLP.addAnswer('ko', 'greetings.hello', '방가방가');
//   NLP.addAnswer('ko', 'greetings.hello', '안녕하세요');
//   await nlp.train();
//   const response = await nlp.process('ko', eventString);
//   let a = JSON.stringify(nlp)
//   let b = JSON.parse(a)
//   console.log(b)
//   // const response2 = await b.process('ko', eventString)
//   // console.log(JSON.stringify(nlp))
//   console.log(nlp)
//   console.log(response)
//   alert(response.answer);
// }

// const { dockStart } = require('@nlpjs/basic');
// // var fs = require("fs")
// // import { dockStart } from '@nlpjs/basic';
//
//
// async function nlptest() {
//   const dock = await dockStart({ use: ['Basic']});
//   const nlp = dock.get('nlp');
//   NLP.addLanguage('en');
//   // Adds the utterances and intents for the NLP
//   NLP.addDocument('en', 'goodbye for now', 'greetings.bye');
//   NLP.addDocument('en', 'bye bye take care', 'greetings.bye');
//   NLP.addDocument('en', 'okay see you later', 'greetings.bye');
//   NLP.addDocument('en', 'bye for now', 'greetings.bye');
//   NLP.addDocument('en', 'i must go', 'greetings.bye');
//   NLP.addDocument('en', 'hello', 'greetings.hello');
//   NLP.addDocument('en', 'hi', 'greetings.hello');
//   NLP.addDocument('en', 'howdy', 'greetings.hello');
//
//   // Train also the NLG
//   NLP.addAnswer('en', 'greetings.bye', 'Till next time');
//   NLP.addAnswer('en', 'greetings.bye', 'see you soon!');
//   NLP.addAnswer('en', 'greetings.hello', 'Hey there!');
//   NLP.addAnswer('en', 'greetings.hello', 'Greetings!');  await nlp.train();
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
