import React, { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";

/*
const [petImage, setpetImage] = useState(pet.image);
  const handlePet = () => setpetImage(pet.image2);
  onClick={handlePet}
  */
function PetsList() {
  const [query, setQuery] = useState(""); // 1
  const [type, setType] = useState("");
  const petList = pets
    .filter((pet) => pet.name.toLowerCase().includes(query.toLowerCase()))
    .filter((pet) => pet.type.includes(type))
    .map((pet) => <PetItem pet={pet} key={pet.id} />);

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(event) => setQuery(event.target.value)} // 3
                />
              </div>
              <br />
              Type:
              <select
                className="form-select"
                onChange={(event) => setType(event.target.value)}
              >
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
