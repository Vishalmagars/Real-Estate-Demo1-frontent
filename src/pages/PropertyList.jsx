import React, { Component } from 'react'
import PropertyPage from '../components/PropertyPage'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class PropertyList extends Component {
  render() {
    return (
      <div>
        <Header/>
        <PropertyPage/>
        <Footer/>
      </div>
    )
  }
}
