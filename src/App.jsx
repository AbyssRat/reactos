import { useState, useEffect } from 'react'
import './App.css'

function App() {
  //Készíts komponenst, amely a konzolra kiírja: „Komponens betöltődött”, és csak egyszer fusson le.
  useEffect(() => {
    console.log("Komponens betöltődött")
  }, [])
  
  //Hozz létre egy count state-et. A count változásakor írd ki a konzolra az aktuális értéket. useEffect
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(`Aktuális count érték: ${count}`)
  }, [count])

 
  //Input mező segítségével módosítsd a document.title értékét: „Szia, ...”.  
  const [name, setName] = useState("")
  useState(() => {
    document.title = `Szia, ${name}`
  }, [name])
  //Komponens betöltésekor 2 mp késleltetéssel tölts be adatot (setTimeout). Amíg tölt, jelenjen meg:„Betöltés…”.  useEffect
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setData("Adat betöltve")
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])
  
  
  //Készíts másodpercenként növekvő számlálót setInterval segítségével. Biztosítsd a megfelelő cleanup-et.  useEffect

  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  

  //Figyeld az ablak méretének változását, és írd ki: Mobil / Tablet / Desktop. useEffect
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
      if (window.innerWidth < 768) {
        console.log("Mobil")
      } else if (window.innerWidth < 1024) {
        console.log("Tablet")
      } else {
        console.log("Desktop")
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  //minPrice, maxPrice, onlyInStock változásakor jelezd: „Szűrés frissítve”  useEffect
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(100)
  const [onlyInStock, setOnlyInStock] = useState(false)
  useEffect(() => {
    console.log("Szűrés frissítve")
  }, [minPrice, maxPrice, onlyInStock])
  


  return (
    <>
        <div></div>
    </>
  )
}

export default App
