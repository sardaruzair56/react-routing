import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import HomeNavigation from '../components/HomeNavigation';
import classes from './RootPage.module.css'

const Rootpage = () => {
  return (
    <Fragment>
    <HomeNavigation/>
    <main>
    <Outlet/>
    </main>
    </Fragment>
  )
}

export default Rootpage
