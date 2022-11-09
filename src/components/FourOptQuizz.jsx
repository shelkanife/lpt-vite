import { useState } from "react";
import { groups } from "../pages/data"
import {mix} from '../services/mixCards'
import {Box,Typography,Button} from '@mui/material'
import MegaElementCard from "./MegeElementCard";
const FourOptsQuizz = ({symbol,name,description}) => {
  const [symbols, setSymbols] = useState([]);
  const [names,setNames] = useState([]);
  const [order,setOrder]=useState(mix(Array.from({length:5})))
  const [prevElement,setPrevElement]=useState(null)

//   useEffect(() => {
//     setElements({ ...groups[group].elements });
//       }, []);
// success : #2e7d32
// error: #d32f2f
// primary: ##1976d2

const hangeColor = (e) => {
    if(prevElement){
        prevElement.style.backgroundColor = "#fff"
        prevElement.style.color="#1976d2"
    }
    e.target.style.backgroundColor = "#1976d2"
    e.target.style.color="#fff"
    setPrevElement(e.target)
    console.log("clicking")
}
    return(
        <Box
      sx={{
        padding: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography>
        <strong>Instrucciones:</strong> {description}
      </Typography>
      <Box
        sx={{
        //   padding: 1,
          flex: 1,
          alignContent: "center",
          justifyContent: "center",
          display: "flex",
          position: "relative",
          flexDirection: "column",
        }}
      >
        
        <MegaElementCard
        name={name}
        symbol={symbol}
        style={{
            width: "200px",
            height: "200px",
            fontSize: "2rem",
            margin: "auto",
        }}
        />
        
      </Box>
      <Box sx={{display:"grid",gridTemplateColumns:"auto auto", rowGap:"10px",columnGap:"10px",marginBottom:"10px"}}>
        <Button variant="outlined"  onClick={hangeColor}>Opt1</Button>
        <Button variant="outlined"  onClick={hangeColor}>Opt2</Button>
        <Button variant="outlined"  onClick={hangeColor}>Opt3</Button>
        <Button variant="outlined"  onClick={hangeColor}>Opt4</Button>
      </Box>
      <Button variant="contained" >Comprobar</Button>
    </Box>
    )
}
export default FourOptsQuizz