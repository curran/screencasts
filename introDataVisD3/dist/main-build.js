(function () {
  'use strict';

  // Set up navigation with arrow keys.
  function arrowKeyNavigation(controller) {
    window.addEventListener("keydown", function (e) {
      var offsets = {

        // Decrement slide on UP (38) and LEFT (37)
        37: -1,
        38: -1,

        // Increment slide on DOWN (40) and RIGHT (39);
        39: 1,
        40: 1
      };
      controller.incrementCurrentIndex(offsets[e.keyCode]);
    });
  }

  var NavItem = React.createClass({
    displayName: "NavItem",

    click: function (e) {
      this.props.controller.setCurrentIndex(this.props.item.index);
    },
    render: function () {

      var item = this.props.item;
      var type = item.type;
      var navClass = "nav-item" + (this.props.active ? " active" : "");

      var video;

      if (item.video) {
        video = React.createElement(
          "a",
          { className: "video", href: item.video, target: "_blank" },
          React.createElement("i", { className: "fa fa-youtube-play" })
        );
      }

      if (type === "block") {
        var thumbnailUrl = "http://bl.ocks.org/curran/raw/" + item.id + "/thumbnail.png";

        return React.createElement(
          "div",
          { className: navClass, onClick: this.click },
          React.createElement(
            "span",
            { className: "title" },
            item.title
          ),
          React.createElement("img", { className: "thumbnail", src: thumbnailUrl }),
          video
        );
      } else {
        return React.createElement(
          "div",
          { className: navClass, onClick: this.click },
          item.title,
          video
        );
      }
    }
  });

  var NavList = React.createClass({
    displayName: "NavList",

    render: function () {
      return React.createElement(
        "div",
        { className: "nav" },
        this.props.items.map(function (item) {
          return React.createElement(NavItem, { item: item,
            key: item.index,
            active: item.index === this.props.currentIndex,
            controller: this.props.controller });
        }.bind(this))
      );
    }
  });

  // Load the file that configures the items and their order.
  function loadData(controller) {
    d3.json("items.json", function (err, items) {

      items.forEach(function (item, i) {

        // Assign an index to each item.
        item.index = i;

        // Of no type specified, default to "block".
        item.type = item.type || "block";
      });

      // Set the state from the loaded data.
      controller.setItems(items);
    });
  }

  function Controller() {
    var controller = {
      setItems: function (items) {
        controller.app.setState(function () {
          return { items: items };
        });
        controller.setCurrentIndex(0);
      },
      setCurrentIndex: function (currentIndex) {
        controller.app.setState(function (previousState) {
          return {
            currentIndex: currentIndex,
            item: previousState.items[currentIndex]
          };
        });
      },
      // Increment (offset == 1) or decrement (offset == -1) the current index.
      incrementCurrentIndex: function (offset) {
        controller.app.setState(function (previousState) {
          var currentIndex = previousState.currentIndex + offset;

          // Guard against going out of bounds.
          var n = previousState.items.length;
          currentIndex = currentIndex < 0 ? 0 : currentIndex;
          currentIndex = currentIndex >= n ? n - 1 : currentIndex;

          return {
            currentIndex: currentIndex,
            item: previousState.items[currentIndex]
          };
        });
      }
    };
    return controller;
  }

  // Images are hosted by GitHub Pages (so they don't bloat the datavis-tech repository or hose our servers).
  var imageRootUrl = "http://curran.github.io/screencasts/introDataVisD3/images";

  var ContentPane = React.createClass({
    displayName: "ContentPane",

    render: function () {
      var item = this.props.item;
      var source, description;

      if (item.source) {
        source = React.createElement(
          "a",
          { className: "source", href: item.source, target: "_blank" },
          "source"
        );
      }

      if (item.type === "block") {

        // This case was added for clocks that broke under Blockbuilder.
        if (item.showAsBlock) {
          return React.createElement(
            "div",
            { className: "content" },
            React.createElement(
              "a",
              { className: "run", href: "http://bl.ocks.org/curran/" + item.id, target: "_blank" },
              "Run it!"
            )
          );

          // This doesn't work due to bl.ocks.org iframe policy set to DENY.
          //return <iframe className="content" src={
          //  "http://bl.ocks.org/curran/" + this.props.item.id
          //} />;
        } else {
            return React.createElement("iframe", { className: "content", src: "http://blockbuilder.org/curran/" + this.props.item.id + "#embed=true" });
          }
      } else if (item.type === "image") {
        return React.createElement(
          "div",
          { className: "content" },
          React.createElement("img", { className: "img", style: { backgroundImage: "url(" + imageRootUrl + "/" + item.name + ")" } }),
          React.createElement(
            "div",
            { className: "footnote" },
            source,
            ": ",
            item.description
          )
        );
      } else if (item.type === "iframe") {
        return React.createElement("iframe", { className: "content", src: item.url });
      } else {
        console.log("unknown item type " + item.type + " " + item.title);
        return React.createElement(
          "div",
          { className: "content" },
          "Error"
        );
      }
    }
  });

  var App = React.createClass({
    displayName: "App",

    getInitialState() {
      return {
        items: [],
        item: {},
        currentIndex: 0
      };
    },
    render() {
      return React.createElement(
        "div",
        { className: "app" },
        React.createElement(NavList, { items: this.state.items,
          currentIndex: this.state.currentIndex,
          controller: this.props.controller }),
        React.createElement(ContentPane, { item: this.state.item })
      );
    }
  });

  var controller = Controller();
  controller.app = ReactDOM.render(React.createElement(App, { controller: controller }), document.getElementById("app-container"));

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

}());