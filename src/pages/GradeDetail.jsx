import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";

const H13 = {
  name: "H13 ",
  
  title: (
  <>
    H13 | 1.2344 | X40CrMoV5-1 
    <br />
    Hot Work Tool Steel
  </>
),
  description:
    "Chromium-molybdenum hot work tool steel with high toughness, excellent thermal fatigue resistance and good wear resistance.",

  international: [
    { country: "USA", standard: "ASTM A681", grade: "H13" },
    { country: "Germany", standard: "DIN EN ISO 4957", grade: "1.2344 / X40CrMoV5-1" },
    { country: "Japan", standard: "JIS G4404", grade: "SKD61" },
    { country: "India", standard: "IS", grade: "H13 Equivalent" },
  ],

  chemical: [
    { element: "C", value: "0.32–0.45%" },
    { element: "Si", value: "0.80–1.20%" },
    { element: "Mn", value: "0.20–0.50%" },
    { element: "Cr", value: "4.75–5.50%" },
    { element: "Mo", value: "1.10–1.75%" },
    { element: "V", value: "0.80–1.20%" },
  ],

  physical: [
    { prop: "Density", value: "7.80 g/cm³" },
    { prop: "Thermal Conductivity", value: "28–30 W/mK" },
    { prop: "Specific Heat", value: "460 J/kgK" },
  ],

  mechanical: [
    { prop: "Hardness (working)", value: "48–52 HRC" },
    { prop: "Tensile Strength", value: "~1500 MPa" },
    { prop: "Impact Toughness", value: "High" },
  ],

  heat: [
    { step: "Annealing", value: "840–880°C, furnace cool" },
    { step: "Austenitizing", value: "1000–1050°C" },
    { step: "Quenching", value: "Air / Oil" },
    { step: "Tempering", value: "550–650°C (2–3 times)" },
  ],
 


  applications: [
    "Die casting dies",
    "Hot forging tools",
    "Extrusion dies",
    "Plastic molds",
    "Hot shear blades",
  ],

  supply: [
    "Round Bar: Ø20–400 mm",
    "Flat: available",
    "Block: custom sizes",
  ],
};

const H11 = {
  name: "H11",
title: (
  <>
    H11 | 1.2343 | X37CrMoV5-1 
    <br />
    Hot Work Tool Steel
  </>
),
  description:
    "Chromium-molybdenum hot work tool steel with excellent toughness, high thermal fatigue resistance and improved ductility compared to H13.",

  international: [
    { country: "USA", standard: "ASTM A681", grade: "H11" },
    { country: "Germany", standard: "DIN EN ISO 4957", grade: "1.2343 / X37CrMoV5-1" },
    { country: "Japan", standard: "JIS G4404", grade: "SKD6" },
    { country: "India", standard: "IS", grade: "H11 Equivalent" },
  ],

  chemical: [
    { element: "C", value: "0.35–0.42%" },
    { element: "Si", value: "0.80–1.20%" },
    { element: "Mn", value: "0.20–0.50%" },
    { element: "Cr", value: "4.75–5.50%" },
    { element: "Mo", value: "1.10–1.75%" },
    { element: "V", value: "0.30–0.60%" },
  ],

  physical: [
    { prop: "Density", value: "7.80 g/cm³" },
    { prop: "Thermal Conductivity", value: "28–32 W/mK" },
    { prop: "Specific Heat", value: "460 J/kgK" },
  ],

  mechanical: [
    { prop: "Hardness (working)", value: "44–50 HRC" },
    { prop: "Tensile Strength", value: "1300–1600 MPa" },
    { prop: "Impact Toughness", value: "Very High" },
    { prop: "Wear Resistance", value: "Moderate" },
  ],

  heat: [
    { step: "Annealing", value: "840–880°C, slow cooling" },
    { step: "Austenitizing", value: "1000–1030°C" },
    { step: "Quenching", value: "Air / Oil" },
    { step: "Tempering", value: "550–650°C (multiple cycles)" },
  ],

  applications: [
    "Forging dies",
    "Extrusion tooling",
    "Hot work punches",
    "Die casting components",
    "Aerospace tooling",
  ],

  supply: [
    "Round Bar: Ø20–400 mm",
    "Flat: available",
    "Blocks: custom sizes",
  ],
};


const H10 = {
  name: "H10",
  title: (
  <>
    H10 | 1.2365 | X32CrMoV3-3 
    <br />
    Hot Work Tool Steel
  </>
),
  description:
    "Chromium-molybdenum hot work tool steel with lower chromium content than H13, offering higher thermal conductivity and improved resistance to thermal cracking.",

  international: [
    { country: "USA", standard: "ASTM A681", grade: "H10" },
    { country: "Germany", standard: "DIN EN ISO 4957", grade: "1.2365 / X32CrMoV3-3" },
    { country: "Japan", standard: "JIS G4404", grade: "SKD7" },
    { country: "India", standard: "IS", grade: "H10 Equivalent" },
  ],

  chemical: [
    { element: "C", value: "0.28–0.35%" },
    { element: "Si", value: "0.80–1.20%" },
    { element: "Mn", value: "0.20–0.50%" },
    { element: "Cr", value: "2.80–3.50%" },
    { element: "Mo", value: "2.50–3.20%" },
    { element: "V", value: "0.30–0.60%" },
  ],

  physical: [
    { prop: "Density", value: "7.80 g/cm³" },
    { prop: "Thermal Conductivity", value: "32–36 W/mK" },
    { prop: "Specific Heat", value: "460 J/kgK" },
  ],

  mechanical: [
    { prop: "Hardness (working)", value: "38–45 HRC" },
    { prop: "Tensile Strength", value: "1200–1500 MPa" },
    { prop: "Thermal Fatigue Resistance", value: "Excellent" },
    { prop: "Wear Resistance", value: "Moderate" },
  ],

  heat: [
    { step: "Annealing", value: "840–880°C, slow cooling" },
    { step: "Austenitizing", value: "980–1030°C" },
    { step: "Quenching", value: "Air / Oil" },
    { step: "Tempering", value: "550–650°C (multiple cycles)" },
  ],

  applications: [
    "Hot punches",
    "Mandrels",
    "Die casting inserts",
    "Extrusion tooling",
    "Forging dies",
  ],

  supply: [
    "Round Bar: Ø20–400 mm",
    "Flat: available",
    "Blocks: custom sizes",
  ],
};

