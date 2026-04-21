import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const getColor = (type) => ({
  head: "#ff3b30",
  branch: "#007aff",
  warehouse: "#681726bf",
  partner: "#af52de",
  customer: "#34c759",
}[type] || "#999");


const createIcon = (color) =>
  new L.DivIcon({
    html: `<div style="
      width:14px;
      height:14px;
      border-radius:50%;
      background:${color};
      border:2px solid white;
      box-shadow:0 0 6px rgba(0,0,0,0.4);
    "></div>`,
    className: "",
  });

const getOffsetPosition = (lat, lng, index) => {
  const offset = 0.12;
  return [
    lat + (index % 2 === 0 ? offset : -offset),
    lng + (index % 3 === 0 ? offset : -offset),
  ];
};

const locations = [
  { type: "head", name: "Head Office - Surat", lat: 21.1702, lng: 72.8311 },

  { type: "branch", name: "Bangalore", lat: 12.9716, lng: 77.5946 },
  { type: "branch", name: "Kolkata", lat: 22.5726, lng: 88.3639 },
  { type: "branch", name: "Durgapur", lat: 23.5204, lng: 87.3119 },
  { type: "branch", name: "Bhilai", lat: 21.1938, lng: 81.3509 },
  { type: "branch", name: "Delhi", lat: 28.7041, lng: 77.1025 },
  { type: "branch", name: "Jaipur", lat: 26.9124, lng: 75.7873 },

  { type: "warehouse", name: "Ahmedabad WH", lat: 23.0225, lng: 72.5714 },
  { type: "warehouse", name: "Surat WH", lat: 21.1702, lng: 72.8311 },

  { type: "partner", name: "Pune Partner", lat: 18.5204, lng: 73.8567 },
  { type: "partner", name: "Chennai Partner", lat: 13.0827, lng: 80.2707 },

  { type: "customer", name: "Mumbai", lat: 19.0760, lng: 72.8777 },
  { type: "customer", name: "Nagpur", lat: 21.1458, lng: 79.0882 },
  { type: "customer", name: "Hyderabad", lat: 17.3850, lng: 78.4867 },
  { type: "customer", name: "Visakhapatnam", lat: 17.6868, lng: 83.2185 },
];



export default function MapComponent() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-3/4">
        <MapContainer
          center={[22.5, 78.9]}
          zoom={5}
          minZoom={4}
          maxZoom={10}
          scrollWheelZoom={false}
          doubleClickZoom={true}
          dragging={true}
          style={{ height: "520px", width: "100%", zIndex: 1 }}
          className="rounded-2xl shadow-lg"
        >

          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {locations.map((loc, i) => (
            <Marker
              key={i}
              position={getOffsetPosition(loc.lat, loc.lng, i)}
              icon={createIcon(getColor(loc.type))}
            >
              <Tooltip>{loc.name}</Tooltip>

              <Popup>
                <b>{loc.name}</b><br />
                {loc.type.toUpperCase()}
              </Popup>
            </Marker>
          ))}

        </MapContainer>
      </div>

  
      <div className="w-full lg:w-1/4 bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Legend</h2>

        <Legend color="#ff3b30" text="Head Office" />
        <Legend color="#007aff" text="Branch Office" />
        <Legend color="#5b0716" text="Warehouse" />
        <Legend color="#af52de" text="Supply Partner" />
        <Legend color="#34c759" text="Customer" />
      </div>

    </div>
  );
}

function Legend({ color, text }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: color,
        }}
      />
      {text}
    </div>
  );
}