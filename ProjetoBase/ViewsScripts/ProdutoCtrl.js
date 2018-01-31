app.controller('ProdutoCtrl', ['$scope', '$http', 'uiGridConstants', 'i18nService', function ($scope, $http, uiGridConstants, i18nService) {
    $scope.lang = "pt-br";

    this.$onInit = function () {
        debugger
        $.contextMenu({
            selector: '.context-menu-one',
            callback: function (key, options) {
                var m = "clicked: " + key;
                window.console && console.log(m) || alert(m);
            },
            items: {
                "edit": { "name": "Edit", "icon": "fa-edit" },
                "cut": { "name": "Cut", "icon": "fa-scissors" },
                "sep1": "---------",
                "quit": { "name": "Quit", "icon": "fa-sign-out" },
                "sep2": "---------",
                "fold1": {
                    "name": "Sub group",
                    "items": {
                        "fold1-key1": { "name": "Foo bar" },
                        "fold2": {
                            "name": "Sub group 2",
                            "items": {
                                "fold2-key1": { "name": "alpha" },
                                "fold2-key2": { "name": "bravo" },
                                "fold2-key3": { "name": "charlie" }
                            }
                        },
                        "fold1-key3": { "name": "delta" }
                    }
                },
                "fold1a": {
                    "name": "Other group",
                    "items": {
                        "fold1a-key1": { "name": "echo" },
                        "fold1a-key2": { "name": "foxtrot" },
                        "fold1a-key3": { "name": "golf" }
                    }
                }
            }
        });
    }
    $scope.gridOptions = {
        showColumnFooter: true,
        enableCellEditOnFocus: true,
        enableGridMenu: true,
        enableFiltering: true,
        enableSorting: true,
        columnDefs: [
            { field: 'name', cellTooltip: 'Custom string', headerTooltip: 'Custom header string' },
            {
                field: 'company', cellTooltip:
                function (row, col) {
                    return 'Name: ' + row.entity.name + ' Company: ' + row.entity.company;
                }, headerTooltip:
                function (col) {
                    return 'Header: ' + col.displayName;
                }
            },
            { field: 'gender', cellTooltip: true, headerTooltip: true, cellFilter: 'mapGender' },
        ],
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
            $scope.gridApi.core.on.sortChanged($scope, function (grid, sort) {
                $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
            });

            gridApi.cellNav.on.navigate($scope, function (newRowCol, oldRowCol) {

            });
        }
    };
    $scope.gridOptions.rowHeight = 30;
    $scope.gridOptions.multiSelect = false;


    $http.get('http://ui-grid.info/data/100.json')
        .then(function (response) {
            response.data.forEach(function setGender(row, index) {
                row.gender = row.gender === 'male' ? '1' : '2';
            });

            $scope.gridOptions.data = response.data;
        });
}])
    .filter('mapGender', function () {
        var genderHash = {
            1: 'male',
            2: 'female'
        };

        return function (input) {
            if (!input) {
                return '';
            } else {
                return genderHash[input];
            }
        };
    });