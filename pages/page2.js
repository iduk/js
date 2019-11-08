import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'
import styles from '../components/styles/global.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

class Page2 extends React.Component {
  render() {
    return (
      <Layout title="Page2" theme="bg-info" color="text-white">
        <div className={cx('container', 'mx-auto', 'pt-6')}>
          <div style={{ textAlign: 'center' }}>
            <h1 className={cx('display-3')}>Coming Soon</h1>
          </div>
        </div>

        <section
          className={cx('container', 'mx-auto')}
          style={{ paddingTop: 100 }}
        >
          <div className={cx('row')}>
            <div className={cx('col')}>
              <h2 className={cx('font-weight-bold')}>Openfloor</h2>
              <p className={cx('my-3')}>
                <figure className={cx('figure', 'p-4', 'mx-auto')}>
                  <img
                    src="https://images.unsplash.com/photo-1542965934-233f2071468e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                    className={cx(
                      'figure-img',
                      'img-fluid',
                      'rounded',
                      'rounded-lg',
                      'shadow'
                    )}
                    alt="bla bla"
                  />
                </figure>
              </p>
              <p className={cx('my-3')}>
                구하기 남는 곳으로 피다. 반짝이는 인간은 안고, 봄바람을 대한
                위하여, 속에 행복스럽고 그들은 교향악이다. 유소년에게서 곳으로
                뜨거운지라, 사막이다. 거선의 대고, 되는 봄바람을 크고 있으랴?
                무엇을 충분히 튼튼하며, 별과 못할 공자는 밝은 귀는 교향악이다.
                무엇을 꾸며 소리다.이것은 곳이 그들에게 남는 쓸쓸하랴? 없으면
                공자는 살 속잎나고, 부패뿐이다. 어디 용기가 같이, 가치를 자신과
                끓는 교향악이다. 하였으며, 청춘의 영락과 만천하의 인생에 열락의
                아니다. 못할 인간이 놀이 뿐이다.
              </p>
            </div>
            <div className={cx('col')}>
              <h2 className={cx('font-weight-bold')}>오 픈 하 다.</h2>
              <p className={cx('my-3')}>
                <figure className={cx('figure', 'p-4', 'mx-auto')}>
                  <img
                    src="https://images.unsplash.com/photo-1552415183-52af5aef5816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1601&q=80"
                    className={cx(
                      'figure-img',
                      'img-fluid',
                      'rounded',
                      'rounded-lg',
                      'shadow'
                    )}
                    alt="bla bla"
                  />
                </figure>
              </p>
              <p className={cx('my-3')}>
                구하기 남는 곳으로 피다. 반짝이는 인간은 안고, 봄바람을 대한
                위하여, 속에 행복스럽고 그들은 교향악이다. 유소년에게서 곳으로
                뜨거운지라, 사막이다. 거선의 대고, 되는 봄바람을 크고 있으랴?
                무엇을 충분히 튼튼하며, 별과 못할 공자는 밝은 귀는 교향악이다.
                무엇을 꾸며 소리다.이것은 곳이 그들에게 남는 쓸쓸하랴? 없으면
                공자는 살 속잎나고, 부패뿐이다. 어디 용기가 같이, 가치를 자신과
                끓는 교향악이다. 하였으며, 청춘의 영락과 만천하의 인생에 열락의
                아니다. 못할 인간이 놀이 뿐이다.
              </p>
            </div>
          </div>
        </section>

        {/* Cards */}
        {/* <section className={cx('container')}>
          <div className={cx('row', 'position-relative', 'align-items-center')}>
            <article className={cx('col')}>
              <div className={cx('card')}>Card</div>
            </article>
          </div>
        </section> */}
      </Layout>
    )
  }
}
export default Page2
