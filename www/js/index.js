/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');

        // initializing Apptentive
        Apptentive.deviceReady(this.successLogger, this.errorAlert);
        Apptentive.addUnreadMessagesListener(this.unreadMessagesListener, this.errorAlert);
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    // Unread Message Listeners
    unreadMessagesListener: function (unreadMessages) {
        var parentElement = document.getElementById("unreadMessages");
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        receivedElement.firstElementChild.innerHTML = unreadMessages;
    },

    // Engagement
    engage: function (event) {
        Apptentive.engage(app.successAlert, app.errorAlert, event);
    },
    engageWithCustomData: function (event, customData) {
        Apptentive.engage(app.successAlert, app.errorAlert, event, customData);
    },
    canShowInteraction: function (eventName) {
        Apptentive.canShowInteraction(app.successAlert, app.errorAlert, eventName);
    },

    // Message Center
    showMessageCenter: function () {
        Apptentive.showMessageCenter(app.successLogger, app.errorAlert);
    },
    canShowMessageCenter: function () {
        Apptentive.canShowMessageCenter(app.successAlert, app.errorAlert);
    },
    showMessageCenterWithCustomData: function (customData) {
        Apptentive.showMessageCenter(app.successLogger, app.errorAlert, customData);
    },
    getUnreadMessageCount: function () {
        Apptentive.getUnreadMessageCount(app.successAlert, app.errorAlert);
    },

    // Custom Data
    addCustomDeviceData: function (key, value) {
        Apptentive.addCustomDeviceData(app.successAlert, app.errorAlert, key, value);
    },
    addCustomPersonData: function (key, value) {
        Apptentive.addCustomPersonData(app.successAlert, app.errorAlert, key, value);
    },
    removeCustomDeviceData: function (key) {
        Apptentive.removeCustomDeviceData(app.successAlert, app.errorAlert, key);
    },
    removeCustomPersonData: function (key) {
        Apptentive.removeCustomPersonData(app.successAlert, app.errorAlert, key);
    },

    // User Identity
    getPersonEmail: function () {
        Apptentive.getPersonEmail(app.successAlert, app.errorAlert);
    },
    setPersonEmail: function (email) {
        Apptentive.setPersonEmail(app.successAlert, app.errorAlert, email);
    },
    getPersonName: function () {
        Apptentive.getPersonName(app.successAlert, app.errorAlert);
    },
    setPersonName: function (name) {
        Apptentive.setPersonName(app.successAlert, app.errorAlert, name);
    },

    // Authentication
    login: function (token) {
        Apptentive.login(app.successAlert, app.errorAlert, token);
    },
    logout: function () {
        Apptentive.logout(app.successAlert, app.errorAlert);
    },

    // Rating Provider
    putRatingProviderArg: function (key, value) {
        Apptentive.putRatingProviderArg(app.successAlert, app.errorAlert, key, value);
    },
    setRatingProvider: function (providerName) {
        Apptentive.setRatingProvider(app.successAlert, app.errorAlert, providerName);
    },

    // Helpers
    successLogger: function (arg) {
        console.log("success: " + arg);
    },
    errorAlert: function (arg) {
        console.log("error: " + arg);
        alert("Error: \"" + arg + "\"");
    },
};

app.initialize();