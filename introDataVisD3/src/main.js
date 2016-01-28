import arrowKeyNavigation from "./arrowKeyNavigation.js";
import NavList from "./navList.js";
import loadData from "./loadData.js";
import Controller from "./controller.js";

var ContentPane = React.createClass({
  render: function (){
    var item = this.props.item;
    console.log(item);

    if(item.type === "block"){
      var blockbuilderUrl = "http://blockbuilder.org/curran/" + this.props.item.id;
      return <iframe className="content" src={blockbuilderUrl} />;

    } else if (item.type === "image"){
      return (
        <div className="content">
          <img className="content-img" style={{backgroundImage: "url(images/" + item.name + ")"}}/>
          <a className="content-source-link" href={item.source}>source</a>
        </div>
      );

    } else {
      console.log("unknown item type " + item.type + " " + item.title);
      return <div className="content">Error</div>
    }
  }
});

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
        <NavList items={this.state.items} 
                 currentIndex={this.state.currentIndex}
                 controller={this.props.controller}/>
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
