import uiModules from 'ui/modules';
const module = uiModules.get('kibana/number_vis', ['kibana']);

module.controller('KbnMetricVisController', function ($scope, Private) {
    $scope.$watch('vis.params.number', function (number) {
        $scope.numberValue = number;
    });
    $scope.$watch('vis.params.label', function (label) {
        $scope.labelValue = label;
    });
});
