/**
 * Created by Brandon on 7/4/2016.
 */
ezApp.directive('imgPreviewPopover', function ($log) {
    return {
        templateUrl: 'views/popover/img_popover_preview.html',
        replace: true,
        scope: {
            previewObject: "="
        },
        link: function (scope, elements, attr) {
            elements.find('input').webuiPopover({
                trigger: 'hover',
                closeable:true,
                placement:'top',
                display: 'block',
                width: '700px',
                top: '279px',
                left: '639.5px'
            })
        }
    }
});
