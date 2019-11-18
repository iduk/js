import React from 'react'
import Layout from '../components/layout'
import ActiveLink from '../components/ActiveLink'
import '../components/styles/app.scss'

class Page3 extends React.Component {
  render() {
    return (
			<Layout
				title="Page3"
				theme="bg-info"
				color="text-white"
				logo={'/img/symbol-white.svg'}
			>
				<section className={'py-6'}>
					<article className="container">
						<div className="row justify-content-between">
							<div className="col mb-5">
								<h1 className="">Contact Us</h1>
							</div>
						</div>
						<div className="row">
							<div className="col-10 col-lg-6 mx-auto">
								<span>Address</span>
								<p className="lead my-1">
									(14568)
									<br />
									서울특별시 영등포구 국제금융로 8길 27-8, 403
									<br />
									Byung Yoon, Lee
								</p>
							</div>

							<div className="col-10 col-lg-6 mt-lg-0 mt-4  mx-auto">
								<span>Infomation</span>
								<p className="lead my-1">
									<span className="d-inline-block mr-2">Tel.</span>
									010-1234-4567 / 070-1234-5678
								</p>
								<p className="lead my-1">
									<span className="d-inline-block mr-2">Fax.</span>
									010-1234-4567,8
								</p>
								<p className="lead my-1">
									<span className="d-inline-block mr-2">Email.</span>
									<a href="mailto:by.lee@openfloor.kr" target="_blank">
										by.lee@openfloor.kr
									</a>
								</p>
							</div>

							<section className="col-10 col-md-8 mx-auto">
								<hr className="my-4" />
								<h3 className="pb-4">To mail</h3>
								<form>
									<div className="form-group">
										<label for="formGroupExampleInput">Example label</label>
										<input
											type="text"
											className="form-control"
											id="formGroupExampleInput"
											placeholder="Example input"
										/>
									</div>
									<div className="form-group">
										<label for="formGroupExampleInput2">Another label</label>
										<input
											type="text"
											className="form-control"
											id="formGroupExampleInput2"
											placeholder="Another input"
										/>
									</div>
									<div className="form-group">
										<label for="formGroupExampleInput2">Another label</label>
										<textarea
											rows="8"
											className="form-control"
											id="formGroupExampleInput2"
											placeholder="Another input"
										/>
									</div>
									<div className="mt-4 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">
											<i className="la la-mail-bulk mr-3"></i>
                      메일 보내기
										</button>
									</div>
								</form>
							</section>
						</div>
					</article>
				</section>
			</Layout>
		)
  }
}
export default Page3
