import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function useProductSuggestions() {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const products = useSelector((state) => state.products.items);

    useEffect(() => {
        const fetchProducts = async () => {
            if (inputValue.trim() === '') {
                setSuggestions([]);
                setDropdownVisible(false);
                return;
            }

            const filteredProducts = products.filter((product) =>
                product.productName
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())
            );
            setSuggestions(filteredProducts);
            setDropdownVisible(filteredProducts.length > 0);
        };

        fetchProducts();
    }, [inputValue, products]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            setSelectedIndex((prevIndex) =>
                prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
            );
        } else if (e.key === 'ArrowUp') {
            setSelectedIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
            );
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
            handleSuggestionClick(suggestions[selectedIndex].productName);
            setSelectedIndex(-1);
        } else if (e.key === 'Escape') {
            handleInputChange({ target: { value: '' } });
        }
    };

    const handleSuggestionClick = () => {
        setInputValue('');
        setSuggestions([]);
        setDropdownVisible(false);
    };

    return {
        inputValue,
        suggestions,
        isDropdownVisible,
        selectedIndex,
        handleInputChange,
        handleSuggestionClick,
        handleKeyDown,
    };
}

export default useProductSuggestions;
