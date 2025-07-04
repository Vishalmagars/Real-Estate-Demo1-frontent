import React, { Component } from 'react'
import PropertyShowcase from '../components/PropertyShowcase'
import Header from '../components/Header'

import Footer from '../components/Footer'
import PropertyCardSlider1 from '../components/PropertyCardSlider1'
import TestimonialSection from '../components/Testimonial'
export default class PropetyPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <PropertyShowcase />
                <PropertyCardSlider1/>
                <TestimonialSection/>
                <Footer />
            </div>
        )
    }
}
