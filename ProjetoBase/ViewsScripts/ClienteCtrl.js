app.controller('ClienteCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGridConstants) {
    $scope.lang = "pt-br";
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