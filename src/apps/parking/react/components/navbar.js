MyComponents.NavBar = React.createClass({
  render: function() {
    return (

    <nav className="green darken-4">
        <div className="nav-wrapper">
            <a href="#" classNameName="brand-logo center">Garages Map</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="index.html">Home</a></li>
                <li><a href="garages.html">Garages</a></li>
                <li><a href="garages_map.html">Map</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
                <li><a href="index.html">Home</a></li>
                <li><a href="garages.html">Garages</a></li>
                <li><a href="garages_map.html">Map</a></li>
            </ul>
        </div>
    </nav>
    );
  }
});

