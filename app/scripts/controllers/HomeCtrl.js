(function() {
    function HomeCtrl(Room) {
      this.Rooms = Room.all;
    }

    angular
        .module('bloc-chat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
