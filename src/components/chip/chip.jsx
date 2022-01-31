import React, { useState } from 'react';
import { Chips } from 'primereact/chips';
import { Button } from 'primereact/button';
import '../chip/chip.scss';

export default function ChipDemo() {
    const [values, setValues] = useState([]);

    const clearAllChips = () => {
        setValues([]);
    };

    return (
        <div className="container my-4">
            <div className="input-group">
                <Chips value={values} onChange={(e) => setValues(e.value)} />
                <div className="input-group-append">
                    <span><Button onClick={clearAllChips} label="ClearAll" /></span>
                    <Button label="Search" />
                    <Button label="Download" />
                </div>
            </div>

        </div>
    )
}
