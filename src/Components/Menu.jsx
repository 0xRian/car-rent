import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Menu = () => {
    const [selectedCarType, setSelectedCarType] = useState('');
    const [carModels, setCarModels] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const carType = searchParams.get('car');
        if (carType) {
            setSelectedCarType(carType);
        }
    }, [location.search]);

    useEffect(() => {
        // Update car models based on selected car type
        switch (selectedCarType) {
            case 'Sportwagen':
                setCarModels(["Lamborghini Aventador", "McLaren 720s", "Porsche 911"]);
                break;
            case 'SUV':
                setCarModels(["VW Tiguan", "BMW X5", "Audi Q5"]);
                break;
            case 'Kleinwagen':
                setCarModels(["Peugeot 208", "VW Golf", "1er BMW"]);
                break;
            default:
                setCarModels([]);
                break;
        }
    }, [selectedCarType]);

    const handleCarTypeChange = (event) => {
        setSelectedCarType(event.target.value);
    };

    return (
        <div className="flex justify-center mt-10">
            {/* Car Dropdown */}
            {selectedCarType && (
                <div>
                    <label htmlFor="car" className="block text-2xl font-bold mb-2 pt-16">{"Wählen Sie Ihr Fahrzeug aus"}</label>
                    <div className='flex justify-center'>
                        <select id="car" className="flex justify-center border border-gray-300 rounded-md p-2" value={selectedCarType} onChange={handleCarTypeChange}>
                            <option value="">Select</option>
                            {carModels.map((model, index) => (
                                <option key={index} value={model}>{model}</option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu;
