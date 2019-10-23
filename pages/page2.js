import App, { Container } from 'next/app'
import React from 'react'
import { PageTransition } from 'next-page-transitions'
import Nav from '../components/nav/nav'

export default class Page2 extends React.Component {
  render() {
    return (
      <section>
        <Nav />
        <h1>asdfasdf</h1>
        asdfasdfasdf
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </section>
    )
  }
}
