import { Component } from "react"
import ReactMapGL, { NavigationControl, FlyToInterpolator } from "react-map-gl"


class Map extends Component {
  state = {
    viewport: {
      width: "100%",
      height: "400px",
      latitude: 37.518104,
      longitude: 126.931177,
      zoom: 13,
      pitch: 50,
    },
  }

  render() {
    return (
      <ReactMapGL
        transitionInterpolator={new FlyToInterpolator()}
        mapStyle="mapbox://styles/iduk/ck38bb5kl0ogr1co5gdccwy2q"
        mapboxApiAccessToken="pk.eyJ1IjoiaWR1ayIsImEiOiJjanViM3dscWkwNXVmNGVxcnV1eGU0OG40In0.gVasNYBAvWZHm06P8axkAA"
        onViewportChange={viewport => this.setState({ viewport })}
        {...this.state.viewport}
      >
        <div className="navi-control">
          <NavigationControl />
        </div>
      </ReactMapGL>
    )
  }
}

export default Map
