// import { DisplayProcessor, SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';
// import SuiteInfo = jasmine.SuiteInfo;
// class CustomProcessor extends DisplayProcessor {
//   public displayJasmineStarted(info: SuiteInfo, log: string): string {
//     return `${log}`
//   }
// }
// jasmine.getEnv().clearReporters()
// jasmine.getEnv().addReporter(
//   new SpecReporter({
//     spec: {
//       displayStacktrace: StacktraceOption.NONE
//     },
//     customProcessors: [CustomProcessor]
//   }) as CustomReporter
// )


var jasmineReporters = require('jasmine-reporters');
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

var junitReporter = new jasmineReporters.NUnitXmlReporter({
  savePath: './',
  consolidateAll: false,
});

var textReporter = new SpecReporter({  // add jasmine-spec-reporter
  spec: {
    displayDuration: true,
  }
});

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(junitReporter);
jasmine.getEnv().addReporter(textReporter);
