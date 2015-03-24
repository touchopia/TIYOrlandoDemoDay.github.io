'use strict';

angular.module('tiyorlandoDemoDaygithubio')
  .controller('MainCtrl', function () {
    this.frontEnders = [
      {
        'title': 'Whats Pup',
        'url': 'github.com/WhatsPup',
        'description': 'CRM for Pet Sitters, A Happy Pup makes a Happy Owner makes a Happy Sitter',
        'students': {
            'name1': 'Carolina Powers',
            'img1': 'http://lorempixel.com/200/200/sports',
            'name2': 'Jared Stevick',
            'img2': 'http://lorempixel.com/200/200/sports'
        }
      },
      {
        'title': 'Ready Read',
        'url': 'github.com/ReadyRead',
        'description': 'CRM for Pet Sitters, A Happy Pup makes a Happy Owner makes a Happy Sitter',
        'students': {
            'name1': 'John Alexander',
            'img1': 'http://lorempixel.com/200/200/sports',
            'name2': 'Taylor Foster',
            'img2': 'http://lorempixel.com/200/200/people'
        }
      }
    ];
  });
