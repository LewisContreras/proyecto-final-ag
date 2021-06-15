import { useState } from 'react';

export const useModal = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [values, setValues] = useState('');

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    const handleInputChange = (pet) => {
        setValues({
            id: pet.id,
            name: pet.name,
            age: pet.age,
            color: pet.color,
            reward: pet.reward,
            desc_reward: pet.desc_reward,
            desc_pet: pet.desc_pet,
            latitude: pet.latitude,
            longitude: pet.longitude,
            url_pet: pet.url
        });
    }

    const handleChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ isOpen, values, showModal, hideModal, handleInputChange, handleChange ];

}