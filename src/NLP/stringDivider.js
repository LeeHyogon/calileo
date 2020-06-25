// const {KMR, KKMA} = require('koalanlp/API');
// const {initialize} = require('koalanlp/Util');
// const {Tagger, Parser} = require('koalanlp/proc');
//
// export default async function executor(){
//     await initialize({packages: {KMR: '2.0.4', KKMA: '2.0.4'}, verbose: true});
//
//     let tagger = new Tagger(KMR);
//     let tagged = await tagger("안녕하세요. 눈이 오는 설날 아침입니다.");
//     for(const sent of tagged) {
//         console.log(sent.toString());
//     }
//
//     let parser = new Parser(KKMA);
//     let parsed = await parser("안녕하세요. 눈이 오는 설날 아침입니다.");
//     for(const sent of parsed){
//         console.log(sent.toString());
//         for(const dep of sent.dependencies){
//             console.log(dep.toString());
//         }
//     }
// }

export default function stringDivider (eventString){
  // let phraseArr = eventString.split(' ')
  // alert(phraseArr)
  //let si = eventString.search(/시/)
  //alert(eventString[si-1])
  let rule = /.(?=요일)/; //수, 목, 금 etc추출
  let time = /[0-9]+시/;
  var ww = []
  var date = []
  ww = eventString.split(' ');
  for(var i =0; i < ww.length; i++){
    if(rule.test(ww[i]))
      date.push(rule.exec(ww[i]));
    else(time.test(ww[i]))
      date.push(time.exec(ww[i]));
  }
    alert(date);
}
