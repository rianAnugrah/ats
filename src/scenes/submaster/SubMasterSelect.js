import React, { Fragment, Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Select } from "react-materialize";
import master from "../master/master";
import SubMasterAdd from "./SubMasterAdd";

export class SubMasterSelect extends Component {
  render() {
    const { items } = this.props;
    return (
      <Select
        name="kategori"
        label="Kategori"
        xl="12"
        s="12"
        onChange={this.props.handleChange}
        name="kategori"
      >
        {items &&
          items.map((item, index) => {
            return (
              <Fragment>
                {index === 0 && <option value="">-- Pilih --</option>}

                <option key={item.id} value={item.id}>
                  {item.nama}
                </option>
              </Fragment>
            );
          })}
      </Select>
    );
  }
}

export default SubMasterSelect;
