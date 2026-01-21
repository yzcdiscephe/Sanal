"use client";

import { useState } from "react";
import LeftPanel from "../components/LeftPanel";
import BuildingView from "../components/BuildingView";
import CostCards from "../components/CostCards";

export default function Home() {
  const [district, setDistrict] = useState("Fatih");
  const [area, setArea] = useState(100);
  const [facade, setFacade] = useState(false);

  return (
    <main className="container">
      <LeftPanel
        district={district}
        setDistrict={setDistrict}
        area={area}
        setArea={setArea}
        facade={facade}
        setFacade={setFacade}
      />

      <BuildingView area={area} facade={facade} />

      <CostCards
        district={district}
        area={area}
        facade={facade}
      />
    </main>
  );
}
