export default interface SearchInputProps {
    onSearch: (query: string) => void;
    onClick: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    // onBlur: () => void;
    isOpen: boolean;
}