
function World() {
  this.counter = 0;
}

World.prototype.getCounter = function (done) {
  var self = this;
  setTimeout(function () {
    done(self.counter);
  }, 1000);
};


World.prototype.setCounter = function (counter, done) {
  var self = this;
  setTimeout(function () {
    self.counter = counter;
    done(self.counter);
  }, 1000);
};


var world = new World();

function incrementCounter () {
  world.getCounter(function (counter) {
    console.log('getCounter: got ' + counter);
    world.setCounter(counter + 1, function (counter) {
      console.log('setCounter: got ' + counter);
    });
  });
}

setTimeout(incrementCounter, 1000);

setTimeout(incrementCounter, 1000);

setTimeout(function () {
  world.getCounter(function (counter) {
    console.log('final result: ', counter);
  });
}, 5000);