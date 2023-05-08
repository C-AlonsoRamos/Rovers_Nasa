import React, { useState, useEffect } from "react";
import './PhotoDay.css'
import axios, { AxiosResponse } from "axios";
import Figure from "../../components/Figure/Figure"

 export interface Apod {
    date: string;
    explanation: string;
    hdurl?: string;
    media_type?: string;
    service_version?: string;
    title: string;
    url: string;
    copyright: string;
  }


const PhotoDay = () : JSX.Element => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [apod, setApod] = useState<Apod>({
    date: "",
    explanation: "",
    title: "",
    url: "",
    copyright: "",
  });
  const [date, setDate] = useState<string>(today);
  const nasaUrl = "https://api.nasa.gov/";
  const keyNasa = "kGMWzI6W2CWAe6nRkcLggmokojwadEEOgJHl77yO";
  
  useEffect(() => {
    const getApod = async () => {
      const { data }: AxiosResponse<Apod> = await axios.get(
        `${nasaUrl}planetary/apod?date=${date}&api_key=${keyNasa}`
      );
      setApod(data);
    };
    getApod();
  }, [date]);

  const inputSearch = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setDate(ev.target.value);
  };

  return (
    <main>
      <section className="photoDay">
        <article>
          <h1>Astronomy Picture of the Day</h1>
          <input className="form-date" type="date" id="photo-day" onChange={inputSearch} />
        </article>
          {date > today ? (
          <h2>Please choose a previous date</h2>
           ) : (
          <Figure data={apod} />
            )}
      </section>
    </main>
  )
}

export default PhotoDay
