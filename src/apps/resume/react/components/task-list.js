MyComponents.Task = React.createClass({

  render: function() {
    return (
      <div className="card light blue">
        <div className="card-content white-text">
         {this.props.task.title}
        </div>
      </div>
    );
  }

});

MyComponents.TaskList = React.createClass({
  render: function() {

    var tasksElements = this.props.tasks.map(function(t,i){
      return <MyComponents.Task task={t}/>
    })

    return (
      <div className="card light blue">
        <div className="card-content white-text">
         {tasksElements}
        </div>
      </div>
    );
  }
});
