import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { GlobalSettings } from '/imports/config/GlobalSettings';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { AccountsTemplates } from 'meteor/useraccounts:core';
import { Session } from 'meteor/session';

Template.navigation.helpers({
    'logoHTML': function () {
        return GlobalSettings.getBrandingLogoHTML();
    },
    displayUsername() {
        if (Meteor.user().profile && Meteor.user().profile.name) {
            return Meteor.user().profile.name;
        }
        return Meteor.user().username;
    }
});

Template.navigation.events({
    'click li #navbar-signout': function(event) {
        event.preventDefault();
        if (Meteor.userId()) {
            AccountsTemplates.logout();
            FlowRouter.go('/');
        }
    },

    'click .navbar-brand': function() {
        Session.set('gotoMeetingSeriesTab', true);
    }
});
