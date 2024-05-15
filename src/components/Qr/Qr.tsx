import React, { useEffect, useState } from 'react'
import { Container, Button, InputGroup, Form } from 'react-bootstrap';

export const Qr: React.FunctionComponent = () => {
    const [qrCode, setQrCode] = useState("");
    const [temp, setTemp] = useState("");
    const [word, setWord] = useState("");
    const [size, setSize] = useState(300);
    const [bgColor, setBgColor] = useState("ffffff");

    useEffect(() => {
        setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
    }, [word, size, bgColor]);

    function handleClick() {
        setWord(temp);
    }

    return (
        <Container className="d-flex flex-column align-items-center w-75 p-0 gap-4">

            <div>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="URL-адрес"
                        type="text"
                        onChange={(e) => { setTemp(e.target.value) }}
                    />
                    <Button
                        variant="outline-secondary"
                        onClick={handleClick}
                    >
                        Генерация
                    </Button>
                </InputGroup>

                <Form.Label htmlFor="ColorInput">Цвет фона:</Form.Label>
                <Form.Control
                    id="ColorInput"
                    type="color"
                    defaultValue="#ffffff"
                    onChange={(e) => { setBgColor(e.target.value.substring(1)) }}
                />

                {/* <Form.Label>Размер QR-кода:</Form.Label>
                <Form.Range
                    min={100}
                    max={400}
                    value={size}
                    onChange={(e) => { setSize(Number(e.target.value)) }}
                /> */}

                {/* <h5>Dimension:</h5>
                <input type="range" min="200" max="600" value={size} onChange={(e) => { setSize(Number(e.target.value)) }} /> */}
            </div>

            <div>
                <img src={qrCode} alt="" />
            </div>

            <div>
                <a href={qrCode} download="QRCode">
                    <Button
                        type="button"
                        className="btn-secondary"
                    >
                        Скачать
                    </Button>
                </a>
            </div>



        </Container>
    );
}