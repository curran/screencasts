var NavItem = React.createClass({
  click: function (e){
    this.props.controller.setCurrentIndex(this.props.item.index);
  },
  render: function (){

    var item = this.props.item;
    var type = item.type;
    var navClass = "nav-item" + (this.props.active ? " active" : "");

    if(type === "block"){
      var thumbnailUrl = "http://bl.ocks.org/curran/raw/" + item.id + "/thumbnail.png";

      return (
        <div className={navClass} onClick={this.click} >
          <span className="title">{item.title}</span>
          <img className="thumbnail" src={thumbnailUrl}/>
        </div>
      );
    } else {
      return (
        <div className={navClass} onClick={this.click} >
          {item.title}
        </div>
      );
    }
  }
});
export default NavItem;
