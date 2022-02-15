import React, { useState } from 'react';
import { Chips } from 'primereact/chips';
import '../chip/chip.scss';
import download from '../../assets/icons/download.svg';
import search from '../../assets/icons/search.svg';

export default function ChipDemo() {
    const [values, setValues] = useState([]);

    const clearAllChips = () => {
        setValues([]);
    };

    return (
        <div className="container my-4">
            <div className="input-group">
                <Chips placeholder="Type to search" value={values} max={4} onChange={(e) => setValues(e.value)} />
                <i onClick={clearAllChips} tooltip="Clear all chips" className="pi pi-times cross-button"></i>
                <span style={{ cursor: "pointer", position: "relative", right: "2%" }} className="p-inputgroup-addon">
                    <img style={{ left: "4px", position: "relative" }} alt="SearchIcon" src={search} />&nbsp;&nbsp;
                    <img style={{ right: "4px", position: "relative" }} alt="DownloadIcon" src={download} />
                </span>
            </div>
        </div>
    )
}
