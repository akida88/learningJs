
const video = {
   title: 'a',
   tags: ['a', 'b', 'c'],
   showTags() {
      this.tags.forEach(function(tag) { // a call back function, a regular one
         console.log(this.title, tag);
      }, this); // this references to the current object
   }
};

video.showTags();