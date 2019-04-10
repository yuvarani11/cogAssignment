"use strict";
const chai = require('chai');
const assert = chai.assert;
const leche = require('leche');
const withData = leche.withData;
const should = chai.should();
const supertest = require('supertest');
const _ = require('underscore');
const ROUTES_CONFIG = require('./routes/test');
const DATA = require('./test_data/test');
const HOST = require('./config/constant').URL;
const request = supertest(HOST);
const response = {};

describe('API', function () {
    describe('REGISTER STUDENT', function () {
        let testDataList = DATA.registerStudent;
        withData(testDataList, function (testData) {
            if (!testData.meta.skip) {
                it(' ', function (done) {
                    let payload = testData.payload;
                    request.post(ROUTES_CONFIG.STUDENT_REGISTER).send(payload).expect(function (result) {
                        let resultData = result;
                        resultData.should.have.property('statusCode', testData.meta.code);
                    })
                        .end(done);
                });
            }
        });
    });

    describe('COMMON STUDENT', function () {
        let testDataList = DATA.commonStudent;
        console.log(testDataList)
        withData(testDataList, function (testData) {
            if (!testData.meta.skip) {
                it(' ', function (done) {
                    let query = testData.query;
                    request.get(ROUTES_CONFIG.COMMON_STUDENT).query(query).expect(function (result) {
                        let resultData = result;
                        resultData.should.have.property('statusCode', testData.meta.code);
                    })
                        .end(done);
                });
            }
        });
    });

    describe('SUSPEND STUDENT', function () {
        let testDataList = DATA.updateSuspend;
        withData(testDataList, function (testData) {
            if (!testData.meta.skip) {
                it(' ', function (done) {
                    let payload = testData.payload;
                    request.post(ROUTES_CONFIG.SUSPEND_STUDENT).send(payload).expect(function (result) {
                        let resultData = result;
                        resultData.should.have.property('statusCode', testData.meta.code);
                    })
                        .end(done);
                });
            }
        });
    });

    describe('RETRIEVE NOTIFICATION', function () {
        let testDataList = DATA.retrieveNotification;
        withData(testDataList, function (testData) {
            if (!testData.meta.skip) {
                it(' ', function (done) {
                    let payload = testData.payload;
                    request.post(ROUTES_CONFIG.RETRIEVE_NOTIFICATION).send(payload).expect(function (result) {
                        let resultData = result;
                        resultData.should.have.property('statusCode', testData.meta.code);
                    })
                        .end(done);
                });
            }
        });
    });
});

