/**
 * Created by Brandon on 7/12/2016.
 */
ezApp.directive('growthDecayGraph', function ($log) {
    return {
        templateUrl: 'views/barGraphs/grow_decay_graph.html',
        replace: true,
        scope: {
            infoObject: "="
        }
    }
});