import React, { useState } from 'react';

function FormComponent() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState('');

    function calculateBmi(e) {
        let bmi = weight / (Number(height/100) ** 2);
        setBmi(Math.round(bmi))
        console.log(bmi);
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600">
            <form
                className="bg-white p-8 rounded-lg shadow-xl space-y-6 w-full max-w-md"
            >
                <h2 className="text-center text-2xl font-bold text-gray-800">
                    BMI Calculator
                </h2>

                <label className="block">
                    <input
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
                        type="number"
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Enter Height (cm)"
                        min={1}
                        max={500}
                    />
                </label>

                <label className="block">
                    <input
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
                        type="number"
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Enter Weight (kg)"
                        min={1}
                        max={500}
                    />
                </label>

                <button
                    type="button"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300"
                    onClick={calculateBmi}
                >
                    Calculate BMI
                </button>
                {bmi && (
                <p className="mt-4 text-center text-lg font-medium text-gray-800">
                    Your BMI is: <span className="font-bold text-blue-600">{bmi}</span>
                </p>
            )}
            </form>
        </div>
    );
}

export default FormComponent;
