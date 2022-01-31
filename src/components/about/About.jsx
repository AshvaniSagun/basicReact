import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const ChipItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export default function About() {

    const [chipData, setChipData] = useState([
        { key: 0, label: '10lab' },
        { key: 1, label: 'text1' },
        { key: 2, label: 'text2' },
        { key: 3, label: 'text3' },
        { key: 4, label: 'text4' },
    ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const clearAllChips = () => {
        setChipData([]);
    };

    return (
        <Paper
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                listStyle: 'none',
                p: 0.5,
                m: 0,
            }}
            component="ul"
        >
            {chipData.map((data) => {
                let icon;
                return (
                    <div>
                        <ChipItem key={data.key}>
                            <Chip
                                icon={icon}
                                label={data.label}
                                onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                            />
                        </ChipItem>
                    </div>
                );
            })}
            <div onClick={clearAllChips}>
                <svg style={{ height: 100 + '%', width: 2.4 + 'em' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </div>
        </Paper>
    )
}
