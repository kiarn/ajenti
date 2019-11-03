angular.module('core').directive('floatingToolbar', () =>
    ({
        restrict: 'E',
        transclude: true,
        template: `
            <div class="container{{isWidescreen ? '-fluid' : ''}}">
                <div class="row">
                    <div ng:class="{'w-25': showSidebar}">
                    </div>
                    <div style="flex:1;">
                        <div class="bar">
                            <ng-transclude></ng-transclude>
                        </div>
                    </div>
                </div>
            </div>`
    })
);
