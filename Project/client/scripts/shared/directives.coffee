angular.module('app.directives', [])

.directive('imgHolder', [->
  return {
    restrict: 'A'
    link: (scope, ele, attrs) ->
      Holder.run(
        images: ele[0]
      )
  }
])

# add background and some style just for specific page
.directive('customBackground', () ->
  return {
    restrict: "A"
    controller: [
      '$scope', '$element', '$location'
      ($scope, $element, $location) ->
        path = ->
          return $location.path()

        addBg = (path) ->
# remove all the classes
          $element.removeClass('body-home body-special body-tasks')

          # add certain class based on path
          switch path
            #when '/' then $element.addClass('body-home')
            when '/404', '/401', '/500', '/pages/500', '/pages/signin', '/pages/signup', '/login','/signup', '/getting-started-student', '/getting-started', '/student-profile','/' then $element.addClass('body-special')
            when '/tasks' then $element.addClass('body-tasks')

        addBg($location.path())

        $scope.$watch(path, (newVal, oldVal) ->
          if newVal is oldVal
            return
          addBg($location.path())
        )
    ]
  }
)

# switch stylesheet file
.directive('uiColorSwitch', [->
  return {
    restrict: 'A'
    link: (scope, ele, attrs) ->
      ele.find('.color-option').on('click', (event)->
        $this = $(this)
        hrefUrl = undefined

        style = $this.data('style')
        if style is 'loulou'
          hrefUrl = 'styles/main.css'
          $('link[href^="styles/main"]').attr('href', hrefUrl)
        else if style
          style = '-' + style
          hrefUrl = 'styles/main' + style + '.css'
          $('link[href^="styles/main"]').attr('href', hrefUrl)
        else
          return false

        event.preventDefault()
      )
  }
])


.directive('collapseNav', [->
  return {
    restrict: 'A'
    compile: (ele, attrs) ->
      $lists = ele.find('ul').parent('li') # only target li that has sub ul
      $lists.append('<i class="fa fa-caret-right icon-has-ul"></i>')
      $a = $lists.children('a')
      $listsRest = ele.children('li').not($lists)
      $aRest = $listsRest.children('a')

      $a.on('click', (event) ->
        $this = $(this)
        $parent = $this.parent('li')
        $lists.not($parent).removeClass('open').find('ul').slideUp()
        $parent.toggleClass('open').find('ul').slideToggle()

        event.preventDefault()
      )

      $aRest.on('click', (event) ->
        $lists.removeClass('open').find('ul').slideUp()
      )

  }
])
# Add 'active' class to li based on url, muli-level supported, jquery free
.directive('highlightActive', [->
  return {
    restrict: "A"
    controller: [
      '$scope', '$element', '$attrs', '$location'
      ($scope, $element, $attrs, $location) ->
        links = $element.find('a')
        path = () ->
          return $location.path()

        highlightActive = (links, path) ->
          path = '#' + path

          angular.forEach(links, (link) ->
            $link = angular.element(link)
            $li = $link.parent('li')
            href = $link.attr('href')

            if ($li.hasClass('active'))
              $li.removeClass('active')
            if path.indexOf(href) is 0
              $li.addClass('active')
          )

        highlightActive(links, $location.path())

        $scope.$watch(path, (newVal, oldVal) ->
          if newVal is oldVal
            return
          highlightActive(links, $location.path())
        )
    ]

  }
])
# toggle on-canvas for small screen, with CSS
.directive('toggleOffCanvas', [->
  return {
    restrict: 'A'
    link: (scope, ele, attrs) ->
      ele.on('click', ->
        $('#app').toggleClass('on-canvas')
      )
  }
])
.directive('slimScroll', [->
  return {
    restrict: 'A'
    link: (scope, ele, attrs) ->
      ele.slimScroll({
        height: '100%'
      })
  }
])


# history back button
.directive('goBack', [->
  return {
    restrict: "A"
    controller: [
      '$scope', '$element', '$window'
      ($scope, $element, $window) ->
        $element.on('click', ->
          $window.history.back()
        )
    ]
  }
])

