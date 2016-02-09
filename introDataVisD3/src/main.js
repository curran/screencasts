import arrowKeyNavigation from "./arrowKeyNavigation.js";
import NavList from "./navList.js";
import loadData from "./loadData.js";
import Controller from "./controller.js";
import ContentPane from "./contentPane.js";

var App = React.createClass({
  getInitialState() {
    return {
      items: [],
      item: {},
      currentIndex: 0
    };
  },
  render() {
    return (
      <div className="app">

        {/* The navigation list on the left. */}
        <NavList items={this.state.items} 
                 currentIndex={this.state.currentIndex}
                 controller={this.props.controller}/>

        {/* The content on the right. */}
        <ContentPane item={this.state.item} />

      </div>
    );
  }
});

var controller = Controller();
controller.app = ReactDOM.render(
  <App controller={controller}/>,
  document.getElementById("app-container")
);

arrowKeyNavigation(controller);
loadData(controller);



//Commented out for production.
//
// // Display video from the camera on the video element.
// // Example code from http://www.html5rocks.com/en/tutorials/getusermedia/intro/
// navigator.getUserMedia  = navigator.getUserMedia ||
//                           navigator.webkitGetUserMedia ||
//                           navigator.mozGetUserMedia ||
//                           navigator.msGetUserMedia;
// 
// navigator.getUserMedia({ video: true }, function (localMediaStream) {
//   var video = document.querySelector('.face-video');
//   video.src = window.URL.createObjectURL(localMediaStream);
// }, function (e) {
//   console.log("Error " + e);
// });
