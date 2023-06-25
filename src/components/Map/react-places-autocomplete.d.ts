declare module 'react-places-autocomplete' {
    import { ComponentType } from 'react';
  
    interface Suggestion {
      placeId: string;
      description: string;
    }
  
    interface AutocompleteProps {
      suggestions: Suggestion[];
      value: string;
      onChange: (value: string) => void;
      onSelect: (address: string) => void;
      onError: (status: string) => void;
      shouldFetchSuggestions: boolean;
      clearSuggestions: () => void;
      getInputProps: (options: object) => any;
      loading: boolean;
      activeSuggestion: number;
      setActiveSuggestion: (index: number) => void;
      getSuggestionItemProps: (suggestion: Suggestion, index: number) => object; // Add this line
    }
  
    interface PlacesAutocompleteProps {
      value: string;
      onChange: (value: string) => void;
      onSelect: (address: string) => void;
      onError?: (status: string) => void;
      searchOptions?: object;
      debounce?: number;
      highlightFirstSuggestion?: boolean;
      shouldFetchSuggestions?: boolean;
      children: (props: AutocompleteProps) => JSX.Element;
    }
  
    export function geocodeByAddress(address: string): Promise<any[]>;
    export function getLatLng(result: any): Promise<{ lat: number; lng: number }>;
  
    export const PlacesAutocomplete: ComponentType<PlacesAutocompleteProps>;
  }
  