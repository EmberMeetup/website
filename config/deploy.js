module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'embermeetup',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
