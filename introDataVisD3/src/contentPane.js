var ContentPane = React.createClass({
  render: function (){
    var item = this.props.item;
    var source, description;

    if(item.source){
      source = <a className="source" href={item.source}>source</a>;
    }

    if(item.description){
      console.log(item.description);
      description = <div className="description">{item.description}</div>;
    }

    if(item.type === "block"){
      var blockbuilderUrl = "http://blockbuilder.org/curran/" + this.props.item.id;
      return <iframe className="content" src={blockbuilderUrl} />;

    } else if (item.type === "image"){
      return (
        <div className="content">

          <img className="img" style={{backgroundImage: "url(images/" + item.name + ")"}}/>

          {source}

          {description}

        </div>
      );

    } else {
      console.log("unknown item type " + item.type + " " + item.title);
      return <div className="content">Error</div>
    }
  }
});
export default ContentPane;
