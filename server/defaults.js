if (Topics.find().count() === 0) {
  _.each(['General Discussion', 'Create a forum', 'WOOOOO'],
  function(topicName){
    Topics.insert({name: topicName});
  });
}