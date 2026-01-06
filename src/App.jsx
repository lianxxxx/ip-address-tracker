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

  const IPIFY_KEY = import.meta.env.VITE_IPIFY_KEY;
  const fetchIP = async (ip = "") => {
    try {
      const res = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${IPIFY_KEY}&ipAddress=${ip}`
      );
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
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const ipInput = e.target.ip.value;
    if (!ipInput) return;

    try {
      const res = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${IPIFY_KEY}&ipAddress=${ipInput}`
      );
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
    } catch (err) {
      console.error("Invalid IP or API error", err);
    }
  };

  useEffect(() => {
    fetchIP();
  }, []);

  return (
    <>
      <Header />
      <main>
        <SearchBar onSearch={handleSearch} />
        <InfoCard data={ipData} />
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
