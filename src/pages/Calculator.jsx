import React, { useState } from "react";
import Layout from "../components/Layout";

export default function CalculatorsPage() {

const num = (v) => parseFloat(v) || 0;
const [shape, setShape] = useState("rectangle");
const [length, setLength] = useState("");
const [width, setWidth] = useState("");
const [thickness, setThickness] = useState("");
const [diameter, setDiameter] = useState("");

const density = 7.85;

const area = () => {
if (shape === "round") return Math.PI * (num(diameter)/2)**2;
if (shape === "square") return num(width)**2;
if (shape === "rectangle") return num(width)*num(thickness);
return 0;
};

const weightPerMeter = () => {
const a = area();
if (!a) return "0.00";
return ((a/1000000)*density*1000).toFixed(2);
};

const totalWeight = () => {
const l = num(length);
if (!l) return "0.00";
return ((weightPerMeter()*l)/1000).toFixed(2);
};

const [rw, setRw] = useState("");
const [rt, setRt] = useState("");
const [rd, setRd] = useState("");

const reduction = () => {
const a1 = num(rw)*num(rt);
const a2 = Math.PI*(num(rd)/2)**2;
if (!a1 || !a2) return "--";
return (a1/a2).toFixed(2);
};

const [inch, setInch] = useState("1");

const convert = () => {
try {
const val = eval(inch);
return (val * 25.4).toFixed(3);
} catch {
return "0.000";
}
};

return ( <Layout> <div className="bg-[#edf4f1] min-h-screen px-4 sm:px-6 md:px-16 py-12">

    <h1 className="text-3xl md:text-5xl text-center mb-12 font-serif">
      Steel Calculators
    </h1>

    <section className="max-w-6xl mx-auto mb-20">

      <h2 className="text-3xl md:text-4xl text-center mb-4">
        Weight Calculator
      </h2>

      <div className="bg-white rounded-2xl shadow p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="md:border-r md:pr-6">
          <h3 className="font-semibold mb-4">Step 1</h3>

          <div className="space-y-2 text-sm">
            {["round","square","rectangle"].map(s=>(
              <label key={s} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" checked={shape===s} onChange={()=>setShape(s)} />
                {s}
              </label>
            ))}
          </div>
        </div>

        <div className="md:border-r md:px-6 space-y-3">

          {shape === "round" && (
            <>
              <input value={diameter} onChange={e=>setDiameter(e.target.value)} placeholder="Diameter (mm)" className="input"/>
              <input value={length} onChange={e=>setLength(e.target.value)} placeholder="Length (mm)" className="input"/>
            </>
          )}

          {shape === "square" && (
            <>
              <input value={width} onChange={e=>setWidth(e.target.value)} placeholder="Side (mm)" className="input"/>
              <input value={length} onChange={e=>setLength(e.target.value)} placeholder="Length (mm)" className="input"/>
            </>
          )}

          {shape === "rectangle" && (
            <>
              <input value={width} onChange={e=>setWidth(e.target.value)} placeholder="Side 1 (mm)" className="input"/>
              <input value={thickness} onChange={e=>setThickness(e.target.value)} placeholder="Side 2 (mm)" className="input"/>
              <input value={length} onChange={e=>setLength(e.target.value)} placeholder="Length (mm)" className="input"/>
            </>
          )}

        </div>

        <div className="space-y-4">
          <div className="result">
            <p>Weight</p>
            <h2>{weightPerMeter()} kg/m</h2>
          </div>

          <div className="result">
            <p>Total</p>
            <h2>{totalWeight()} kg</h2>
          </div>
        </div>

      </div>
    </section>

    <section className="max-w-5xl mx-auto mb-20">

      <h2 className="text-3xl md:text-4xl text-center mb-6">
        Reduction Ratio
      </h2>

      <div className="bg-white rounded-2xl shadow p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="md:col-span-2 space-y-4">

          <input
            value={rw}
            onChange={e=>setRw(e.target.value)}
            placeholder="Initial Width (mm)"
            className="input"
          />

          <input
            value={rt}
            onChange={e=>setRt(e.target.value)}
            placeholder="Initial Thickness (mm)"
            className="input"
          />

          <input
            value={rd}
            onChange={e=>setRd(e.target.value)}
            placeholder="Final Diameter (mm)"
            className="input"
          />

        </div>

        <div className="flex items-center justify-center">

          <div className="result w-full">
            <p className="text-sm">Reduction Ratio</p>
            <h2 className="text-2xl">{reduction()}</h2>
          </div>

        </div>

      </div>

    </section>

    <section className="max-w-7xl mx-auto mb-20">

      <h2 className="text-3xl md:text-4xl text-center mb-8">
        Jominy Hardenability
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-xl shadow space-y-2">
          {[
            ["1.5 mm","43.59"],["3 mm","42.67"],["5 mm","37.61"],["7 mm","31.46"],
            ["9 mm","28.40"],["11 mm","25.66"],["13 mm","23.82"],["15 mm","21.85"],
            ["20 mm","18.89"],["25 mm","16.91"],["30 mm","15.12"],["35 mm","13.85"],
            ["40 mm","12.44"],["45 mm","11.62"],["50 mm","10.75"]
          ].map((i,idx)=>(
            <div key={idx} className="flex justify-between bg-gray-50 p-2 rounded text-sm">
              <span>{i[0]}</span>
              <b>{i[1]}</b>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl shadow space-y-2">
          {[
            ["2/16","69.18"],["3/16","42.67"],["5/16","59.69"],["7/16","49.92"],
            ["9/16","45.11"],["11/16","41.32"],["13/16","38.44"],["15/16","35.72"],
            ["17/16","33.10"],["19/16","30.55"],["21/16","28.01"],["23/16","25.80"],
            ["25/16","23.90"],["27/16","22.10"],["29/16","20.50"]
          ].map((i,idx)=>(
            <div key={idx} className="flex justify-between bg-gray-50 p-2 rounded text-sm">
              <span>{i[0]}</span>
              <b>{i[1]}</b>
            </div>
          ))}
        </div>

      </div>
    </section>

    <section className="max-w-3xl mx-auto">

      <h2 className="text-3xl md:text-4xl text-center mb-6">
        Inch → mm
      </h2>

      <div className="bg-white p-6 rounded-xl shadow">

        <input value={inch} onChange={e=>setInch(e.target.value)} className="input"/>

        <div className="result mt-4">
          <h2>{convert()} mm</h2>
        </div>

      </div>

    </section>

  </div>

  <style jsx>{`
    .input {
      width:100%;
      padding:12px;
      border-bottom:1px solid #ccc;
      outline:none;
    }
    .result {
      background:#134e4a;
      color:white;
      padding:18px;
      border-radius:12px;
      text-align:center;
    }
  `}</style>

</Layout>


);
}
