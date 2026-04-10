import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const getColor = (type) => {
  switch (type) {
    case "head": return "#ef4444"; 
    case "branch": return "#3b82f6"; 
    case "warehouse": return "#f2126c"; 
    case "partner": return "#52133c"; 
    case "customer": return "#106a49"; 
    default: return "#6b7280";
  }
};

// 📍 DATA
const locations = [
  { type: "head", name: "Head Office - Surat", lat: 21.1702, lng: 72.8311 },

  { type: "branch", name: "Bangalore", lat: 12.9716, lng: 77.5946 },
  { type: "branch", name: "Kolkata", lat: 22.5726, lng: 88.3639 },
  { type: "branch", name: "Durgapur", lat: 23.5204, lng: 87.3119 },
  { type: "branch", name: "Bhilai", lat: 21.1938, lng: 81.3509 },
  { type: "branch", name: "Delhi", lat: 28.7041, lng: 77.1025 },
  { type: "branch", name: "Jaipur", lat: 26.9124, lng: 75.7873 },

  { type: "warehouse", name: "Jaipur WH", lat: 26.9124, lng: 75.7873 },
  { type: "warehouse", name: "Ahmedabad WH", lat: 23.0225, lng: 72.5714 },
  { type: "warehouse", name: "Surat WH", lat: 21.1702, lng: 72.8311 },

  { type: "partner", name: "Ahmedabad", lat: 23.0225, lng: 72.5714 },
  { type: "partner", name: "Pune", lat: 18.5204, lng: 73.8567 },
  { type: "partner", name: "Chennai", lat: 13.0827, lng: 80.2707 },

  { type: "customer", name: "Rajkot", lat: 22.3039, lng: 70.8022 },
  { type: "customer", name: "Mumbai", lat: 19.0760, lng: 72.8777 },
  { type: "customer", name: "Delhi", lat: 28.7041, lng: 77.1025 },
];

function MapComponent() {
  return (
    <div className="flex flex-col md:flex-row gap-4">

      {/* 🗺️ MAP */}
      <div className="w-full md:w-3/4 relative z-0">
        <MapContainer
          center={[22.5, 78.9]}
          zoom={5}
          style={{ height: "500px", width: "100%" }}
          className="rounded-xl"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {locations.map((loc, index) => {
            const isHead = loc.type === "head";

            return (
              <CircleMarker
                key={index}
                center={[loc.lat, loc.lng]}
                radius={isHead ? 7 : 5} 
                pathOptions={{
                  color: getColor(loc.type), 
                  fillOpacity: 0,
                  weight: isHead ? 3 : 2,
                }}
              >
                <Popup>
                  <b>{loc.name}</b><br />
                  {loc.type.toUpperCase()}
                </Popup>
              </CircleMarker>
            );
          })}
        </MapContainer>
      </div>

      {/* 📘 LEGEND */}
      <div className="w-full md:w-1/4 bg-white p-4 rounded-xl shadow">
        <h2 className="text-lg font-bold mb-3">Legend</h2>

        <div className="flex flex-col gap-2 text-sm">

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full border-2 border-red-500"></span>
            Head Office
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full border-2 border-blue-500"></span>
            Branch Office
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full border-2 border-pink-500"></span>
            Warehouse
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full border-2 border-[#52133c]"></span>
            Supply Partner
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full border-2 border-[#106a49]"></span>
            Customer
          </div>

        </div>
      </div>

    </div>
  );
}

export default MapComponent;