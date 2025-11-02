import CopyButton from './CopyButton';
import type { UnitDef } from '@unit-convert/convert-core';

type Result = {
  unit: UnitDef;
  formatted: string;
};

type ResultListProps = {
  main: Result | null;
  alternatives: Result[];
};

const ResultList = ({ main, alternatives }: ResultListProps) => {
  if (!main) return null;

  const renderItem = (result: Result, index: number) => (
    <div key={result.unit.symbol} className="result-item">
      <div>
        <strong>{result.formatted}</strong>
        <div aria-hidden="true" style={{ opacity: 0.7, fontSize: '0.85rem' }}>
          {result.unit.name}
        </div>
      </div>
      <CopyButton text={result.formatted} />
    </div>
  );

  return (
    <div className="results-list" aria-live="polite">
      <div className="card" role="status">
        <h2>Result</h2>
        {renderItem(main, 0)}
      </div>
      {alternatives.length > 0 && (
        <div className="card" aria-label="Alternate units">
          <h2>Alternates</h2>
          <div className="results">
            {alternatives.map(renderItem)}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultList;
