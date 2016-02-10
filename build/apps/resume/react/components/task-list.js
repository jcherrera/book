MyComponents.Task = React.createClass({

  render: function() {
    return (
      <div className={"card light blue"}>
        <div className="card-content">
        <ul className="collection-item white-text">
          <li><h5>{this.props.task.title}</h5></li>
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