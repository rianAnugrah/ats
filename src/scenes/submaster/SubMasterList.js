import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Table } from "react-materialize";

export class SubMasterList extends Component {
  render() {
    const { items, masters, masterId } = this.props;
    this.no = 0;
    return (
      <div>
        <div>
          {masters.map(master => (
            <p>{master.id == masterId && master.nama}</p>
          ))}
        </div>
        <table>
          <thead>
            <tr>
              <td>No</td>
              <td>Nama</td>
              <td>Deskripsi</td>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map(item => {
               
                return (
                  item.kategori == masterId &&
                  item.kategori != "" && (
                   
                    <tr key={item.id}>
                      
                      <td> {this.no = this.no + 1}</td>
                      <td>{item.nama}</td>
                      <td>{item.desc}</td>
                    </tr>
                  )
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SubMasterList;
