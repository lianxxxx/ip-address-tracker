import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import InfoCard from "./components/InfoCard";
import Map from "./components/Map";

function App() {
  const [ipData, setIpData] = useState({
    ip: "",
    lat: 51.505,
    lng: -0.09,
    city: "",
    region: "",
    timezone: "",
    isp: "",
  });

  const [loading, setLoading] = useState(true);
  const fetchIP = async (ip = "") => {
    setLoading(true);
    try {
      let ipToFetch = ip;

      if (!ip) {
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipResult = await ipResponse.json();
        ipToFetch = ipResult.ip;
      }

      const res = await fetch(`/api/ipify?ip=${ipToFetch}`);
      const data = await res.json();

      setIpData({
        ip: data.ip,
        lat: data.location.lat,
        lng: data.location.lng,
        city: data.location.city,
        region: data.location.region,
        timezone: data.location.timezone,
        isp: data.isp,
      });
    } catch (error) {
      console.error("Failed to fetch IP data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const ipInput = e.target.ip.value;
    if (!ipInput) return;

    await fetchIP(ipInput);
  };

  useEffect(() => {
    fetchIP();
  }, []);

  return (
    <>
      <Header />
      <main>
        <SearchBar onSearch={handleSearch} />
        <InfoCard data={ipData} loading={loading} />
        <Map
          key={`${ipData.lat}-${ipData.lng}`}
          latitude={ipData.lat}
          longitude={ipData.lng}
        />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
