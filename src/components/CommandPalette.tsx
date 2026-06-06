import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface CommandItem {
  name: string;
  path: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  items: CommandItem[];
  onNavigate: (path: string) => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, items, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : filteredItems.length - 1));
    } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
      e.preventDefault();
      onNavigate(filteredItems[selectedIndex].path);
      onClose();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start md:items-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-lg w-full mt-[15vh] md:mt-0 overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        <div className="p-4 border-b border-gray-200">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search pages..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base"
            aria-label="Search pages"
          />
        </div>
        <div className="max-h-80 overflow-y-auto" role="listbox">
          {filteredItems.length === 0 ? (
            <div className="px-4 py-8 text-center text-gray-500">No pages found</div>
          ) : (
            filteredItems.map((item, index) => (
              <button
                key={item.path}
                role="option"
                aria-selected={index === selectedIndex}
                onClick={() => {
                  onNavigate(item.path);
                  onClose();
                }}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                  index === selectedIndex
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CommandPalette;
