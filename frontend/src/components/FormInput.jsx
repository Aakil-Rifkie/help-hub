import React from 'react';

export default function FormInput({
    label,
    id,
    name,
    type,
    value,
    onChange,
    icon,
    placeholder,
    extraButton,
}) {
    return (
        <div className="space-y-1 sm:space-y-2">
            <label
                htmlFor={id}
                className="block text-xs sm:text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    {icon}
                </span>

                <input
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full pl-10 pr-12 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />

                {extraButton}
            </div>
        </div>
    )
}