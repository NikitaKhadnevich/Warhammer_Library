import React from 'react'
import cn from 'classnames';

import Header from '../Header'
import Article from '../Article'
import Footer from '../Footer'
import Aside from '../Aside';

import './mainPageStyles.scss'

function MainPage() {
  return (
    <>
      <main className={cn('mainPage')}>
        <Header />
        <Article />
        <Aside />
        <Footer />
      </main>
    </>
  )
}

export default MainPage