import React from 'react'
import classNames from 'classNames'
import { browserHistory, Link } from 'react-router'
import { inject, observer } from 'mobx-react'

@inject('sessionsStore')
@observer
export default class Root extends React.Component {
  render() {
    let isAdmin = this.props.location.pathname.startsWith('/admin')
    
    let menu = ''
    
    if (!isAdmin) {
      menu = (
        <div className='menu'>
          <Link to={ '/home' } activeClassName='active'>Home</Link>
          <Link to={ '/about' } activeClassName='active'>About</Link>
          <Link to={ '/contacts' } activeClassName='active'>Contacts</Link>
        </div>
      )
    }
    
    return (
      <div className='root-container'>
        { menu }
        { this.props.children }
      </div>
    )
  }
}