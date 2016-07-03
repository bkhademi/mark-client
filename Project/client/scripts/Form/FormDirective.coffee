

angular.module('app.ui.form.directives', [])

# Dependency: http://www.eyecon.ro/bootstrap-slider/ OR https://github.com/seiyria/bootstrap-slider
.directive('uiRangeSlider', ['$compile','$log',($compile,$log) ->
    return {
        restrict: 'A',
        scope:
            range:'=?range'
 
        link: (scope, ele, attrs) ->
            ele.slider()
            scope.range = attrs.sliderValue
            ele.change (event)->
                value = this.defaultValue
                scope.range = '['+value+']'
    }
])

# Dependency: https://github.com/grevory/bootstrap-file-input
.directive('uiFileUpload', [ ->
    return {
        restrict: 'A'
        link: (scope, ele) ->
            ele.bootstrapFileInput()
    }
])

# Dependency: https://github.com/xixilive/jquery-spinner
.directive('uiSpinner', [ ->
    return {
        restrict: 'A'
        compile: (ele, attrs) -> # link and compile do not work together
            ele.addClass('ui-spinner')

            return {
                post: ->
                    ele.spinner()
            }

        # link: (scope, ele) -> # link and compile do not work together
    }

])

# Dependency: https://github.com/rstaib/jquery-steps
.directive('uiWizardForm', [ '$compile', ($compile)->
    return {
        link: (scope, ele) ->
            ele.wrapInner('<div class="steps-wrapper">' )
            steps =  ele.children('.steps-wrapper').steps()
            $compile(steps)(scope)
    }
])


