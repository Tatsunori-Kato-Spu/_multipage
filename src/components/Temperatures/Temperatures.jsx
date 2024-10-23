import { useState, useEffect } from 'react';
import Variable from '../Variable/Variable';
import './Temperatures.css';


function Temperatures({name, celsiusValue}) {
    const [celsius, setCelsius] = useState(celsiusValue || 25);
    const [fahrenheit, setFahrenheit] = useState(celsiusValue ? celsiusValue * 1.8 + 32 : 32);
    const [kelvin, setKelvin] = useState(celsiusValue ? celsiusValue + 273.15 : 273.15);

    useEffect(() => {
        celsiusToOthers(celsius);
    }, [celsius]);

    useEffect(() => {
        fahrenheitToOthers(fahrenheit);
    }, [fahrenheit]);

    useEffect(() => {
        kelvinToOthers(kelvin);
    }, [kelvin]);

    // temperature conversions
    const celsiusToOthers = () => {
        if (celsius !== undefined && !isNaN(celsius)) {
            setFahrenheit(celsius * 1.8 + 32);
            setKelvin(celsius + 273.15);
        }
    }

    const fahrenheitToOthers = () => {
        if (fahrenheit !== undefined && !isNaN(fahrenheit)) {
            setCelsius((fahrenheit - 32) / 1.8);
            setKelvin((fahrenheit - 32) / 1.8 + 273.15);
        }
    }

    const kelvinToOthers = () => {
        if (kelvin !== undefined && !isNaN(kelvin)) {
            setCelsius(kelvin - 273.15);
            setFahrenheit((kelvin - 273.15) * 1.8 + 32);
        }
    }

    return ( 
        <div className='temperatures-container'>
            <h3 className='title'>{name || 'Temperatures'}</h3>
            <h2 className='temperatures-display'>            
                <span className='badge bg-primary'>
                    Celsius: {celsius !== undefined && !isNaN(celsius) ? celsius.toFixed(2) : 'N/A'}
                </span>
                <span className='badge bg-primary'>
                    Fahrenheit: {fahrenheit !== undefined && !isNaN(fahrenheit) ? fahrenheit.toFixed(2) : 'N/A'}
                </span>
                <span className='badge bg-primary'>
                    Kelvin: {kelvin !== undefined && !isNaN(kelvin) ? kelvin.toFixed(2) : 'N/A'}
                </span>
            </h2>
            <div className='temp-var'>
                <Variable name={'celsius'} value={celsius} setValue={setCelsius} />
                <Variable name={'fahrenheit'} value={fahrenheit} setValue={setFahrenheit} />
                <Variable name={'kelvin'} value={kelvin} setValue={setKelvin} />
            </div>
        </div>
    );
}

export default Temperatures;
