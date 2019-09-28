import React, { Component } from "react";
import CounterSubKategori from "./CounterSubKategori";

export class CounterKategori extends Component {
  render() {
    //console.log(this.props);
    const { items } = this.props;
    return (
      <div>
        {items.nama}
        <CounterSubKategori id={items.id} />
      </div>
    );
  }
}

export default CounterKategori;
