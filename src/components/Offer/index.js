import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import bgImg from "images/works_bg.png";
import { offerta, serviziPage } from "site-structure.js";

const Offer = () => {
	const swiperRef = useRef(null);
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<section id="works-section" className="wprt-section offer">
			<div className="container">
				<div className="row">
					<div className="col-md-6 title">
						<h2>LA NOSTRA OFFERTA</h2>
						<div className="wprt-lines custom-2">
							<div className="line-1"></div>
						</div>
					</div>

					{/* <div className="col-md-6 swiper-controls">
						<div
							ref={prevRef}
							className="swiper-sliders swipers-button-prev"
							onClick={() => swiperRef.current?.slidePrev()}>
							<span class="fa fa-chevron-left"></span>
						</div>
						<div
							ref={nextRef}
							className="swiper-sliders swipers-button-next"
							onClick={() => swiperRef.current?.slideNext()}>
							<span class="fa fa-chevron-right"></span>
						</div>
					</div> */}

					<div className="col-md-12">
						<div className="wprt-project arrow-style-2 has-arrows arrow60 arrow-dark">
							<Swiper
								onSwiper={(swiper) => (swiperRef.current = swiper)}
								spaceBetween={30}
								slidesPerView={1}
								loop={true}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								pagination={{
									clickable: true,
								}}
								navigation={{
									prevEl: prevRef.current,
									nextEl: nextRef.current,
								}}
								modules={[Navigation]}
								breakpoints={{
									768: {
										slidesPerView: 2,
									},
									1024: {
										slidesPerView: 3,
									},
								}}>
								{offerta.map((servizio) => (
									<SwiperSlide key={servizio.key}>
										<div class="cbp-item">
											<div class="service-item clearfix">
												<div class="thumb">
													<img src={servizio.copertina} alt="image" />
												</div>
												<div class="service-item-wrap">
													<h3 class="title font-size-18 pb-0" style={{ paddingBottom: 0 }}>
														<Link to={serviziPage.route}>{servizio.titolo}</Link>
													</h3>
													<p class="desc">{servizio.testo}</p>
													<Link to={serviziPage.route} class="wprt-button small rounded-3px">
														SCOPRI DI PIU'
													</Link>
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Offer;
