import React from 'react';
import './ggstCharacters.css';

//imports
import CharacterCard from '../characterCard/characterCard';
import { characters } from '../../Loaders/GG_Loader';

const GgstCharacters = () => {
    const [ggCharacters, setGGCharacters] = React.useState([]);

    // use effect
    React.useEffect(() => {
        setGGCharacters(characters)
    }, [])
    console.log(ggCharacters)
    return (
        <div className='characterList'>
            <h1>Characters</h1>
            {ggCharacters.map((character) => {
                console.log(character.charName)
                return(
                    <CharacterCard character={character} />
                )
            })}
        </div>
    )
}

export default GgstCharacters;