const H12 = {
  name: "H12",
  title: (
  <>
    H12 | 1.2606 | X37CrMoW5-1 
    <br />
    Hot Work Tool Steel
  </>
),
  description:
    "Tungsten-containing hot work tool steel offering higher wear resistance than H11/H13 with good hot strength and resistance to thermal fatigue.",

  international: [
    { country: "USA", standard: "ASTM A681", grade: "H12" },
    { country: "Germany", standard: "DIN EN ISO 4957", grade: "1.2606 / X37CrMoW5-1" },
    { country: "Japan", standard: "JIS G4404", grade: "SKD62" },
    { country: "India", standard: "IS", grade: "H12 Equivalent" },
  ],

  chemical: [
    { element: "C", value: "0.32–0.40%" },
    { element: "Si", value: "0.80–1.20%" },
    { element: "Mn", value: "0.20–0.50%" },
    { element: "Cr", value: "4.75–5.50%" },
    { element: "Mo", value: "1.20–1.60%" },
    { element: "W", value: "1.00–1.50%" },
    { element: "V", value: "0.30–0.60%" },
  ],

  physical: [
    { prop: "Density", value: "7.80 g/cm³" },
    { prop: "Thermal Conductivity", value: "26–30 W/mK" },
    { prop: "Specific Heat", value: "460 J/kgK" },
  ],

  mechanical: [
    { prop: "Hardness (working)", value: "44–52 HRC" },
    { prop: "Tensile Strength", value: "1300–1600 MPa" },
    { prop: "Wear Resistance", value: "High" },
    { prop: "Thermal Fatigue Resistance", value: "Good" },
  ],

  heat: [
    { step: "Annealing", value: "840–880°C, slow cooling" },
    { step: "Austenitizing", value: "1000–1050°C" },
    { step: "Quenching", value: "Air / Oil" },
    { step: "Tempering", value: "550–650°C (2–3 cycles)" },
  ],

  applications: [
    "Hot extrusion dies",
    "Forging dies",
    "Hot work tooling",
    "Wear-resistant inserts",
    "Die casting components",
  ],

  supply: [
    "Round Bar: Ø20–400 mm",
    "Flat: available",
    "Blocks: custom sizes",
  ],
};

const S7 = {
  name: "S7 ",
  title: (
  <>
    S7 | 1.2355 | 45CrMoV7 
    <br />
    Shock Resistant Tool Steel
  </>
),
  description:
    "Shock-resistant air-hardening tool steel with exceptional impact toughness, good wear resistance, and high strength. Ideal for applications involving heavy impact and dynamic loading.",

  international: [
    { country: "USA", standard: "ASTM A681", grade: "S7" },
    { country: "Germany", standard: "DIN EN ISO 4957", grade: "1.2355 / 45CrMoV7" },
    { country: "Japan", standard: "JIS", grade: "Equivalent Grade" },
    { country: "India", standard: "IS", grade: "S7 Equivalent" },
  ],

  chemical: [
    { element: "C", value: "0.45–0.55%" },
    { element: "Si", value: "0.20–0.80%" },
    { element: "Mn", value: "0.20–0.70%" },
    { element: "Cr", value: "3.00–3.50%" },
    { element: "Mo", value: "1.30–1.80%" },
    { element: "V", value: "0.20–0.30%" },
  ],

  physical: [
    { prop: "Density", value: "7.80 g/cm³" },
    { prop: "Thermal Conductivity", value: "30–35 W/mK" },
    { prop: "Specific Heat", value: "460 J/kgK" },
  ],

  mechanical: [
    { prop: "Hardness (working)", value: "52–58 HRC" },
    { prop: "Tensile Strength", value: "1700–2000 MPa" },
    { prop: "Impact Toughness", value: "Extremely High" },
    { prop: "Wear Resistance", value: "Moderate" },
  ],

  heat: [
    { step: "Annealing", value: "800–850°C, slow cooling" },
    { step: "Austenitizing", value: "900–950°C" },
    { step: "Quenching", value: "Air hardening" },
    { step: "Tempering", value: "500–600°C (multiple cycles)" },
  ],

  applications: [
    "Chisels",
    "Punches",
    "Shear blades",
    "Swaging dies",
    "Heavy-duty tooling",
  ],

  supply: [
    "Round Bar: Ø20–400 mm",
    "Flat: available",
    "Blocks: custom sizes",
  ],
};


const A2 = {
  name: "A2 ",
  title: (
  <>
    A2 | 1.2363 | X100CrMoV5
    <br />
    Cold Work Tool Steel
  </>
),
  description:
    "Air-hardening cold work tool steel with excellent dimensional stability, high wear resistance, and good toughness. Widely used for precision tooling and dies.",

  international: [
    { country: "USA", standard: "ASTM A681", grade: "A2" },
    { country: "Germany", standard: "DIN EN ISO 4957", grade: "1.2363 / X100CrMoV5" },
    { country: "Japan", standard: "JIS G4404", grade: "SKD12" },
    { country: "India", standard: "IS", grade: "A2 Equivalent" },
  ],

  chemical: [
    { element: "C", value: "0.95–1.05%" },
    { element: "Si", value: "0.10–0.40%" },
    { element: "Mn", value: "0.50–1.00%" },
    { element: "Cr", value: "4.75–5.50%" },
    { element: "Mo", value: "0.90–1.40%" },
    { element: "V", value: "0.15–0.50%" },
  ],

  physical: [
    { prop: "Density", value: "7.85 g/cm³" },
    { prop: "Thermal Conductivity", value: "20–25 W/mK" },
    { prop: "Specific Heat", value: "460 J/kgK" },
  ],

  mechanical: [
    { prop: "Hardness (working)", value: "57–62 HRC" },
    { prop: "Compressive Strength", value: "≈2500 MPa" },
    { prop: "Wear Resistance", value: "High" },
    { prop: "Toughness", value: "Good" },
  ],

  heat: [
    { step: "Annealing", value: "800–850°C, slow cooling" },
    { step: "Austenitizing", value: "950–980°C" },
    { step: "Quenching", value: "Air hardening" },
    { step: "Tempering", value: "150–550°C (2–3 cycles depending on hardness)" },
  ],

  applications: [
    "Blanking dies",
    "Forming dies",
    "Thread rolling dies",
    "Punches",
    "Precision tools",
  ],

  supply: [
    "Round Bar: Ø20–400 mm",
    "Flat: available",
    "Blocks: custom sizes",
  ],
};

