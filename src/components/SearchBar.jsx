function SearchBar() {
  return (
    <div className="absolute left-0 top-20 w-full px-6">
      <form className="relative w-full md:max-w-md md:mx-auto">
        <input
          type="search"
          placeholder="Search for any IP address or domain"
          className=" w-full bg-white focus:outline-none cursor-pointerpr-14 px-4 py-3 md:py-3 rounded-xl placeholder:text-gray-400 placeholder:font-normal placeholder:text-sm  md:placeholder:text-md"
        />

        <button
          type="submit"
          className=" cursor-pointer
        absolute right-0 top-0
        h-full w-12 md:w-10
        bg-black
        flex items-center justify-center
        rounded-r-xl
      "
        >
          <span className="text-white font-bold">{">"}</span>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
