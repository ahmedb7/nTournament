'use strict';

// Configuring the tournaments module
angular.module('tournaments').run(['Menus',
  function(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', 'Tournaments', 'tournaments', 'dropdown', '/tournaments(/create)?');
    Menus.addSubMenuItem('topbar', 'tournaments', 'List tournaments', 'tournaments');
    Menus.addSubMenuItem('topbar', 'tournaments', 'New tournament', 'tournaments/create');
  }
]);
