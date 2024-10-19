"use client";

import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Image } from "@nextui-org/image";

import { languageOptions } from "@/config/languages";

export default function LangSelector() {
    return (
        <Autocomplete
            defaultItems={languageOptions}
            label="Select Language"
            placeholder="search for a programming language"
            required={false}
            width="full"
        >
            {(language) => (
                <AutocompleteItem
                    key={language.language}
                    endContent={language.version}
                    startContent={
                        <Image
                            alt={language.language}
                            className="h-6 w-6 rounded-none bg-transparent"
                            src={language.imgUrl}
                        />
                    }
                    value={language.language}
                >
                    {language.language}
                </AutocompleteItem>
            )}
        </Autocomplete>
    );
}
