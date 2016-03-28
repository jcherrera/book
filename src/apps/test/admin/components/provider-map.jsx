const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet

class ProviderMap extends React.Component {
  render(){

    // push in a test user just to see if it works. 
    var userList = []
    
    // once the user logs in actually put in the correct location. 
    if (this.props.user) {
      userList = []
      userList.push(this.props.user)
    }
    
    const filters = this.props.filters



    const providerElements = this.props.users.map( function(u,i){
            var curIcon = L.icon({
        iconUrl: '../img/vendor/' + u.vendor + ".png",
        iconSize: [45, 45]});
      u.icon=curIcon;

      if (filters[u.vendor]) return <Marker position={u.pos} icon={u.icon} >
        <Popup>
          <span>{u.name} <br />
		  </span>
        </Popup>
      </Marker>
    })	


    return (
      <div className="row">
        <div className="col s12">
          <div className="card">
		  <h4>Provider Map</h4>
			<Map center={[40.701749, -73.922]} zoom={13}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
				{providerElements}

			  </Map>
          </div>
        </div>
      </div>

	)
  }

}

MyComponents.ProviderMap = ProviderMap
