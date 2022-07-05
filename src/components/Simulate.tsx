import React, { useState } from 'react';

import Slider from '@mui/material/Slider';
import StatsBox from './StatsBox';

export function Simulate() {
  const [txnFee, setTxnFee] = useState(0.02);
  const [txnPerDay, setTxnPerDay] = useState(50_000);
  const [txnsUsingTotnesPound, setTxnsUsingTotnesPound] = useState(0.1);
  const totnesPoundsTxnFee = 0.001;

  const amountThatItWouldCostWithoutTotnesPound = txnPerDay * txnFee * 365;

  const amountThatItWouldCostWithTotnesPound =
    txnPerDay * txnFee * (1 - txnsUsingTotnesPound) * 365 +
    txnPerDay * totnesPoundsTxnFee * txnsUsingTotnesPound * 365;

  const annualSavings =
    (amountThatItWouldCostWithoutTotnesPound - amountThatItWouldCostWithTotnesPound) * 5;

  return (
    <>
      <Slider
        defaultValue={txnFee}
        min={0}
        max={0.05}
        step={0.001}
        valueLabelDisplay="on"
        valueLabelFormat={(value) => {
          return `${(value * 100).toPrecision(2)}%`;
        }}
        onChange={(event, newValue) => setTxnFee(newValue as number)}
      />
      <p className="mb-8 text font-light leading-relaxed">Credit/debit card transaction fee</p>

      <Slider
        defaultValue={txnPerDay}
        min={1000}
        max={100_000}
        step={1000}
        valueLabelDisplay="on"
        valueLabelFormat={(value) => {
          return `£${value.toLocaleString()}`;
        }}
        onChange={(event, newValue) => setTxnPerDay(newValue as number)}
      />
      <p className="mb-8 text font-light leading-relaxed">
        Average amount transacted on high street per day
      </p>

      <Slider
        defaultValue={txnsUsingTotnesPound}
        min={0}
        max={1}
        step={0.01}
        valueLabelDisplay="on"
        valueLabelFormat={(value) => {
          return `${(value * 100).toFixed(0)}%`;
        }}
        onChange={(event, newValue) => setTxnsUsingTotnesPound(newValue as number)}
      />
      <p className="mb-8 text font-light leading-relaxed">
        Percentage of transactions using Totnes Pound
      </p>
      <StatsBox
        primaryText={annualSavings.toLocaleString('en-GB', {
          style: 'currency',
          currency: 'GBP',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
        secondaryText="Community savings over 5 years"
      />
    </>
  );
}
