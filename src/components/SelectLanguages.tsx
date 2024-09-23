'use client';

import { useState } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { languageOptions } from '@/config/config';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export type selectedLanguageOptionProps = {
  language: string;
  version: string;
  aliases: string[];
  runtime?: string;
};

export function SelectLanguages({
  onSelect,
  selectedLanguageOption,
}: {
  onSelect: (value: selectedLanguageOptionProps) => void; // Specify the function type
  selectedLanguageOption: selectedLanguageOptionProps;
}) {
  // const [selected, setSelected] = useState(languageOptions[0]);

  function onChange() {
    // Implement your change handling here if necessary
  }

  return (
    <Listbox value={selectedLanguageOption} onChange={onSelect}>
      <div className="relative">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
          <span className="flex items-center">
            <span className="ml-3 block truncate capitalize">
              {selectedLanguageOption.language} ({selectedLanguageOption.version})
            </span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {languageOptions.map((item) => (
            <ListboxOption
              key={item.language}
              value={item}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold capitalize">
                  {item.language} ({item.version})
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
