import React, { Fragment, Component } from "react";
import { Select } from "react-materialize";

export class PctDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { handleChange, items, name, value } = this.props;
   
    return (
      <Select
        name={name.toLowerCase()}
        label={name[0].toUpperCase() + name.slice(1)}
        xl="12"
        s="12"
        onChange={handleChange}
      >
        {items &&
          items.map((item, index) => {
            return (
              <Fragment>
                {index === 0 && <option value="">-- Pilih --</option>}

                <option key={item.id} value={item.id} selected={value && value === item.id}>
                  {item.nama}
                </option>
              </Fragment>
            );
          })}
      </Select>
    );
  }
}

export default PctDropdown;
