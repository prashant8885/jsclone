
import Result from './Result';
import{useContext} from 'react';


import Editor from "./Editor"



import{Box ,styled} from '@mui/material';
import {DataContext} from "../context/DataProvider"

const Container=styled(Box)`
display:flex;
background-color:#white;
height:100vh
`

const Code=()=>{
   const{html,setHtml,css,setCss,js,setJs}=useContext(DataContext);



   return(
    <Container>
    <Editor
    heading='Html'
    icon="/"
    color='#FF3C41'
    value={html}
    onChange={setHtml}

    />
    <Editor
        heading='CSS'
        icon="*"
        color='#0EBEFF'
        value={css}
    onChange={setCss}


/>
    <Editor
        heading='Javascript'
        icon="()"
        color='#FCD000'
        value={js}
    onChange={setJs}



/>
Output
<Result />
   
    </Container>

   ) 
}
export default Code;