import React from 'react'
import NavBar from './NavBar'
import Login from './Login'

describe('<NavBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NavBar />)
    cy.mount(<Login isOpen={true} closeModal={()=>{}}/>)
    
  
  })
})