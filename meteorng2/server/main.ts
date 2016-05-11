import {loadNegocios} from './load-negocios';
import {Meteor} from 'meteor/meteor';

Meteor.startup(loadNegocios);
