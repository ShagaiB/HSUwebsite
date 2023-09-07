import college1 from '../../public/assets/collegeLogos/CollegeLogo1.png'
import collegeBC from '../../public/assets/collegeLogos/CollegeBcLogo.png'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import { useState } from 'react'
import many from '../../public/assets/collegeLogos/ManyColleges.png'

const list = [college1, collegeBC, college1, collegeBC, college1, collegeBC, college1, collegeBC, college1, collegeBC]

export const CollegeBanner = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <div className="">
      <Carousel
        autoplay={true}
        infinite={true}
        easing="linear"
        speed={200000}
        // updateOnItemClick
        containerProps={{
          style: {
            width: '100%',
            justifyContent: 'space-between',
          },
        }}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        itemsToShow={1}
      >
        <Image src={many} />
      </Carousel>
    </div>
  )
}
