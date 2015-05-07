'use strict';

angular.module('tiyorlandoDemoDaygithubio')
  .controller('MainCtrl', function () {
    this.springiOSCohort = [
      {
        'title': 'Bagel Runner',
        'repo': '',
        'students': {
            'name1': 'Joe Rocca',
            'img1': '',
            'git1': '',
            'twit1': '',
            'email1': ''
        }
        
      },
      {
        'title': "Orlando's Very Own",
        'repo': '',
        'students': {
            'name1': 'Jordan Anderson',
            'img1': '',
            'git1': '',
            'twit1': '',
            'email1': ''
        }
        
      },
      {
        'title': '',
        'repo': '',
        'students': {
            'name1': 'Richard Herndon',
            'img1': '',
            'git1': '',
            'twit1': '',
            'email1': ''
        }
        
      },
      {
        'title': '',
        'repo': '',
        'students': {
            'name1': 'Jim Diaz',
            'img1': '',
            'git1': '',
            'twit1': '',
            'email1': ''
        }
        
      },
      {
        'title': 'BreakUp',
        'repo': '',
        'students': {
            'name1': 'Randall Lee',
            'img1': '',
            'git1': '',
            'twit1': '',
            'email1': ''
        }
        
      },
      {
        'title': "what'sTheBuzz",
        'repo': '',
        'students': {
            'name1': 'Keaton Swoboda',
            'img1': '',
            'git1': '',
            'twit1': '',
            'email1': ''
        }
        
      }];
    this.frontEnders = [
      {
        'title': 'Whats Pup',
        'url': 'https://whatspup.firebaseapp.com',
        'description': 'CRM for Pet Sitters, A Happy Pup makes a Happy Owner makes a Happy Sitter',
        'repo': 'https://github.com/carolinapowers/whatspup',
        'students': {
            'name1': 'Carolina Powers',
            'img1': 'assets/images/CarolinaPowers.jpg',
            'git1': 'carolinapowers',
            'twit1': 'carolinapowers',
            'email1': 'carolinapowers@gmail.com',
            'name2': 'Jared Stevick',
            'img2': 'assets/images/JaredStevick.jpg',
            'git2': 'jaredstevick',
            'twit2': 'CountMachuki',
            'email2': 'jstevick@gmail.com',
        }
      },
       {
        'title': 'Study Buddy',
        'url': 'https://github.com/eklemen/study-buddy',
        'description': 'CRM for Pet Sitters, A Happy Pup makes a Happy Owner makes a Happy Sitter',
        'repo': 'https://github.com/eklemen/study-buddy',
        'students': {
            'name1': 'Evan Klemen',
            'img1': 'assets/images/EvanKlemen.jpg',
            'git1': 'eklemen',
            'twit1': 'evanklemen',
            'email1': 'ejklemen@gmail.com',
            'name2': false,
            
        }
      },
      {
        'title': 'Skedaddle',
        'url': 'skedaddle.click',
        'description': 'CRM for Pet Sitters, A Happy Pup makes a Happy Owner makes a Happy Sitter',
        'repo': 'https://github.com/sak55/skedaddle',
        'students': {
            'name1': 'Sam Kauffman',
            'img1': 'assets/images/SamKauffman.jpg',
            'git1': 'sak55',
            'twit1': 'samkauffman',
            'email1': 'samuelkauffman@gmail.com',
            'name2': false,
        }
      },
      {
        'title': 'ReadyRead',
        'url': 'readyread.firebaseapp.com',
        'description': 'CRM for Pet Sitters, A Happy Pup makes a Happy Owner makes a Happy Sitter',
        'repo': 'https://github.com/johnalxndr/Ready-Read',
        'students': {
            'name1': 'John Alexander',
            'img1': 'assets/images/JohnAlexander.jpg',
            'git1': 'johnalxndr',
            'twit1': 'johnalxndr',
            'email1': 'jalexander788@gmail.com',
            'name2': 'Taylor Foster',
            'img2': 'assets/images/TaylorFoster.jpg',
            'git2': 'taylorfoster90',
            'twit2': 'tagfoster90',
            'email2': 'tagfoster90@gmail.com',
        }
      },
      {
        'title': 'MadEase',
        'url': 'github.com/WhatsPup',
        'description': 'CRM for Pet Sitters, A Happy Pup makes a Happy Owner makes a Happy Sitter',
        'repo': 'https://github.com/mfees/madease',
        'students': {
            'name1': 'Maddie Fees',
            'img1': 'https://avatars0.githubusercontent.com/u/10180909?v=3&s=460',
            'git1': 'mfees',
            'twit1': 'Maddie_T_Fees',
            'email1': 'Madison.Fees90@gmail.com',
            'name2': false,
            
        }
      },
        {
        'title': 'Fowl Landing',
        'url': 'https://github.com/adamkarb/Fowl-Landing',
        'description': 'CRM for Pet Sitters, A Happy Pup makes a Happy Owner makes a Happy Sitter',
        'repo': 'https://github.com/adamkarb/Fowl-Landing',
        'students': {
            'name1': 'Adam Karbiener',
            'img1': 'https://avatars3.githubusercontent.com/u/7321950?v=3&s=460',
            'git1': 'adamkarb',
            'twit1': 'adamkarb',
            'email1': 'adamkarb@gmail.com',
            'name2': false,
        }
      },
      {
        'title': 'HausBrewer',
        'url': 'hausbrewer.com',
        'description': 'CRM for Pet Sitters, A Happy Pup makes a Happy Owner makes a Happy Sitter',
        'repo': 'https://github.com/jrutishauser/hausbrewer',
        'students': {
            'name1': 'Jon Rutishauser',
            'img1': 'assets/images/JonRutishauser.jpg',
            'git1': 'jrutishauser',
            'twit1': 'jonrutis',
            'email1': 'jrutishauser@gmail.com',
            'name2': false,
        }
      },
    ];
    this.rubyists = [
      {
        'title': 'New Start',
        'url': 'https://github.com/new-start/project',
        'description': 'CRM for Pet Sitters, A Happy Pup makes a Happy Owner makes a Happy Sitter',
        'repo': 'https://github.com/new-start/project',
        'students': {
            'name1': 'J. Spencer Hopkins',
            'img1': 'assets/images/spencerhopkins.jpg',
            'git1': 'jspencerhopkins',
            'twit1': 'jspencerhopkins',
            'email1': 'jspencerhopkins@gmail.com',
            'name2': 'Peter Ortiz',
            'img2': 'assets/images/PeterOrtiz.jpg',
            'git2': 'peterortiz82',
            'twit2': 'peterortiz82',
            'email2': 'peterortiz82@gmail.com',
        }
      },
      {
        'title': 'Spin Off Newsletter',
        'url': 'https://github.com/new-start/project',
        'description': 'CRM for Pet Sitters, A Happy Pup makes a Happy Owner makes a Happy Sitter',
        'repo': 'https://github.com/new-start/project',
        'students': {
            'name1': 'Andell Jean-Jacques',
            'img1': 'assets/images/AndellJean-Jacques.jpg',
            'git1': 'ajean144',
            'twit1': 'andell_a',
            'email1': 'ajeanjacques42@gmail.com',
            'name2': 'Jeff Winkler',
            'img2': 'assets/images/JeffWinkler.jpg',
            'git2': 'palmbeachjeff',
            'twit2': 'palmbeachjeff',
            'email2': 'palmbeachjeff@gmail.com',
        }
      },
    ];
  });
