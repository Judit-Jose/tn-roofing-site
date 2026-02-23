import React from 'react';

const Button = ({ children, variant = 'primary', href, onClick, className = '' }) => {
    const baseClasses = 'btn';
    const variantClasses = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        outline: 'btn-outline',
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`;

    if (href) {
        return (
            <a href={href} className={combinedClasses} onClick={onClick}>
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClasses} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
