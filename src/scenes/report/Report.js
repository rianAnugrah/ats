import React, { Component } from "react";
import PropTypes from "prop-types";
import config from "../../config/sheetConfig";
import { load, saveData } from "../../helpers/spreadsheet";
import Maintenance from "../maintenace/Maintenace";

export class Report extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { cars: [], error: null, maintenance:true };
//     this.initClient = this.initClient.bind(this);
//     this.onLoad = this.onLoad.bind(this);
//   }

//   initClient = () => {
//     // 2. Initialize the JavaScript client library.
//     window.gapi.client
//       .init({
//         apiKey: config.apiKey,
//         // Your API key will be automatically added to the Discovery Document URLs.
//         discoveryDocs: config.discoveryDocs
//       })
//       .then(() => {
//         // 3. Initialize and make the API request.
//         load(this.onLoad);
//         saveData();
//       });
//   };

//   onLoad = (data, error) => {
//       console.log(data, error)
//     if (data) {
//       const cars = data.cars;
//       this.setState({ cars });
//     } else {
//       this.setState({ error });
//     }
//   };

//   componentDidMount() {
//     // 1. Load the JavaScript client library.
//     window.gapi.load("client", this.initClient);
//   }

//   render() {
//     const { cars, error, maintenance } = this.state;

//     if (maintenance) {
//       return <Maintenance />
//     }else{

//     if (error) {
//       return <div>{this.state.error}</div>;
//     }
//     return (
//       <ul>
//         {cars.map((car, i) => (
//           <li key={i}>
//             {car.year} {car.make} {car.model}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
}

export default Report;
