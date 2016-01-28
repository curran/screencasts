var ContentPane = React.createClass({
  render: function (){
    var item = this.props.item;
    var source, description;

    if(item.source){
      source = <a className="source" href={item.source}>source</a>;
    }

    if(item.type === "block"){
      return <iframe className="content" src={
        "http://blockbuilder.org/curran/" + this.props.item.id + "#embed=true"
      } />;
    } else if (item.type === "image"){
      return (
        <div className="content">
          <img className="img" style={{backgroundImage: "url(images/" + item.name + ")"}}/>
          <div className="footnote">{source}: {item.description}</div>
        </div>
      );

    } else {
      console.log("unknown item type " + item.type + " " + item.title);
      return <div className="content">Error</div>
    }
  }
});
export default ContentPane;
