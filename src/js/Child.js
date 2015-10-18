var Child = React.createClass({
  render: function(){
    return (
      <div>
        and this is the <b>{this.props.name}</b>.
      </div>
    )
  }
});
 
module.exports = Child;

// http://tylermcginnis.com/reactjs-tutorial-pt-2-building-react-applications-with-gulp-and-browserify/#comment-13809