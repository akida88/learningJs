
const video = {
   title: 'a',
   tags: ['a', 'b', 'c'],
   showTags() {
      // const self = this; // self is referencing the video object
      this.tags.forEach(function(tag) {
         console.log(this.title, tag);
      }.bind(this));
   }
};

video.showTags();

//functions are objects in js
function playVideo(a, b) {
   console.log(this);
}

playVideo.call({ name: 'Mosh'}, 1, 2); //arguments
playVideo.apply({ name: 'Mosh'}, [1, 2]); // arguments in an array with apply
playVideo.bind({ name: 'Mosh'})();

playVideo(); //reference the window object