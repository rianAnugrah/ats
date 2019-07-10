import React from 'react'
import { Link } from 'react-router-dom'

const MasterList = ({items}) => {

    //console.log({items});
    this.no = 0;
  return (
    <table>
        <thead>
            <tr>
                <td>No</td>
                <td>Nama</td>
                <td>Deskripsi</td>
            </tr>
        </thead>
        <tbody>
        {   items && items.map(item => {
            this.no = this.no + 1;
            return (
                <tr key={item.id}>
                    <td>{this.no}</td>
                    <td>{item.nama}</td>
                    <td>{item.desc}</td>
                    <td>
                    <Link to="masterEdit/:id" className="btn-floating btn-small waves-effect waves-light orange">
                        <i className="material-icons">edit</i>
                    </Link>
                    &nbsp;
                    &nbsp;
                    <Link to="masterDelete/:id" className="btn-floating btn-small waves-effect waves-light red">
                        <i className="material-icons">delete</i>
                    </Link>
                    </td>
                
                
                </tr>
                
            )
            
        })} 
        </tbody>
    </table>
      

  )
}

export default MasterList
