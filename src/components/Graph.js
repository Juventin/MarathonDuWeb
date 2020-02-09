import React from 'react';
import '../App.css';
import styled from "styled-components";
import { ResponsiveAreaBump } from '@nivo/bump';

const Box = styled.div`
.chart {
    height: 500px;
    width: 60%;
    margin: auto;
}
`;

function Exemple() {
    let datatest = require('../data/test.json');
    return (
        <Box className="middle">
            <div>
                <h1>Un exemple de graph.</h1>
            </div>
            <div className='chart'>
                <ResponsiveAreaBump
                    data={datatest}
                    margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
                    spacing={8}
                    colors={{ scheme: 'nivo' }}
                    blendMode="multiply"
                    startLabel="id"
                    axisTop={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendPosition: 'middle',
                        legendOffset: -36
                    }}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                />

            </div>
            <div>
                <p>Le code est généré automatique avec la librairie nivo. Tous paramètres personnalisables.<br />Exemple : <a href='https://nivo.rocks/area-bump/'>https://nivo.rocks/area-bump/</a></p>
            </div>
        </Box>
    );
}

export default Exemple;