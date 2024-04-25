import React, { useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ searchTerm, animals, setAnimals }) {
  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch("https://api.petfinder.com/v2/animals", {
          mode: "cors",
          // credentials: "include",
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJGRERHY0dNbDBVWGFCVzU0MmQ2MHFEczdFODRneW1mb1FkS1gxTG5uMjhuQVRJSm1jZCIsImp0aSI6IjkzNWU0MzM0ODI2ODgzZTNlODRkMmYwN2UyYTRhNzhjNGU3ODhkZmQ4YmMzZmZkZmVjYjcxN2M3YTkxM2I4NzcxM2NmNmM0NTA1NjdiOWM1IiwiaWF0IjoxNzA3NDIyNzM0LCJuYmYiOjE3MDc0MjI3MzQsImV4cCI6MTcwNzQyNjMzNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.X3gFF690JHviH5VnRddd7FZ1e4JBm7_loVuQE0L1f6UFAX3SItVC3NCBzp9Db4NygB4iTrfdakscnXiLzbX14xMxyHoxyie-PMw_Otp4CQo-oBj-Q5mpsQWJPvZJJqlEfQAbQAjT56CuoQo0h-5W_w_dnNky7Vz2Elg0Pv5Zzc4WAN0anPdmNK36XzNYUGF7mjtzRutiRt_1ZVtTcvKOxn4IrjDZUd1ybTe4SJ3vJfa1OUvwW74IIqrJ_ohIuMbNGY5c3avNiAOCcKNx6DqhGFWQGOzxvfdxulRpuHMPGSus0yyw9rJGpN0ce2MG2uJAJlhMBwfgcShc_oNtAJbPtw`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setAnimals(data.animals);
        } else {
          console.error("Fehler beim Abrufen der Daten");
        }
      } catch (error) {
        console.error("Fehler beim Fetchen der Daten:", error);
      }
    };

    fetchAnimals();
  }, [setAnimals]);

  const filteredAnimals = animals.filter((animal) =>
    animal.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="card-container">
        {filteredAnimals.map((animal) => (
          <Link
            className="card"
            to="/animal-information"
            state={{ animal }}
            key={animal.id}
          >
            <div>
              <div className="card-image">
                {animal.photos && animal.photos.length > 0 ? (
                  <img src={animal.photos[0].medium} alt="Placeholder" />
                ) : (
                  <img src="/tiere.jpeg" alt="Placeholder" />
                )}
              </div>
              <div className="card-content">
                <h2 className="card-title">{animal.name}</h2>
                <h3 className="card-text">{animal.type}</h3>
                <p className="card-text">{animal.description}</p>
                <ul className="tag-list">
                  {animal.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Card;
