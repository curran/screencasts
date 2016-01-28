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
export default ContentPane;
