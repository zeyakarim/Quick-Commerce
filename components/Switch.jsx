import { useState } from 'react';

const SwitchComponent = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <button
      type="button"
      className={`${
        enabled ? 'bg-[#027056]' : 'bg-gray-200'
      } relative inline-flex h-4 w-7 items-center rounded-full transition-colors focus:outline-none my-auto`}
      onClick={() => setEnabled(!enabled)}
    >
      <span
        className={`${
          enabled ? 'translate-x-3.5' : 'translate-x-0.5'
        } inline-block h-3 w-3 transform rounded-full bg-white shadow-sm transition-transform`}
      />
    </button>
  );
};

export default SwitchComponent;