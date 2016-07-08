/**
 * Created by Brandon on 7/7/2016.
 */
ezApp.directive('customPopover', function ($log) {
    return {
        templateUrl: 'assets/scripts/components/Directives/Views/custom_popover.html',
        replace: true,
        scope: {
            infoObject: "="
        },
        link: function (scope, elements, attr) {
            elements.find('input').webuiPopover({
                trigger: 'hover',
                closeable:true,
                placement:'top',
                display: 'block',
                width: '400px',
                top: '279px',
                left: '639.5px'
            })
        }
    }
});