const D2 = {
  name: "D2",
  title: (
  <>
    D2 | 1.2379 | X153CrMoV12-1 
    <br />
    Cold Work Tool Steel
  </>
),
  description:
    "High carbon, high chromium cold work tool steel with extremely high wear resistance, good compressive strength, and moderate toughness. Widely used for long production runs.",

  international: [
    { country: "USA", standard: "ASTM A681", grade: "D2" },
    { country: "Germany", standard: "DIN EN ISO 4957", grade: "1.2379 / X153CrMoV12-1" },
    { country: "Japan", standard: "JIS G4404", grade: "SKD11" },
    { country: "India", standard: "IS", grade: "D2 Equivalent" },
  ],

  chemical: [
    { element: "C", value: "1.40–1.60%" },
    { element: "Si", value: "0.10–0.60%" },
    { element: "Mn", value: "0.20–0.60%" },
    { element: "Cr", value: "11.00–13.00%" },
    { element: "Mo", value: "0.70–1.20%" },
    { element: "V", value: "0.70–1.10%" },
  ],

  physical: [
    { prop: "Density", value: "7.70–7.75 g/cm³" },
    { prop: "Thermal Conductivity", value: "20–25 W/mK" },
    { prop: "Specific Heat", value: "460 J/kgK" },
  ],

  mechanical: [
    { prop: "Hardness (working)", value: "58–62 HRC" },
    { prop: "Compressive Strength", value: "≈2700 MPa" },
    { prop: "Wear Resistance", value: "Very High" },
    { prop: "Toughness", value: "Moderate" },
  ],

  heat: [
    { step: "Annealing", value: "850–900°C, slow cooling" },
    { step: "Austenitizing", value: "1000–1040°C" },
    { step: "Quenching", value: "Air / Oil" },
    { step: "Tempering", value: "150–550°C (multiple cycles depending on hardness)" },
  ],

  applications: [
    "Blanking dies",
    "Stamping dies",
    "Slitting knives",
    "Cold forming tools",
    "Wear resistant components",
  ],

  supply: [
    "Round Bar: Ø20–400 mm",
    "Flat: available",
    "Blocks: custom sizes",
  ],
};


const D3 = {
  name: "D3",
title: (
  <>
    D3 | 1.2080 | X210Cr12 
    <br />
    Cold Work Tool Steel
  </>
),
  description:
    "High carbon, high chromium cold work tool steel with extremely high wear resistance and hardness. Offers superior abrasion resistance but lower toughness compared to D2.",

  international: [
    { country: "USA", standard: "ASTM A681", grade: "D3" },
    { country: "Germany", standard: "DIN EN ISO 4957", grade: "1.2080 / X210Cr12" },
    { country: "Japan", standard: "JIS G4404", grade: "SKD1" },
    { country: "India", standard: "IS", grade: "D3 Equivalent" },
  ],

  chemical: [
    { element: "C", value: "2.00–2.35%" },
    { element: "Si", value: "0.10–0.60%" },
    { element: "Mn", value: "0.20–0.60%" },
    { element: "Cr", value: "11.00–13.00%" },
    { element: "Mo", value: "≤0.50%" },
    { element: "V", value: "≤0.30%" },
  ],

  physical: [
    { prop: "Density", value: "7.65–7.75 g/cm³" },
    { prop: "Thermal Conductivity", value: "18–22 W/mK" },
    { prop: "Specific Heat", value: "460 J/kgK" },
  ],

  mechanical: [
    { prop: "Hardness (working)", value: "60–64 HRC" },
    { prop: "Compressive Strength", value: "≈2800 MPa" },
    { prop: "Wear Resistance", value: "Extremely High" },
    { prop: "Toughness", value: "Low (brittle compared to D2)" },
  ],

  heat: [
    { step: "Annealing", value: "850–900°C, slow cooling" },
    { step: "Austenitizing", value: "950–980°C" },
    { step: "Quenching", value: "Oil / Air" },
    { step: "Tempering", value: "150–300°C (low temp tempering)" },
  ],

  applications: [
    "Cold work dies",
    "Shear blades",
    "Punches",
    "Wear plates",
    "Cutting tools for abrasive materials",
  ],

  supply: [
    "Round Bar: Ø20–400 mm",
    "Flat: available",
    "Blocks: custom sizes",
  ],
};

const O1 = {
  name: "O1",
title: (
  <>
    O1 | 1.2510 | 100MnCrW4 
    <br />
    Cold Work Tool Steel
  </>
),
  description:
    "Oil-hardening cold work tool steel with excellent wear resistance, good dimensional stability, and fine cutting edge retention. Ideal for precision tools and small batch production.",

  international: [
    { country: "USA", standard: "ASTM A681", grade: "O1" },
    { country: "Germany", standard: "DIN EN ISO 4957", grade: "1.2510 / 100MnCrW4" },
    { country: "Japan", standard: "JIS G4404", grade: "SKS3" },
    { country: "India", standard: "IS", grade: "O1 Equivalent" },
  ],

  chemical: [
    { element: "C", value: "0.90–1.00%" },
    { element: "Si", value: "0.10–0.35%" },
    { element: "Mn", value: "1.00–1.40%" },
    { element: "Cr", value: "0.40–0.60%" },
    { element: "W", value: "0.40–0.60%" },
    { element: "V", value: "≤0.30%" },
  ],

  physical: [
    { prop: "Density", value: "7.85 g/cm³" },
    { prop: "Thermal Conductivity", value: "20–25 W/mK" },
    { prop: "Specific Heat", value: "460 J/kgK" },
  ],

  mechanical: [
    { prop: "Hardness (working)", value: "58–62 HRC" },
    { prop: "Wear Resistance", value: "High" },
    { prop: "Toughness", value: "Moderate" },
    { prop: "Dimensional Stability", value: "Excellent" },
  ],

  heat: [
    { step: "Annealing", value: "750–800°C, slow cooling" },
    { step: "Austenitizing", value: "780–820°C" },
    { step: "Quenching", value: "Oil hardening" },
    { step: "Tempering", value: "150–250°C (depending on hardness)" },
  ],

  applications: [
    "Cutting tools",
    "Knives and blades",
    "Woodworking tools",
    "Punches",
    "Measuring tools",
  ],

  supply: [
    "Round Bar: Ø10–300 mm",
    "Flat: available",
    "Blocks: custom sizes",
  ],
};



