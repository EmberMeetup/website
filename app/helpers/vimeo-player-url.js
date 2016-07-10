import Ember from 'ember';

export function vimeoPlayerUrl(url) {
  if (url) {
    let id = url.match(/[0-9]*$/);
    return `https://player.vimeo.com/video/${id}`;
  }
}

export default Ember.Helper.helper(function([url]){
  return vimeoPlayerUrl(url);
});
