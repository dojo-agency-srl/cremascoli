import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import bgImg from "images/works_bg.png";
import { progetti } from "site-structure.js";

const Works = () => {
	const swiperRef = useRef(null);
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<section
			id="works-section"
			className="wprt-section works parallax"
			style={{
				backgroundImage: `url(${bgImg})`,
			}}>
			<div className="container">
				<div className="row">
					<div className="col-md-6 title">
						<h2 className="text-left text-white">ALCUNI DEI NOSTRI LAVORI</h2>
						<div className="wprt-lines custom-2">
							<div className="line-1"></div>
						</div>
					</div>

					<div className="col-md-6 swiper-controls">
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
					</div>

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
								{progetti.map((progetto) => (
									<SwiperSlide key={progetto.nome}>
										<div className="project-item">
											<figure>
												<img src={progetto.copertina} alt="image" />
												<figcaption>
													<div>
														<h2>
															<Link target="_blank" to={progetto.route}>
																{progetto.nome}
															</Link>
														</h2>
														<p>{progetto.descrizioneBreve}</p>
													</div>
												</figcaption>
											</figure>
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

export default Works;