const L6 = {
  name: "L6",
  title: (
  <>
    L6 | 1.2714 | 55NiCrMoV7 
    <br />
    Shock Resistant Tool Steel
  </>
),
  description:
    "Nickel-chromium-molybdenum alloy tool steel with excellent toughness, high strength, and good wear resistance. Known for superior shock resistance and deep hardening capability.",

  international: [
    { country: "USA", standard: "AISI", grade: "L6" },
    { country: "Germany", standard: "DIN EN ISO 4957", grade: "1.2714 / 55NiCrMoV7" },
    { country: "Japan", standard: "JIS", grade: "Equivalent Grade" },
    { country: "India", standard: "IS", grade: "L6 Equivalent" },
  ],

  chemical: [
    { element: "C", value: "0.50–0.60%" },
    { element: "Si", value: "0.10–0.40%" },
    { element: "Mn", value: "0.50–0.80%" },
    { element: "Cr", value: "0.60–1.20%" },
    { element: "Ni", value: "1.25–2.00%" },
    { element: "Mo", value: "0.25–0.35%" },
    { element: "V", value: "≤0.30%" },
  ],

  physical: [
    { prop: "Density", value: "7.85 g/cm³" },
    { prop: "Thermal Conductivity", value: "30–35 W/mK" },
    { prop: "Specific Heat", value: "460 J/kgK" },
  ],

  mechanical: [
    { prop: "Hardness (working)", value: "50–56 HRC" },
    { prop: "Tensile Strength", value: "1500–1800 MPa" },
    { prop: "Impact Toughness", value: "Very High" },
    { prop: "Wear Resistance", value: "Moderate" },
  ],

  heat: [
    { step: "Annealing", value: "800–850°C, slow cooling" },
    { step: "Austenitizing", value: "830–870°C" },
    { step: "Quenching", value: "Oil hardening" },
    { step: "Tempering", value: "150–550°C (depending on application)" },
  ],

  applications: [
    "Heavy-duty gears",
    "Shafts",
    "Forging dies",
    "Crankshafts",
    "Punches and tools requiring shock resistance",
  ],

  supply: [
    "Round Bar: Ø20–400 mm",
    "Flat: available",
    "Blocks: custom sizes",
  ],
};

 
const Steel4140 = {
  name: "4140 ",
  title: (
  <>
    AISI 4140 | 42CrMo4 | EN19 
    <br />
    Engineering Alloy Steel
  </>
),
  description:
    "Chromium-molybdenum alloy steel known for high strength, toughness, fatigue resistance, and good hardenability. Widely used in engineering and automotive applications.",

  international: [
    { country: "USA", standard: "AISI", grade: "4140" },
    { country: "Germany", standard: "DIN EN 10083", grade: "42CrMo4 / 1.7225" },
    { country: "UK", standard: "BS", grade: "EN19" },
    { country: "India", standard: "IS", grade: "EN19 Equivalent" },
  ],

  chemical: [
    { element: "C", value: "0.38–0.43%" },
    { element: "Si", value: "0.15–0.35%" },
    { element: "Mn", value: "0.75–1.00%" },
    { element: "Cr", value: "0.80–1.10%" },
    { element: "Mo", value: "0.15–0.25%" },
  ],

  physical: [
    { prop: "Density", value: "7.85 g/cm³" },
    { prop: "Thermal Conductivity", value: "42–45 W/mK" },
    { prop: "Specific Heat", value: "475 J/kgK" },
  ],

  mechanical: [
    { prop: "Tensile Strength", value: "850–1000 MPa" },
    { prop: "Yield Strength", value: "680–900 MPa" },
    { prop: "Hardness (quenched & tempered)", value: "28–34 HRC" },
    { prop: "Fatigue Strength", value: "High" },
  ],

  heat: [
    { step: "Annealing", value: "800–850°C, furnace cool" },
    { step: "Normalizing", value: "870–900°C" },
    { step: "Austenitizing", value: "820–870°C" },
    { step: "Quenching", value: "Oil / Water" },
    { step: "Tempering", value: "540–680°C" },
  ],

  applications: [
    "Automotive shafts",
    "Gears",
    "Bolts & studs",
    "Crankshafts",
    "Machine components",
  ],

  supply: [
    "Round Bar: Ø10–500 mm",
    "Flat: available",
    "Forged: custom sizes",
  ],
};


const Steel5140 = {
  name: "5140 ",
  title: (
  <>
    AISI 5140 | EN47 | 41Cr4 
    <br />
    Spring Alloy Steel
  </>
),
  description:
    "Chromium alloy spring steel known for high strength, toughness, and excellent fatigue resistance. Commonly used in springs and components subjected to dynamic loads.",

  international: [
    { country: "USA", standard: "AISI", grade: "5140" },
    { country: "Germany", standard: "DIN EN 10083", grade: "41Cr4 / 1.7035" },
    { country: "UK", standard: "BS", grade: "EN47" },
    { country: "India", standard: "IS", grade: "EN47 Equivalent" },
  ],

  chemical: [
    { element: "C", value: "0.38–0.43%" },
    { element: "Si", value: "0.15–0.35%" },
    { element: "Mn", value: "0.70–0.90%" },
    { element: "Cr", value: "0.80–1.10%" },
  ],

  physical: [
    { prop: "Density", value: "7.85 g/cm³" },
    { prop: "Thermal Conductivity", value: "40–45 W/mK" },
    { prop: "Specific Heat", value: "470 J/kgK" },
  ],

  mechanical: [
    { prop: "Tensile Strength", value: "850–1000 MPa" },
    { prop: "Yield Strength", value: "600–850 MPa" },
    { prop: "Hardness (quenched & tempered)", value: "28–32 HRC" },
    { prop: "Fatigue Resistance", value: "Very High" },
  ],

  heat: [
    { step: "Annealing", value: "800–850°C, furnace cool" },
    { step: "Normalizing", value: "850–880°C" },
    { step: "Austenitizing", value: "820–860°C" },
    { step: "Quenching", value: "Oil / Water" },
    { step: "Tempering", value: "400–650°C" },
  ],

  applications: [
    "Leaf springs",
    "Coil springs",
    "Automotive suspension parts",
    "Heavy duty shafts",
    "Spring loaded components",
  ],

  supply: [
    "Round Bar: Ø10–400 mm",
    "Flat: available",
    "Spring steel flats & strips",
  ],
};


