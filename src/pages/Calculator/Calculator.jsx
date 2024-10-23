import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [result, setResult] = useState('');

    const appendValue = (value) => {
        if (result === '' && (value === '+' || value === '-' || value === '*' || value === '/')) {
            return; // Prevent starting with an operator
        }
        setResult(prev => prev + value);
    };

    const clearResult = () => {
        setResult('');
    };

    const calculateResult = () => {
        try {
            setResult(eval(result).toString());
        } catch (e) {
            setResult('Error');
        }
    };

    return (
        <div className='calculator'>
            <input type="text" value={result} readOnly style={{width: '100%',height: '40px'}} />
            <div>
                <button className='B' onClick={() => appendValue('1')}>1</button>
                <button className='B' onClick={() => appendValue('2')}>2</button>
                <button className='B' onClick={() => appendValue('3')}>3</button>
                <button className="boperator" onClick={() => appendValue('+')}>+</button>
            </div>
            <div>
                <button className='B' onClick={() => appendValue('4')}>4</button>
                <button className='B' onClick={() => appendValue('5')}>5</button>
                <button className='B' onClick={() => appendValue('6')}>6</button>
                <button className="boperator" onClick={() => appendValue('-')}>-</button>
            </div>
            <div>
                <button className='B' onClick={() => appendValue('7')}>7</button>
                <button className='B' onClick={() => appendValue('8')}>8</button>
                <button className='B' onClick={() => appendValue('9')}>9</button>
                <button className="boperator" onClick={() => appendValue('*')}>*</button>
            </div>
            <div>
                <button className='B' onClick={clearResult}>C</button>
                <button className='B' onClick={() => appendValue('0')}>0</button>
                <button id="equal" onClick={calculateResult}>=</button>
                <button className="boperator" onClick={() => appendValue('/')}>/</button>
            </div>
        </div>
    );
};

export default Calculator;