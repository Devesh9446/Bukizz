import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components';

const ArrayInput = React.forwardRef(
    (
        {
            wrapClassName = '',
            name = 'input',
            className = '',
            value = [],
            onChange,
            ...restProps
        },
        ref,
    ) => {
        const [inputValue, setInputValue] = useState('');

        const handleChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleAddItem = () => {
            if (inputValue.trim() !== '') {
                const temp = value;
                value.push(inputValue.trim());
                setInputValue('');

                if (onChange) onChange({ target: { name: name, value: temp } });
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                handleAddItem();
            }
        };

        const handleRemoveItem = (index) => {
            const updatedItems = value.filter((_, i) => i !== index);
            if (onChange) onChange({ target: { name: name, value: updatedItems } });
        };

        return (
            <>
                <div className={wrapClassName}>
                    <div className={`flex items-center ${className}`}>
                        <input
                            ref={ref}
                            className={` border-0 ${className}`}
                            type="text"
                            value={inputValue}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            {...restProps}
                        />
                        <Button
                            className="cursor-pointer font-medium min-w-[161px] rounded-md text-base text-center"
                            color="blue_A700_01"
                            variant="fill"
                            onClick={handleAddItem}>Add</Button>
                    </div>
                    <ul className='flex gap-2'>
                        {value.map((item, index) => (
                            <li key={index} className='flex rounded bg-gray-200 p-2'>
                                {item}
                                <button className='bg-red-500 text-white px-2 py-1 rounded ml-2' onClick={() => handleRemoveItem(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    },
);

ArrayInput.propTypes = {
    wrapClassName: PropTypes.string,
    className: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
};

export default ArrayInput;
