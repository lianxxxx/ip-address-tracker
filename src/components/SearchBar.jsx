function SearchBar({ onSearch }) {
  return (
    <div className="absolute left-0 top-20 w-full px-6">
      <form
        onSubmit={onSearch}
        className="relative w-full md:max-w-md md:mx-auto"
      >
        <input
          type="search"
          name="ip"
          placeholder="Search for any IP address or domain"
          className="w-full bg-white focus:outline-none pr-14 px-4 py-3 md:py-3 rounded-xl placeholder:text-gray-400 placeholder:font-normal placeholder:text-sm md:placeholder:text-md"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full w-12 md:w-10 bg-black flex items-center justify-center rounded-r-xl"
        >
          <span className="text-white font-bold">{">"}</span>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
