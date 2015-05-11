'use strict';

angular.module('tiyorlandoDemoDaygithubio')
  .controller('MainCtrl', function () {
    this.springiOSCohort = [
      {
        'title': 'Bagel Runner',
        'description': " Bagel Runner is a endless runner game where Cleo the toaster must dodge his greatest foe, The Bagel in hopes of finding a better life where he can shamelessly enjoy his favorite treat The Toaster Strudel.",
        'repo': '',
        'students': {
            'name1': 'Joe Rocca',
            'img1': 'assets/images/JoeRocca.jpg',
            'git1': 'joerocca',
            'twit1': '',
            'email1': 'jprocca813@gmail.com'
        }
        
      },
      {
        'title': 'BreakUp',
        'description': 'BreakUp is a mashup of Pinball, and Breakout with the objective of surviving as long as possible while racking up points.',
        'repo': '',
        'students': {
            'name1': 'Randall Lee',
            'img1': '',
            'git1': 'rclee',
            'twit1': 'rcleeDev',
            'email1': 'randallee@gmail.com'
        }
      },
      {
        'title': "Orlando's Very Own",
	'description': 'OVO is an Orlando City Soccer Club based app made by a fan for the fans.'
        'repo': '',
        'students': {
            'name1': 'Jordan Anderson',
            'img1': 'assets/images/JordanAnderson.jpg',
            'git1': 'wambambizzle',
            'twit1': 'wambambizzle',
            'email1': 'mr.janderson14@gmail.com'
        }
        
      },
      {
        'title': 'TRAKR',
	'description': 'TRAKR allows individuals to create and track multiple training regiments and display graphs of their progress for each individual exercise."
        'repo': '',
        'students': {
            'name1': 'Richard Herndon',
            'img1': 'assets/images/RichardHerndon.jpg',
            'git1': 'rherndon47',
            'twit1': 'RichardHerndon3',
            'email1': 'richardherndon@mac.com'
        }
        
      },
      {
        'title': '',
        'repo': '',
        'students': {
            'name1': 'Jim Diaz',
            'img1': 'assets/images/JimDiaz.jpg',
            'git1': '',
            'twit1': '',
            'email1': ''
        }
        
      },
      {
        'title': "what'sTheBuzz",
        'description': 'what’sTheBuzz is a social media aggregator to bring you news articles on what is trending right now from Twitter, Google, and Yahoo.',
        'repo': '',
        'students': {
            'name1': 'Keaton Swoboda',
            'img1': 'assets/images/KeatonSwoboda.jpg',
            'git1': 'keatonswob',
            'twit1': 'keatonswob',
            'email1': 'keaton.swoboda@gmail.com'
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
