import React from 'react';
import Slider from 'react-slick';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const reviewCard = [
  {
    cname: "Ajay Singh",
    src: "/images/rman1-removebg-preview.png",
    review: "Great experience! Highly recommend. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    cname: "Ravi Mehta",
    src: "/images/rman3-removebg-preview.png",
    review: "Very professional and skilled. Eos expedita tempora at sequi adipisci rerum iure optio quibusdam",
  },
  {
    cname: "Aarti Sharma",
    src: "/images/woman2-removebg-preview.png",
    bottom: "-13px",
    review: "Would love to work together again! Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    cname: "Pooja Verma",
    src: "/images/woman1-removebg-preview.png",
    bottom: "0px",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos expedita tempora at sequi adipisci rerum iure optio quibusdam",
  },
  {
    cname: "Nikhil Patel",
    src: "/images/rman2-removebg-preview.png",
    review: "Quick response and good quality. Eos expedita tempora at sequi adipisci rerum iure optio quibusdam",
  },
];

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full px-4 py-10">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8">- Customer Review -</h2>

      <div className="max-w-screen-lg mx-auto">
        <Slider {...settings}>
          {reviewCard.map((value, index) => (
            <div key={index} className="!flex !justify-center !items-center lg:inline-block px-5">
              <div className="bg-[#f3f3f3] w-full max-w-[600px] min-h-[240px] rounded-2xl flex flex-col sm:flex-row items-center gap-5 p-5">
                
                <div className="w-[200px] h-[220px] !bottom-[-30px] sm:w-[150px] sm:h-[200px] bg-[#615f5f27] rounded-xl overflow-hidden shrink-0">
                  <img
                    src={value.src}
                    alt={value.cname}
                    className="w-full h-full object-cover"
                    style={{ position: 'relative', bottom: value.bottom || 'auto' }}
                  />
                </div>

                <div className="text-black flex-1 text-center sm:text-left">
                  <span className="block text-lg sm:text-xl font-semibold">{value.cname}</span>
                  <div className='items-center flex justify-center  sm:justify-start'>
                  <Stack spacing={1}>
                    <Rating name="size-small" defaultValue={4} size="small" />
                  </Stack>
                  </div>
                  <p className="text-sm mt-2 leading-relaxed">{value.review}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
