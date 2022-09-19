import QRCode  from "qrcode"
import { useEffect, useState } from "react"

export default function Home() {

  //states
  const [url, setUrl] = useState("")
  const [qrCode, setQrCode] = useState("")

  //useEffect for make auto non active
  useEffect(()=>{
    if (url == ""){
      setQrCode("")
    }
  })


  //function generate qr code
  const generateQrCode = () => {
    QRCode.toDataURL(url, {
      width: 200,
      margin: 2,
    }, (err, url) => {
      if (err) return console.error(err)
      setQrCode(url)
    })
  }

  return (
    <>
    <div className="card">
        <div className="wrapper">
          <div className="header">
            <h1>QR Code Generator</h1>
            <p>Paste your URL or enter text to create QR Code</p>
          </div>
          <div className="form">
            <input
                type="text"
                placeholder="e.g https://www.google.com"
                value={url}
                onChange={(evt)=> setUrl(evt.target.value)}
            />
            <button onClick={generateQrCode}>Generate QR</button>
          </div>
         <div className={`qr-wrapper ${qrCode != "" ? "active" : ""}`}>
            <div className="qr-code">
              <img src={qrCode} />
            </div>
            <div className="buttons">
              <a href={qrCode} download="qrcode.png">Download</a>
              <button className="reset-btn" onClick={()=> setUrl("")}>Reset</button>
            </div>
              <p>Made with 💙 by <a href="https://www.linkedin.com/in/muhammad-naufal-08828222b/">Naufal</a></p>
            </div>
        </div>
    </div>
    </>
  )
}
