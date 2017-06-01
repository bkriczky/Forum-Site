angular.module('forum', ['angular-meteor', 'ui.router', 'accounts.ui'])

.config(function($urlRouterProvider, $stateProvider){

  // Set the default route 
  $urlRouterProvider
    .when('/', '/topics')
    .otherwise('/topics');

  // Add states
  $stateProvider.state('topic', {
    url: '/topic/:topicId',
    templateUrl: 'views/pages/topic.html',
    controller: 'TopicContoller'
  });


 $stateProvider.state('topics', {
         url: '/topics',
         templateUrl: 'views/pages/topics.html',
         controller: 'TopicsContoller'
        });
  })


.run(function($state){
  // We inject $state here to initialize ui.router 
})
 .controller('TopicsContoller', function($scope){
        $scope.subscribe('topics');
        $scope.helpers({
            topics: function(){
                return Topics.find({}, {sort: {name:1}});
            }
        });
    })
 .controller('TopicContoller', function($scope, $stateParams){
    $scope.subscribe('topic', function(){ return [$stateParams.topicId];});
    $scope.helpers({
    topic: function(){
      return Topics.findOne({_id: $stateParams.topicId});
    }
  });
})
