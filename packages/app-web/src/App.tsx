import CategoryPicker from './components/CategoryPicker';
import NumberInput from './components/NumberInput';
import UnitSelect from './components/UnitSelect';
import ResultList from './components/ResultList';
import { useConversion } from './state/useConversion';

const App = () => {
  const {
    categories,
    units,
    preferences,
    setCategory,
    setFrom,
    setTo,
    swapUnits,
    rawInput,
    setRawInput,
    fromUnit,
    toUnit,
    mainResult,
    alternateResults
  } = useConversion();

  return (
    <div className="app-shell">
      <header>
        <h1>Unit Convert</h1>
        <p style={{ maxWidth: '48ch', opacity: 0.8 }}>
          A fast, offline-capable converter powered by deterministic unit math. Type values,
          search for units, and copy results instantly.
        </p>
      </header>

      <div className="card controls-grid" role="group" aria-labelledby="conversion-controls">
        <h2 id="conversion-controls" style={{ gridColumn: '1/-1' }}>
          Conversion controls
        </h2>
        <CategoryPicker
          categories={categories}
          value={preferences.category}
          onChange={setCategory}
        />
        <NumberInput label="Value" value={rawInput} onChange={setRawInput} />
        <UnitSelect label="From" units={units} value={fromUnit?.symbol} onChange={setFrom} />
        <UnitSelect label="To" units={units} value={toUnit?.symbol} onChange={setTo} />
        <button type="button" onClick={swapUnits} style={{ alignSelf: 'end' }}>
          Swap units
        </button>
      </div>

      <ResultList main={mainResult} alternatives={alternateResults} />
    </div>
  );
};

export default App;