const Steel4340 = {
  name: "4340 ",
  title: (
  <>
    AISI 4340 | EN24 | 34CrNiMo6 
    <br />
    High Strength Alloy Steel
  </>
),
  description:
    "Nickel-chromium-molybdenum alloy steel with exceptional strength, toughness, fatigue resistance, and impact resistance. Widely used in aerospace, automotive, and heavy-duty engineering applications.",

  international: [
    { country: "USA", standard: "AISI", grade: "4340" },
    { country: "Germany", standard: "DIN EN 10083", grade: "34CrNiMo6 / 1.6582" },
    { country: "UK", standard: "BS", grade: "EN24" },
    { country: "India", standard: "IS", grade: "EN24 Equivalent" },
  ],

  chemical: [
    { element: "C", value: "0.38–0.43%" },
    { element: "Si", value: "0.15–0.35%" },
    { element: "Mn", value: "0.60–0.80%" },
    { element: "Cr", value: "0.70–0.90%" },
    { element: "Ni", value: "1.65–2.00%" },
    { element: "Mo", value: "0.20–0.30%" },
  ],

  physical: [
    { prop: "Density", value: "7.85 g/cm³" },
    { prop: "Thermal Conductivity", value: "35–40 W/mK" },
    { prop: "Specific Heat", value: "475 J/kgK" },
  ],

  mechanical: [
    { prop: "Tensile Strength", value: "1000–1310 MPa" },
    { prop: "Yield Strength", value: "850–1080 MPa" },
    { prop: "Hardness (quenched & tempered)", value: "30–40 HRC" },
    { prop: "Fatigue Strength", value: "Very High" },
    { prop: "Impact Toughness", value: "Excellent" },
  ],

  heat: [
    { step: "Annealing", value: "800–850°C, furnace cool" },
    { step: "Normalizing", value: "850–880°C" },
    { step: "Austenitizing", value: "830–870°C" },
    { step: "Quenching", value: "Oil / Water" },
    { step: "Tempering", value: "450–650°C" },
  ],

  applications: [
    "Aerospace components",
    "Aircraft landing gear",
    "Heavy duty shafts",
    "Gears",
    "Oil & gas equipment",
  ],

  supply: [
    "Round Bar: Ø10–500 mm",
    "Flat: available",
    "Forged: custom sizes",
  ],
};



const Steel34CrNiMo6 = {
  name: "34CrNiMo6",
  title: (
  <>
    34CrNiMo6 | 1.6582 | EN24 
    <br />
    High Strength Alloy Steel
  </>
),
  description:
    "Nickel-chromium-molybdenum alloy steel with excellent strength, toughness, fatigue resistance, and impact resistance. Widely used in heavy engineering and aerospace applications.",

  international: [
    { country: "Germany", standard: "DIN EN 10083", grade: "34CrNiMo6 / 1.6582" },
    { country: "USA", standard: "AISI", grade: "Equivalent to 4340" },
    { country: "UK", standard: "BS", grade: "EN24" },
    { country: "India", standard: "IS", grade: "EN24 Equivalent" },
  ],

  chemical: [
    { element: "C", value: "0.30–0.38%" },
    { element: "Si", value: "0.15–0.40%" },
    { element: "Mn", value: "0.50–0.80%" },
    { element: "Cr", value: "1.30–1.70%" },
    { element: "Ni", value: "1.30–1.70%" },
    { element: "Mo", value: "0.15–0.30%" },
  ],

  physical: [
    { prop: "Density", value: "7.85 g/cm³" },
    { prop: "Thermal Conductivity", value: "35–40 W/mK" },
    { prop: "Specific Heat", value: "470–480 J/kgK" },
  ],

  mechanical: [
    { prop: "Tensile Strength", value: "900–1100 MPa" },
    { prop: "Yield Strength", value: "700–900 MPa" },
    { prop: "Hardness (quenched & tempered)", value: "28–38 HRC" },
    { prop: "Fatigue Strength", value: "Very High" },
    { prop: "Impact Toughness", value: "Excellent" },
  ],

  heat: [
    { step: "Annealing", value: "800–850°C, furnace cool" },
    { step: "Normalizing", value: "850–880°C" },
    { step: "Austenitizing", value: "830–870°C" },
    { step: "Quenching", value: "Oil / Water" },
    { step: "Tempering", value: "450–650°C" },
  ],

  applications: [
    "Heavy duty shafts",
    "Gears",
    "Crankshafts",
    "Aerospace components",
    "Oil & gas equipment",
  ],

  supply: [
    "Round Bar: Ø10–500 mm",
    "Flat: available",
    "Forged: custom sizes",
  ],
};



const Steel18CrNiMo76 = {
  name: "18CrNiMo7-6 ",
  title: (
  <>
    18CrNiMo7-6 | 1.6587 
    <br />
    Case Hardening Alloy Steel
  </>
),
  description:
    "High-performance nickel-chromium-molybdenum case hardening steel with excellent core toughness and high surface hardness after carburizing. Widely used for heavy-duty gears and high-load transmission systems.",

  international: [
    { country: "Germany", standard: "DIN EN 10084", grade: "1.6587 / 18CrNiMo7-6" },
    { country: "USA", standard: "AISI", grade: "Equivalent to 9310 / 8620 modified" },
    { country: "UK", standard: "BS", grade: "En36C (similar)" },
    { country: "India", standard: "IS", grade: "Equivalent Grade" },
  ],

  chemical: [
    { element: "C", value: "0.15–0.21%" },
    { element: "Si", value: "0.15–0.35%" },
    { element: "Mn", value: "0.50–0.90%" },
    { element: "Cr", value: "1.50–1.80%" },
    { element: "Ni", value: "1.40–1.70%" },
    { element: "Mo", value: "0.25–0.35%" },
  ],

  physical: [
    { prop: "Density", value: "7.85 g/cm³" },
    { prop: "Thermal Conductivity", value: "35–40 W/mK" },
    { prop: "Specific Heat", value: "470 J/kgK" },
  ],

  mechanical: [
    { prop: "Core Tensile Strength", value: "900–1200 MPa" },
    { prop: "Case Hardness", value: "58–64 HRC (after carburizing)" },
    { prop: "Core Toughness", value: "Very High" },
    { prop: "Fatigue Strength", value: "Excellent" },
  ],

  heat: [
    { step: "Carburizing", value: "920–940°C (depth controlled)" },
    { step: "Hardening", value: "820–860°C" },
    { step: "Quenching", value: "Oil quench" },
    { step: "Tempering", value: "150–200°C" },
  ],

  applications: [
    "Wind turbine gears",
    "Heavy duty gearboxes",
    "Automotive transmission gears",
    "Planetary gears",
    "High load shafts",
  ],

  supply: [
    "Round Bar: Ø20–500 mm",
    "Forged: custom sizes",
    "Gear blanks: available",
  ],
};

  




