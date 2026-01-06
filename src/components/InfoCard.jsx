function InfoCard({ data, loading }) {
  return (
    <div className="absolute top-38 left-0 right-0 px-6 w-full flex justify-center z-50 md:top-42">
      <div className=" bg-white rounded-xl  w-full max-w-md md:max-w-4xl p-5 shadow-lg grid grid-cols-1  md:grid-cols-4 text-center md:text-left divide-y-0 md:divide-y-0 md:divide-x divide-gray-200 md:pt-7 md:pb-2">
        <div className="px-4 md:pl-6 ">
          <h6 className="text-xs tracking-widest mb-1">IP ADDRESS</h6>
          <p className="font-medium text-lg pb-4 md:text-2xl">
            {" "}
            {loading ? "Loading..." : data.ip}
          </p>
        </div>

        <div className="px-4 md:pl-6">
          <h6 className="text-xs tracking-widest mb-1">LOCATION</h6>
          <p className="font-medium text-lg pb-4  md:text-2xl">
            {loading ? "Loading..." : `${data.city}, ${data.region}`}
          </p>
        </div>

        <div className="px-4 md:pl-6">
          <h6 className="text-xs tracking-widest mb-1">TIMEZONE</h6>
          <p className="font-medium text-lg pb-4 md:text-2xl">
            {loading ? "Loading..." : `UTC ${data.timezone}`}
          </p>
        </div>

        <div className="px-4 md:pl-6">
          <h6 className="text-xs tracking-widest mb-1">ISP</h6>
          <p className="font-medium text-lg md:text-2xl">
            {loading ? "Loading..." : data.isp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
