import {useState} from "react";

export const AddCategory = ({onAddCategory}) => {
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newCategory = inputValue.trim();
        if (newCategory.length > 0) {
            onAddCategory(newCategory);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input
                type={"text"}
                placeholder={"Buscar gifs"}
                value={inputValue}
                onChange={ (event) => onInputChange(event) }
            />
        </form>
    )
}