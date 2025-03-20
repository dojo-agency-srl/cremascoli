import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const GallerySlideshow = ({ gallery }) => {
	const [selectedImage, setSelectedImage] = useState(gallery[0]);

	return (
		<div className="wprt-galleries galleries w-570px">
			<div id="wprt-slider">
				<img src={selectedImage.image} alt={selectedImage.alt} />
			</div>

			<div id="wprt-carousel">
				<Swiper
					spaceBetween={8}
					slidesPerView={4}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					modules={[Autoplay]}
					onSlideChange={(swiper) => setSelectedImage(gallery[swiper.activeIndex])}>
					{gallery.map((image, index) => (
						<SwiperSlide key={index}>
							<img
								src={image.image}
								alt={image.alt}
								style={{ cursor: "pointer" }}
								onClick={() => setSelectedImage(image)}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default GallerySlideshow;
