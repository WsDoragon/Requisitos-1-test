//npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
import { Select } from '@chakra-ui/react' 
import react from 'react'

function Etiquetas(){
    return(
    <Select placeholder='etiquetas' style={{marginTop:'10px'}}>
        < option value='Economia'>Economia</option>
        < option value='Nacional'>Nacional</option>
        < option value='Internacional'>Internacional</option>
        < option value='Deporte'>Deporte</option>
        < option value='Inovacion'>Inovacion</option>
        < option value='Salud'>Salud</option>
    </Select>
    );

}

export default Etiquetas;
