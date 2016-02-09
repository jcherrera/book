MyComponents.Skill = React.createClass({

  render: function() {
    return (
        <li>
        {this.props.skill}
        </li>
    );
  }

});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
      <div className="card light blue">

        <div className="card-content white-text">
        <ul>
        {skillElements}
        </ul>
        </div>
      </div>
    );
  }
});
