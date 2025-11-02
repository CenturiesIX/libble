import { useState } from 'react';

type CopyButtonProps = {
  text: string;
};

const CopyButton = ({ text }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error('Failed to copy', error);
    }
  };

  return (
    <button
      type="button"
      className="copy-button"
      onClick={handleCopy}
      aria-live="polite"
      aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
};

export default CopyButton;