const Steel30CrNiMo8 = {
  name: "30CrNiMo8",
title: (
  <>
    30CrNiMo8 | 1.6580 
    <br />
    High Strength Alloy Steel
  </>
),

  description:
    "Nickel-chromium-molybdenum alloy steel with high strength, toughness, and fatigue resistance. Widely used for heavy-duty engineering and automotive applications.",

  international: [
    { country: "Germany", standard: "DIN EN 10083", grade: "1.6580 / 30CrNiMo8" },
    { country: "USA", standard: "AISI", grade: "Equivalent to 4340 modified" },
    { country: "UK", standard: "BS", grade: "EN25" },
    { country: "India", standard: "IS", grade: "Equivalent Grade" },
  ],

  chemical: [
    { element: "C", value: "0.26–0.34%" },
    { element: "Si", value: "0.15–0.40%" },
    { element: "Mn", value: "0.50–0.80%" },
    { element: "Cr", value: "1.80–2.20%" },
    { element: "Ni", value: "2.00–2.50%" },
    { element: "Mo", value: "0.30–0.50%" },
  ],

  physical: [
    { prop: "Density", value: "7.85 g/cm³" },
    { prop: "Thermal Conductivity", value: "35–40 W/mK" },
    { prop: "Specific Heat", value: "470 J/kgK" },
  ],

  mechanical: [
    { prop: "Tensile Strength", value: "900–1200 MPa" },
    { prop: "Yield Strength", value: "700–950 MPa" },
    { prop: "Hardness", value: "28–38 HRC" },
    { prop: "Fatigue Strength", value: "Very High" },
    { prop: "Impact Toughness", value: "Excellent" },
  ],

  heat: [
    { step: "Annealing", value: "800–850°C, furnace cool" },
    { step: "Normalizing", value: "850–880°C" },
    { step: "Austenitizing", value: "830–870°C" },
    { step: "Quenching", value: "Oil / Water" },
    { step: "Tempering", value: "450–650°C" },
  ],

  applications: [
    "Heavy-duty shafts",
    "Gears",
    "Crankshafts",
    "Oil & gas components",
    "Aerospace parts",
  ],

  supply: [
    "Round Bar: Ø20–500 mm",
    "Flat: available",
    "Forged: custom sizes",
  ],
};


const NM400 = {
  name: "NM400 ",
  title: (
  <>
    NM400 
    <br />
    Abrasion Resistant Steel
  </>
),

  description:
    "High strength wear-resistant steel plate with good toughness and weldability, used in mining and construction industries.",

  international: [
    { country: "China", standard: "GB", grade: "NM400" },
    { country: "Europe", standard: "EN", grade: "Equivalent to Hardox 400" },
  ],

  chemical: [
    { element: "C", value: "≤0.30%" },
    { element: "Mn", value: "≤1.60%" },
    { element: "Cr", value: "≤1.50%" },
  ],

  physical: [
    { prop: "Density", value: "7.85 g/cm³" },
  ],

  mechanical: [
    { prop: "Hardness", value: "370–430 HBW" },
    { prop: "Impact Toughness", value: "Good" },
  ],

  heat: [
    { step: "Delivery Condition", value: "Quenched & tempered" },
  ],

  applications: [
    "Mining equipment",
    "Dump trucks",
    "Wear plates",
    "Excavator buckets",
  ],

  supply: [
    "Plates: 6–80 mm thickness",
    "Custom cut sizes",
  ],
};



const P20Ni = {
  name: "P20+Ni ",
  title: (
  <>
    P20+Ni | 1.2738 
    <br />
    Plastic Mold Steel
  </>
),

  description:
    "Nickel-alloyed version of P20 with improved toughness and polishability for high-end plastic molds.",

  international: [
    { country: "Germany", standard: "DIN", grade: "1.2738" },
    { country: "USA", standard: "AISI", grade: "P20+Ni" },
  ],

  chemical: [
    { element: "C", value: "0.35–0.45%" },
    { element: "Ni", value: "0.90–1.20%" },
    { element: "Cr", value: "1.80–2.10%" },
  ],

  physical: [
    { prop: "Density", value: "7.85 g/cm³" },
  ],

  mechanical: [
    { prop: "Hardness", value: "28–34 HRC" },
    { prop: "Toughness", value: "Improved vs P20" },
  ],

  heat: [
    { step: "Pre-hardened", value: "Delivered condition" },
  ],

  applications: [
    "Large plastic molds",
    "Injection molds",
    "Automotive mold bases",
  ],

  supply: [
    "Blocks",
    "Flat",
    "Pre-hardened plates",
  ],
};


const S136 = {
  name: "S136 ",
  title: (
  <>
    S136
    <br />
    Stainless Plastic Mold Steel
  </>
),

  description:
    "High chromium stainless mold steel with excellent corrosion resistance and mirror polishability.",

  international: [
    { country: "Sweden", standard: "Uddeholm", grade: "S136" },
    { country: "Germany", standard: "DIN", grade: "1.2083 equivalent" },
  ],

  chemical: [
    { element: "C", value: "0.38–0.45%" },
    { element: "Cr", value: "12.0–14.0%" },
  ],

  physical: [
    { prop: "Density", value: "7.75 g/cm³" },
  ],

  mechanical: [
    { prop: "Hardness", value: "48–52 HRC" },
    { prop: "Corrosion Resistance", value: "Excellent" },
  ],

  heat: [
    { step: "Hardening", value: "1000–1050°C" },
    { step: "Tempering", value: "200–300°C" },
  ],

  applications: [
    "Medical molds",
    "Food-grade molds",
    "Optical molds",
    "High polish plastic molds",
  ],

  supply: [
    "Blocks",
    "Flat",
    "Custom sizes",
  ],
};


const M2 = {
  name: "M2",
  title: (
  <>
    M2 | 1.3343 | HS6-5-2 
    <br />
    High Speed Steel
  </>
),

  description:
    "Standard molybdenum high speed steel with good wear resistance and toughness.",

  international: [
    { country: "USA", standard: "ASTM A600", grade: "M2" },
    { country: "Germany", standard: "DIN", grade: "1.3343" },
  ],

  chemical: [
    { element: "C", value: "0.85%" },
    { element: "W", value: "6.0%" },
    { element: "Mo", value: "5.0%" },
    { element: "V", value: "2.0%" },
  ],

  physical: [
    { prop: "Density", value: "8.10 g/cm³" },
  ],

  mechanical: [
    { prop: "Hardness", value: "62–66 HRC" },
    { prop: "Wear Resistance", value: "High" },
  ],

  heat: [
    { step: "Hardening", value: "1200°C" },
    { step: "Tempering", value: "550°C" },
  ],

  applications: [
    "Drills",
    "Cutting tools",
    "Milling cutters",
  ],

  supply: [
    "Round Bar",
    "Flat",
    "Tool blanks",
  ],
};

