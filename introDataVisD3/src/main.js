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

        // The navigation list on the left side.
        <NavList items={this.state.items} 
                 currentIndex={this.state.currentIndex}
                 controller={this.props.controller}/>

        // The content in on the right side.
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
