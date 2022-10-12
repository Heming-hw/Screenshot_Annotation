/*
    Load plugin and register to global videojs
*/

(($) => {
  const AnnotationComments = require('./annotation_comments.js');
  // videojs.registerPlugin('annotationComments', AnnotationComments(videojs));
  window.AnnotationComments = AnnotationComments()
})(jQuery);
