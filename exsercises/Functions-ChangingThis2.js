// Using the Arrow function to enharrit this from the containing function

const video = {
   title: 'a',
   tags: ['a', 'b', 'c'],
   showTags() {
      this.tags.forEach(tag => {
         console.log(this.title, tag);
      });
   }
};

video.showTags();