import React, { Component } from 'react'
// import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import M from "materialize-css/dist/js/materialize.min.js";
import MasterList from './masterList';
import MasterAdd from './masterAdd';


class Master extends Component {
    componentDidMount() {
        var elem = document.querySelector(".tabs");
        M.Tabs.init(elem, {
            swipeable : false,
            duration: 250
        });
    }

  render() {
    
    //console.log(this.props);
    const { kategori,pic,lokasi, auth } = this.props;
    if ( !auth.uid ) return <Redirect to= '/signin' />
    return (
        
       <div className="row">
            <div className="col s12">
                    <h4>Master Data</h4>
            </div>

            <div className="col s12 paper z-depth-1">
            <ul id="tabs-swipe-demo" className="tabs">
                <li className="tab col s3 "><a href="#test-swipe-1">Kategori</a></li>
                <li className="tab col s3 "><a href="#test-swipe-2">PIC</a></li>
                <li className="tab col s3 "><a href="#test-swipe-3">Lokasi</a></li>
            </ul>
            <div id="test-swipe-1" className="col s12 tab-content">
                <MasterAdd col="Kategori"/>
                <MasterList items={kategori}/>
            
            </div>
            <div id="test-swipe-2" className="col s12 ">
                <MasterAdd col="PIC"/>
                <MasterList items={pic}/>
            </div>
            <div id="test-swipe-3" className="col s12 ">
                <MasterAdd col="Lokasi"/>
                <MasterList items={lokasi}/>
            </div>
            </div>
        
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    kategori: state.firestore.ordered.col_kategori,
    pic: state.firestore.ordered.col_pic,
    lokasi: state.firestore.ordered.col_lokasi,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(['col_kategori','col_pic','col_lokasi'])
)(Master)