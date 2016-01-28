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
          { className: "video", href: item.video },
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

  var ContentPane = React.createClass({
    displayName: "ContentPane",

    render: function () {
      var item = this.props.item;
      var source, description;

      if (item.source) {
        source = React.createElement(
          "a",
          { className: "source", href: item.source },
          "source"
        );
      }

      if (item.description) {
        console.log(item.description);
        description = React.createElement(
          "div",
          { className: "description" },
          item.description
        );
      }

      if (item.type === "block") {
        var blockbuilderUrl = "http://blockbuilder.org/curran/" + this.props.item.id;
        return React.createElement("iframe", { className: "content", src: blockbuilderUrl });
      } else if (item.type === "image") {
        return React.createElement(
          "div",
          { className: "content" },
          React.createElement("img", { className: "img", style: { backgroundImage: "url(images/" + item.name + ")" } }),
          source,
          description
        );
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

}());