const M35 = {
  name: "M35",
  title: (
  <>
    M35 | 1.3243 | HS6-5-2-5 | SKH55 
    <br />
    Cobalt HSS
  </>
),

  description:
    "Cobalt-alloyed high speed steel (5% Co) with superior red hardness and hot hardness compared to M2. Maintains cutting edge at high temperatures.",

  international: [
    { country: "USA", standard: "ASTM A600", grade: "M35" },
    { country: "Germany", standard: "DIN EN ISO 4957", grade: "1.3243 / HS6-5-2-5" },
    { country: "Japan", standard: "JIS G4403", grade: "SKH55" },
    { country: "India", standard: "IS 1570 Pt5", grade: "M35 Equivalent" },
  ],
  
  chemical: [
    { element: "C", value: "0.80–0.90%" },
    { element: "Mn", value: "0.15–0.40%" },
    { element: "Si", value: "0.20–0.45%" },
    { element: "Cr", value: "3.75–4.50%" },
    { element: "Mo", value: "4.50–5.50%" },
    { element: "W", value: "5.50–6.75%" },
    { element: "V", value: "1.75–2.20%" },
    { element: "Co", value: "4.50–5.00%" },
    { element: "P", value: "≤0.030%" },
    { element: "S", value: "≤0.030%" },
  ],

  
  physical: [
    { prop: "Density", value: "8.18 g/cm³" },
    { prop: "Thermal Conductivity (20°C)", value: "19.5 W/m·K" },
    { prop: "Thermal Expansion (20–400°C)", value: "9.8 µm/m·K" },
    { prop: "Specific Heat", value: "410 J/kg·K" },
    { prop: "Electrical Resistivity", value: "0.63 µΩ·m" },
  ],

  
  mechanical: [
    { prop: "Hardness (hardened)", value: "64–67 HRC" },
    { prop: "Red Hardness @ 600°C", value: "~60 HRC (better than M2)" },
    { prop: "Transverse Rupture Strength", value: "3200–3800 MPa" },
    { prop: "Modulus of Elasticity", value: "225 GPa" },
    { prop: "Wear Resistance", value: "High" },
  ],

  
  heat: [
    { step: "Annealing", value: "870–900°C, furnace cool" },
    { step: "Preheating", value: "450°C → 870°C" },
    { step: "Austenitizing", value: "1200–1240°C (2–5 min)" },
    { step: "Quenching", value: "Salt bath / gas (rapid cooling)" },
    { step: "Tempering", value: "540–560°C (3 cycles, HRC 64–67)" },
  ],

  
  applications: [
    "Stainless steel drilling",
    "Titanium alloy machining",
    "High-speed milling cutters",
    "Taps for high tensile steel",
    "Heavy-duty end mills",
    "Thread rolling dies",
  ],

  
  supply: [
    "Round Bar: Ø2–150 mm",
    "Flat / Strip: available",
    "Tool blanks",
  ],
};


const Steel420 = {
  name: "420 ",
  title: (
  <>
    420 | 1.4021 | X20Cr13 
    <br />
    Martensitic Stainless Steel
  </>
),

  description:
    "General purpose stainless steel with good hardness and moderate corrosion resistance.",

  chemical: [
    { element: "C", value: "0.15–0.40%" },
    { element: "Cr", value: "12.0–14.0%" },
  ],

  mechanical: [
    { prop: "Hardness", value: "50–55 HRC" },
    { prop: "Corrosion Resistance", value: "Moderate" },
  ],

  applications: [
    "Knives",
    "Surgical tools",
    "Valves",
  ],

  supply: [
    "Round",
    "Flat",
  ],
};
const Steel420FM = {
  name: "420FM ",
  title: (
  <>
    420FM | 1.2085 
    <br />
    Free Machining Stainless
  </>
),

  description:
    "Improved machinability stainless steel with sulfur addition, used in mold bases.",

  chemical: [
    { element: "C", value: "0.30–0.40%" },
    { element: "Cr", value: "12.5–14.5%" },
    { element: "S", value: "Added for machinability" },
  ],

  mechanical: [
    { prop: "Hardness", value: "28–32 HRC" },
    { prop: "Machinability", value: "Very High" },
  ],

  applications: [
    "Mold bases",
    "Plastic tooling",
  ],

  supply: [
    "Blocks",
    "Flat",
  ],
};

const Steel422 = {
  name: "422",
  title: (
  <>
    422 
    <br />
    Heat Resistant Steel
  </>
),
  description: "High temperature stainless steel",

  mechanical: [
    { prop: "Strength", value: "High temp resistant" },
  ],

  applications: ["Turbines"],

  supply: ["Round"],
};

const Steel8620 = {
  name: "8620 ",
  title: (
  <>
    8620 
    <br />
    Case Hardening Steel
  </>
),

  description:
    "Low alloy carburizing steel with tough core and hard wear resistant surface.",

  chemical: [
    { element: "C", value: "0.18–0.23%" },
    { element: "Ni", value: "0.40–0.70%" },
    { element: "Cr", value: "0.40–0.60%" },
    { element: "Mo", value: "0.15–0.25%" },
  ],

  mechanical: [
    { prop: "Case Hardness", value: "58–62 HRC" },
    { prop: "Core Toughness", value: "High" },
  ],

  applications: [
    "Gears",
    "Camshafts",
    "Transmission parts",
  ],

  supply: [
    "Round",
    "Forged",
  ],
};


const NM500 = {
  name: "NM500 ",
title: (
  <>
    NM500 
    <br />
    Abrasion Resistant Steel
  </>
),

  description:
    "High hardness wear resistant plate for extreme abrasion environments.",

  mechanical: [
    { prop: "Hardness", value: "470–530 HBW" },
  ],

  applications: [
    "Mining",
    "Dump trucks",
    "Crusher liners",
  ],

  supply: [
    "Plates",
    "Cut sizes",
  ],
};

const P20 = {
  name: "P20",
title: (
  <>
    P20 | 1.2311 
    <br />
    Mold Steel
  </>
),

  description:
    "Pre-hardened mold steel with good machinability and polishability.",

  mechanical: [
    { prop: "Hardness", value: "28–32 HRC" },
  ],

  applications: [
    "Plastic molds",
    "Die holders",
  ],

  supply: [
    "Blocks",
    "Flat",
  ],
};

