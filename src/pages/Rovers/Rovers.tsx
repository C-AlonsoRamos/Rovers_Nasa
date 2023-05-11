import React, {useState, useEffect} from 'react'
import './Rovers.css'
import axios, {AxiosResponse} from 'axios'
import PhotoRover from '../../components/PhotoRover/PhotoRover'
import GalleryLayout from '../../Layouts/GalleryLayout/GalleryLayout'

interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
}

 export interface Photo {
  id: number;
  sol: number;
  camera: Camera ;
  img_src: string;
  earth_date: string;
  rover: Rover;
}

interface MarsPhotosResponse {
  photos: Photo[];
}


const Rovers = () : JSX.Element => {
  const nasaUrl = "https://api.nasa.gov/";
  const keyNasa = "kGMWzI6W2CWAe6nRkcLggmokojwadEEOgJHl77yO";
  const [rover, setRover] = useState<string | null>(null);
  const [sol, setSol] = useState<number>(100);
  const [camera, setCamera] = useState<string>("");
  const [mars, setMars] = useState<MarsPhotosResponse>({ photos: [] });
  

  useEffect(()=>{  
    const getPhotosRovers = async() =>{
    
    if(rover !== null) {
      const { data }: AxiosResponse<MarsPhotosResponse> = await axios.get(`${nasaUrl}mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${keyNasa}`);
      setMars({ photos: data.photos });
     
    }
  }
  getPhotosRovers()
  
  },[rover, sol, camera]);

  
  const btnRover = (roverName:string) =>{
    setRover(roverName)
  }
  const btnCamera = (cameraName:string ) => {
    setCamera(cameraName)
  }
  
  const selectRange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSol(parseInt(ev.target.value))
  }

  return (
    <main className='marsRovers'>
      <section className='sectionSearch'>
        <div className='rovers'>
          <div className='roverName'>
            <img  src="https://res.cloudinary.com/dy4mossqz/image/upload/v1683844836/img/rover_cmalji.png" alt="logo rover"/>
           {rover == null ? <h2>rover</h2> : <h2>{rover}</h2>}
          </div>
          <button onClick={() => btnRover('curiosity')}>Curiosity</button>
          <button onClick={() => btnRover('opportunity')}>Opportunity</button>
          <button onClick={() => btnRover('spirit')}>Spirit</button>
        </div>
        <div className='cameras'>
          <div className='cameraName'>
          <img  src="https://res.cloudinary.com/dy4mossqz/image/upload/v1683845053/img/751440_vheyn8.png" alt="logo camera"/>
          {camera == "" ? <h2>camera</h2> : <h2>{camera}</h2>}
          </div>
          <button onClick={() => btnCamera('fhaz')}>Fhaz</button>
          <button onClick={() => btnCamera('rhaz')}>Rhaz</button>
          <button onClick={() => btnCamera('navcam')}>Navcam</button>
        </div>
        <div className='sol'>
          <div className='solRange'>
             <img  src="https://res.cloudinary.com/dy4mossqz/image/upload/v1683845309/img/13420_nw3lvb.png" alt="logo sol"/>
          <h2>Sol - {sol}</h2>
          </div>
          <input type='range' id='sol' min="100"
        max="3200" onChange={selectRange} />
        </div>
      </section>
      <section className='photosRover'>
        {camera !== "" ? <GalleryLayout>
         {mars.photos.map((item) => <PhotoRover data={item} key ={item.id}/> )}   
        </GalleryLayout> : <div className='selectOption'><p className='selectOption'>Select the options, please</p></div> }
       
      </section>
    
    </main>
  )
}

export default Rovers
