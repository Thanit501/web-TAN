import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  LoadScript,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import mapStyle from "./mapStyle";
import "@reach/combobox/styles.css";

export default class View extends React.Component {
  state = {
    map: undefined,
    position: [10.721854, 99.381196],
    bus: [],
    markerList: [],
  };

  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    const API = "AIzaSyD_VqT718B96l5zaToLFcPX_Qe7xsONwBI";
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${API}&callback=initMap`
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    const google = window.google;
    var latlng = new google.maps.LatLng(
      this.state.position[0],
      this.state.position[1]
    );
    var myOptions = {
      zoom: 19,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.state.map = new google.maps.Map(
      document.getElementById("map"),
      myOptions
    );
    this.marker();
  };

  marker = async () => {
    const google = window.google;
    const image = {
      url: "https://img.icons8.com/dusk/64/000000/person-male.png",
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(100, 100),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 0),
    };

    await this.getItemReal();
    // console.log(this.state.bus[0]);

    // for (var i in this.state.bus) {
    if (this.state.bus != undefined) {
      var latlng = new google.maps.LatLng(
        this.state.bus.lat,
        this.state.bus.long
      );
      // var lable = this.state.bus[i].vehicle_id <br> this.state.bus[i].list[0].gpsdate
      var marker = new google.maps.Marker({
        position: latlng,
        map: this.state.map,
        label: this.state.bus.vehicle_id,
        icon: image,
        title: this.state.bus.latitude + " " + this.state.bus.longitude,
      });
      this.state.markerList = marker;
      this.state.map.panTo(marker.getPosition());
    }
    //}
    setInterval(async () => {
      await this.getItemReal();
      //for (var i in this.state.bus) {
      if (this.state.bus != undefined) {
        var latlng = new google.maps.LatLng(
          this.state.bus.lat,
          this.state.bus.long
        );
        this.state.markerList.setPosition(latlng);
      }
      //}
      console.log("work");
    }, 60000);
  };

  async getItemReal() {
    var self = this; // self will now be referred to your component
    var config = {
      method: "get",
      url: "http://192.168.0.110:4500/api/Location/60878306b0c6f846882fd2d4",
      headers: {},
    };

    await axios(config)
      .then(function (response) {
        self.setState({ bus: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(this.state.bus[0].list[0].gpsdate);
  }

  render() {
    return (
      <main>
        <Container fluid className="p-0">
          <Row style={{ height: "100%", position: "absolute", width: "100%" }}>
            <Col md={12}>
              <div
                id="map"
                style={{ height: "100%", position: "absolute", width: "100%" }}
              ></div>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}
