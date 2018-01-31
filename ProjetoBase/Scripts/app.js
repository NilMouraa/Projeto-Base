var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.selection', 'ui.grid.edit', 'ui.grid.cellNav', 'ui.grid.autoResize', 'ui.grid.pinning', 'ui.grid.moveColumns']);

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);