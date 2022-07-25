import { AudioPlayer } from './AudioPlayer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

export const BirdDisplay = ({ bird }) => {
  const audioUrl = `/audio/${bird.audio}`
  const Slides = bird.images.map((image, index) => {
    const url = `/images/slide${bird.id}/${image}`
    return (
      <SwiperSlide key={index}>
        <img src={url} alt="bird image" className="image" />
      </SwiperSlide>
    )
  })
  return (
    <>
      <h1>{bird.nameA}</h1>
      <h1>{bird.nameE}</h1>
      <div className="imagecontainer">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
        >
          {Slides}
        </Swiper>
      </div>
      <AudioPlayer
        src={audioUrl}
        cb={(e) => {
          console.log(e)
        }}
      />
    </>
  )
}
