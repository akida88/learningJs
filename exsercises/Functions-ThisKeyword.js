// method -> obj
// function -> global (window, global)

const video = {
   title: 'a',
   play() {
      console.log(this);
   }
};

// video.play();

// video.stop = function() { // method -> obj
//    console.log(this);
// };
// video.stop();

function Video(title) { // function -> global
   this.title = title;
   console.log(this);
}

const v = new Video('b');