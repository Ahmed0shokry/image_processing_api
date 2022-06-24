/* eslint-disable @typescript-eslint/no-var-requires */
//const jasmineReporters = require('jasmine-reporters')
//const SpecReporter = require('jasmine-spec-reporter').SpecReporter

const jasmineReporters = require('jasmine-reporters')
const SpecReporter = require('jasmine-spec-reporter').SpecReporter

const junitReporter = new jasmineReporters.NUnitXmlReporter({
  savePath: './',
  consolidateAll: false,
})

const textReporter = new SpecReporter({
  // add jasmine-spec-reporter
  spec: {
    displayDuration: true,
  },
})

jasmine.getEnv().clearReporters()
jasmine.getEnv().addReporter(junitReporter)
jasmine.getEnv().addReporter(textReporter)
