function InfoCard() {
  return (
    <div className="absolute top-38 left-0 right-0 px-6 w-full flex justify-center">
      <div className=" bg-white rounded-xl  w-full max-w-md md:max-w-4xl p-5 shadow-lg grid grid-cols-1  md:grid-cols-4 text-center md:text-left divide-y-0 md:divide-y-0 md:divide-x divide-gray-200">
        <div className="px-4 md:pl-6 ">
          <h6 className="text-xs tracking-widest mb-1">IP ADDRESS</h6>
          <p>193.97.987</p>
        </div>

        <div className="px-4 md:pl-6">
          <h6 className="text-xs tracking-widest mb-1">LOCATION</h6>
          <p>Brooklyn, NY 1001</p>
        </div>

        <div className="px-4 md:pl-6">
          <h6 className="text-xs tracking-widest mb-1">TIMEZONE</h6>
          <p>UTC-05:00</p>
        </div>

        <div className="px-4 md:pl-6">
          <h6 className="text-xs tracking-widest mb-1">ISP</h6>
          <p>SpaceX Starlink</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
