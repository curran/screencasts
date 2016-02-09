
// Images are hosted by GitHub Pages (so they don't bloat the datavis-tech repository or hose our servers).
var imageRootUrl = "http://curran.github.io/screencasts/introDataVisD3/images";

var ContentPane = React.createClass({
  render: function (){
    var item = this.props.item;
    var source, description;

    if(item.source){
      source = <a className="source" href={item.source} target="_blank">source</a>;
    }

    if(item.type === "block"){

      // This case was added for clocks that broke under Blockbuilder.
      if(item.showAsBlock){
        return (
          <div className="content">
            <a className="run" href={"http://bl.ocks.org/curran/" + item.id} target="_blank">Run it!</a>
          </div>
        );

        // This doesn't work due to bl.ocks.org iframe policy set to DENY.
        //return <iframe className="content" src={
        //  "http://bl.ocks.org/curran/" + this.props.item.id
        //} />;
      } else {
        return <iframe className="content" src={
          "http://blockbuilder.org/curran/" + this.props.item.id + "#embed=true"
        } />;
      }
    } else if (item.type === "image"){
      return (
        <div className="content">
          <img className="img" style={{backgroundImage: "url(" + imageRootUrl + "/" + item.name + ")"}}/>
          <div className="footnote">{source}: {item.description}</div>
        </div>
      );
    } else if (item.type === "iframe"){
      return <iframe className="content" src={item.url} />;
    } else {
      console.log("unknown item type " + item.type + " " + item.title);
      return <div className="content">Error</div>
    }
  }
});
export default ContentPane;
