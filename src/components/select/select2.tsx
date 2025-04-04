import Select from 'react-select';
import { useEffect } from 'react';
import { Controller } from 'react-hook-form';

interface SelectProps {
    label: string;
    placeholder?: string;
    required?: boolean;
    error?: any;
    control: any;
    name: string;
    className?: string;
    defaultValue?: { label: string; value: string };
    setValue: any;
    validation?: any;
    options: { label: string; value: string }[];
}

export default function AppSelect({
    label,
    error,
    control,
    validation,
    setValue,
    name,
    defaultValue,
    options,
    placeholder,
    required,
}: SelectProps) {

    useEffect(() => {
        if (defaultValue) {
            setValue(name, defaultValue.value);
        }
    }, [defaultValue, setValue, name]);

    return (
        <div className="flex flex-col gap-1 relative">
            <label htmlFor="" className='text-sm font-bold'>{required ? '*' : ''} {label}</label>
            <Controller
                name={name}
                control={control}
                rules={validation}
                defaultValue={defaultValue ? defaultValue.value : ''}
                render={({ field }) => (
                    <Select
                        {...field}
                        options={options}
                        placeholder={placeholder}
                        classNamePrefix="react-select"
                        onChange={(val: any) => {
                            field.onChange(val.value);
                        }}
                        styles={{
                            control: (provided) => ({
                                ...provided,
                                border: '1px solid #D1D5DB',
                                backgroundColor: 'white',
                                boxShadow: 'none',
                                '&:hover': {
                                    borderColor: '#D1D5DB',
                                },
                            }),
                            option: (provided, state) => ({
                                ...provided,
                                backgroundColor: state.isSelected ? '#E5E7EB' : state.isFocused ? '#F3F4F6' : 'white',
                                color: state.isSelected ? 'black' : 'gray',
                                '&:hover': {
                                    backgroundColor: '#F3F4F6',
                                },
                            }),
                            menu: (provided) => ({
                                ...provided,
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }),
                        }}
                    />
                )}
            />
            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
    );
}
