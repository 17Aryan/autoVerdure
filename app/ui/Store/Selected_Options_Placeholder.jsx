import React from 'react';

const SelectedOptionsPlaceholder = ({ selectedColor, selectedStyle }) => {
    return (
        <div className="mt-4 p-4 border border-gray-300 rounded">
            <p className="text-sm font-semibold">Selected Options:</p>
            <p className="text-sm">Color: {selectedColor || 'None'}</p>
            <p className="text-sm">Style: {selectedStyle || 'None'}</p>
            {selectedColor && selectedStyle && (
                <div className={`w-[30px] h-[30px] mt-2 rounded-full cursor-pointer rounded-black-corner ${getStyles(selectedColor, selectedStyle)}`}>
                {/* Display the color with the selected style */}
                </div>
            )}
        </div>
    );
};  

const getStyles = (color, style) => {
    const colorStyleMap = {
        'Black' : {
            'Matt': 'bg-[#171717]',
            'Gloss':'bg-[#464648]',
        },
        'White' : {
            'Matt': 'bg-[#FDFBF9]',
            'Gloss':'bg-[#FFFDFA]',
        },
        'Cream' : {
            'Matt': 'bg-[#F7F4E7]',
            'Gloss':'bg-[#FFFDD0]',
        },
        'LightGrey' : {
            'Matt': 'bg-[#B8B8B8]',
            'Gloss':'bg-[#D0D0D0]',
        },
        'DarkGrey' : {
            'Matt': 'bg-[#545454]',
            'Gloss':'bg-[#708090]',
        },
    };
    return colorStyleMap[color]?.[style] || 'bg-gray-300';
}

export default SelectedOptionsPlaceholder;