const P20S = {
  name: "P20S ",
  title: (
  <>
    P20S 
    <br />
    Free Machining Mold Steel
  </>
),

  description:
    "Sulfur-added P20 for better machinability.",

  mechanical: [
    { prop: "Machinability", value: "Very High" },
  ],

  applications: [
    "Fast machining molds",
  ],

  supply: [
    "Blocks",
    "Flat",
  ],
};

const M42 = {
  name: "M42 ",
  title: (
  <>
    M42 | 1.3247 | HS2-9-1-8 | SKH59 
    <br />
    Super Cobalt HSS
  </>
),

  description:
    "Super cobalt high speed steel (8% Co) with highest hot hardness among M-series HSS. Designed for machining superalloys and difficult materials at high temperatures.",
  international: [
    { country: "USA", standard: "ASTM A600", grade: "M42" },
    { country: "Germany", standard: "DIN EN ISO 4957", grade: "1.3247 / HS2-9-1-8" },
    { country: "Japan", standard: "JIS G4403", grade: "SKH59" },
    { country: "India", standard: "-", grade: "Import only" },
  ],

  chemical: [
    { element: "C", value: "1.05–1.15%" },
    { element: "Mn", value: "0.15–0.40%" },
    { element: "Si", value: "0.15–0.65%" },
    { element: "Cr", value: "3.50–4.25%" },
    { element: "Mo", value: "9.00–10.00%" },
    { element: "W", value: "1.15–1.85%" },
    { element: "V", value: "0.95–1.35%" },
    { element: "Co", value: "7.75–8.75%" },
    { element: "P", value: "≤0.030%" },
    { element: "S", value: "≤0.030%" },
  ],

  physical: [
    { prop: "Density", value: "8.20 g/cm³" },
    { prop: "Thermal Conductivity (20°C)", value: "20 W/m·K" },
    { prop: "Thermal Expansion (20–400°C)", value: "9.7 µm/m·K" },
    { prop: "Specific Heat", value: "415 J/kg·K" },
    { prop: "Electrical Resistivity", value: "0.64 µΩ·m" },
  ],

  mechanical: [
    { prop: "Hardness (hardened)", value: "65–70 HRC" },
    { prop: "Red Hardness @ 650°C", value: "~55 HRC (best in M-series)" },
    { prop: "Transverse Rupture Strength", value: "3000–3500 MPa" },
    { prop: "Wear Resistance", value: "Very High" },
    { prop: "Toughness", value: "Lower than M2/M35" },
  ],

  heat: [
    { step: "Annealing", value: "870–900°C, furnace cool" },
    { step: "Preheating", value: "450°C → 870°C" },
    { step: "Austenitizing", value: "1160–1190°C (2–3 min)" },
    { step: "Quenching", value: "Salt bath / gas (rapid cooling)" },
    { step: "Tempering", value: "525–540°C (3 cycles, HRC 65–70)" },
  ],

  applications: [
    "Superalloy machining (Inconel / Hastelloy)",
    "Titanium & aerospace cutting tools",
    "Hardened steel machining (>45 HRC)",
    "Aerospace drilling",
    "Heavy-duty broaches",
    "Gun drills (deep hole drilling)",
  ],

  supply: [
    "Round Bar: Ø2–100 mm",
    "Flat Bar: available",
    "Saw blades & bimetal products",
  ],
};


const materials = [
  H13,
  H11,
  H10,
  H12,
  S7,
  A2,
  D2,
  D3,
  O1,
  L6,

  Steel4140,
  Steel5140,
  Steel4340,
  Steel34CrNiMo6,
  Steel30CrNiMo8,

  Steel18CrNiMo76,
  Steel8620,

  NM400,
  NM500,

  P20,
  P20S,
  P20Ni,

  Steel420,
  Steel420FM,
  Steel422,
  S136,

  M2,
  M35,
  M42,
];

export default function GradesPage() {
  const [selected, setSelected] = useState(null);

  return (
    <Layout>
      <div
        className="bg-[#f5f7f8] min-h-screen pt-12 pb-20 px-6 md:px-20"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <div className="text-center mb-6">
          <h1
            className="text-5xl font-semibold text-gray-800"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Steel Grades
          </h1>

          <p className="text-gray-500 mt-4">
            Explore all available steel grades
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {materials.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -8 }}
              onClick={() => setSelected(item)}
              className="cursor-pointer p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-semibold text-teal-900">
                {item.name}
              </h2>

              <p className="text-gray-600 text-sm mt-2">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-start pt-6 z-50 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >

              <motion.div
                initial={{ scale: 0.95, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95 }}
                className="bg-white w-full max-w-6xl rounded-2xl p-8 relative mb-20"
              >

                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-6 top-4 text-xl"
                >
                  ✕
                </button>
                <h2
                  className="text-3xl font-semibold text-[#134e4a]"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {selected.name} — {selected.title}
                </h2>

                <p className="text-gray-600 mt-4 mb-8">
                  {selected.description || ""}
                </p>

                <div className="grid md:grid-cols-2 gap-6">

              {selected.international && <Box title="International Standards" data={selected.international} />}
{selected.chemical && <Box title="Chemical Composition" data={selected.chemical} />}
{selected.mechanical && <Box title="Mechanical Properties" data={selected.mechanical} />}
{selected.physical && <Box title="Physical Properties" data={selected.physical} />}
{selected.heat && <Box title="Heat Treatment" data={selected.heat} />}
{selected.applications && <ListBox title="Applications" data={selected.applications} />}
{selected.supply && <ListBox title="Supply" data={selected.supply} />}

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      </Layout>
    
  
  );
}

function Box({ title, data }) {
  return (
    <div className="bg-gray-50 p-5 rounded-xl border">
      <h3 className="font-semibold text-[#134e4a] mb-3">{title}</h3>

      {data.map((item, i) => (
        <div key={i} className="flex justify-between border-b py-2 text-sm">
          <span>
            {item.country || item.element || item.prop || item.step}
          </span>
          <span>
            {item.grade || item.value}
          </span>
        </div>
      ))}
    </div>
  );
}

function ListBox({ title, data }) {
  return (
    <div className="bg-gray-50 p-5 rounded-xl border">
      <h3 className="font-semibold text-[#134e4a] mb-3">{title}</h3>

      {data.map((item, i) => (
        <p key={i}>• {item}</p>
      ))}
    </div>
  );
}