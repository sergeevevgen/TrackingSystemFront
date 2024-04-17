import React, { useEffect, useState } from 'react'

export const Qr: React.FunctionComponent = () => {
    const [qrCode, setQrCode] = useState("");
    const [temp, setTemp] = useState(""); 
    const [word, setWord] = useState(""); 
    const [size, setSize] = useState(400); 
    const [bgColor, setBgColor] = useState("ffffff"); 

    useEffect(() => { 
        setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`); 
      }, [word, size, bgColor]); 
      
    function handleClick() { 
        setWord(temp); 
    } 

    return (
        <>
            <div className="input-box"> 
                <div className="gen"> 
                    <input type="text" onChange={ 
                        (e) => {setTemp(e.target.value)}} 
                        placeholder="Enter text to encode" /> 
                    <button className="button" 
                        onClick={handleClick}> 
                        Generate 
                    </button> 
                </div> 
                <div className="extra"> 
                    <h5>Background Color:</h5> 
                    <input type="color" onChange={(e) =>  
                    { setBgColor(e.target.value.substring(1)) }} /> 
                    <h5>Dimension:</h5> 
                    {/* <input type="range" min="200" max="600" value={size} onChange={(e) =>  {setSize(e.target.value.toString())}} />  */}
                </div> 
            </div> 
            <div className="output-box"> 
                <img src={qrCode} alt="" /> 
                <a href={qrCode} download="QRCode"> 
                    <button type="button">Download</button> 
                </a> 
            </div> 
        </>
    );
}