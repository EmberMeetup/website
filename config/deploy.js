module.exports = function(deployTarget) {  
  return {
    'gcloud': {
      bucket: 'global-ember-meetup-frontend',
      key: 'fastboot-release.json'      
    },
    'gcloud-storage': {
        bucket: 'global-ember-meetup-frontend'
    }
  };
};
