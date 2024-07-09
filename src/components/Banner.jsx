import templeImage from '../assets/temple.jpg';

const Banner = () => {
  return (
    <div className="w-full h-60 ">
      <section className="flex items-center justify-center text-amber-100 relative h-full">
        <div className="absolute inset-0 w-full h-full ">
          {' '}
          <img
            //   src="https://plus.unsplash.com/premium_photo-1697729444936-8c6a6f643312"
            src={templeImage}
            alt="Background Image"
            style={{ height: '35vh', objectPosition: 'top 80%' }}
            className="absolute inset-0 w-full h-full  object-cover  z-0"
          />
        </div>

        <div className=" relative z-10 text-center">
          <h1 className="text-5xl">all things to do in madurai</h1>
          <p className="text-xl mt-3">
            curated by local residents, families, and tourists
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
      </section>
    </div>
  );
};

export default Banner;
