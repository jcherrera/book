MyComponents.Skill = React.createClass({

  render: function() {
    return (
      <div className="col s4">
        <div className="card hoverable green accent-1">
            <ul className="collection black-text center">
              <span className="title">{this.props.skill.name.toUpperCase()}</span>
              <p>I have been doing this for  {this.props.skill.years} years!</p>
            </ul>
          </div>
        </div>
    );
  }

});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })
    return (
        <ul className="collection">
          {skillElements}
        </ul>
    );
  }
});