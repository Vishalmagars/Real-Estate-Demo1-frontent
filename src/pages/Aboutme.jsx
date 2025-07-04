import React, { Component } from 'react'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'

export default class  extends Component {
  render() {
    return (
      <div>
        <Header/>
        <AboutMe/>
        <Footer/>
      </div>
    )
  }
}
