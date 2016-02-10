MyComponents.Task = React.createClass({

  render: function() {
    var color = "green"
    var completed = "Completed!"
    if(this.props.task.completed == false){
      color = "red"
      completed = "Incomplete"
    }
    return (
      <div className={"card light blue"}>
        <div className="card-content">
        <ul className="collection-item white-text">
          <li><h5 className="custom-yellow-text">{this.props.task.title}({completed})</h5></li>
          <li>Due: {this.props.task.due}</li>
          <li>Priority: {this.props.task.priority}</li>
        </ul> 
        </div>
      </div>
    );
  }

});

MyComponents.TaskList = React.createClass({
  render: function() {
    var taskElements = this.props.tasks.map(function(t,i){
      return <MyComponents.Task task={t} key={i}/>
    })

    return (
      <div className="card light blue">
        <div className="card-content white-text">

        {taskElements}

        </div>
      </div>
    );
  }
});