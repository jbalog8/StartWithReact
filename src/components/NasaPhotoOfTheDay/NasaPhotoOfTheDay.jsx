import "./NasaPhotoOfTheDay.css";
import data from "./data.json";
import { useState } from "react";
import { useEffect } from "react";

function getPhotoOfTheDay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      resolve(data);
    }, 5000);
  });
}

export function NasaPhotoOfTheDay() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPhotoOfTheDay()
      .then((data) => {
        setData(data)
      })
      .catch(() => {
        setError(new Error("Something went wrong"));
      
      });
  }, []);

  console.log(data);

  if (error !== null) {
    return <div>
      Something went wrong
    </div>
  }
 
  
  if (data === null) {
    return <div>
      Loading...
    </div>
  }

  return (
    <figure className="nasa-photo-of-the-day">
      <img src={data.url} alt={data.title} />
      <figcaption>{data.explanation}</figcaption>
    </figure>
  )
}