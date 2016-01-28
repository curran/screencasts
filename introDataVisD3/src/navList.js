import NavItem from "./navItem.js";

var NavList = React.createClass({
  render: function (){
    return (
      <div className="nav">
        {this.props.items.map(function (item) {
          return <NavItem item={item}
                          key={item.index}
                          active={item.index === this.props.currentIndex}
                          controller={this.props.controller}/>
        }.bind(this))} 
      </div>
    );
  }
});
export default NavList;
