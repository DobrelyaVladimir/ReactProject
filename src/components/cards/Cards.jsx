import {useState, useEffect} from "react";
import Card from "./Card";
import useSound from 'use-sound';
import success from '../../sounds/success.mp3';
import victory from '../../sounds/victory.mp3';
import errorSFX from '../../sounds/error.mp3';
import beep from '../../sounds/beep.mp3';

function Cards ({container, b}) {
   const [items, setItems] = useState([
      {id: 1, num: 1, img: '../assets/01.png', status: ''},
      {id: 2, num: 1, img: '../assets/01.png', status: ''},
      {id: 3, num: 2, img: '../assets/02.png', status: ''},
      {id: 4, num: 2, img: '../assets/02.png', status: ''},
      {id: 5, num: 3, img: '../assets/03.png', status: ''},
      {id: 6, num: 3, img: '../assets/03.png', status: ''},
      {id: 7, num: 4, img: '../assets/04.png', status: ''},
      {id: 8, num: 4, img: '../assets/04.png', status: ''},
      {id: 9, num: 5, img: '../assets/05.png', status: ''},
      {id: 10, num: 5, img: '../assets/05.png', status: ''},
      {id: 11, num: 6, img: '../assets/06.png', status: ''},
      {id: 12, num: 6, img: '../assets/06.png', status: ''},
      {id: 13, num: 7, img: '../assets/07.png', status: ''},
      {id: 14, num: 7, img: '../assets/07.png', status: ''},
      {id: 15, num: 8, img: '../assets/08.png', status: ''},
      {id: 16, num: 8, img: '../assets/08.png', status: ''},
   ].slice(0, b).sort(() => Math.random() - 0.5));

   const [move, setMove] = useState(0);
   const [prevEl, setPrevEl] = useState(-1);
   const [count, setCount] = useState(0);
   const [win, setWin] = useState('');
   const [beepSfx] = useSound(beep);
   const [errorSfx] = useSound(errorSFX);
   const [succesSfx] = useSound(success);
   const [victorySfx] = useSound(victory, { volume: 0.5 });
   const [sec, setSec] = useState(0);
   
   useEffect(() => {
      const time = setTimeout(() => {
         setSec(sec + 1);
         }, 1000);
   },[sec])
   
 

   
   function check (current) {
      if (items[current].num === items[prevEl].num && items[current].id !== items[prevEl].id ) {
         items[current].status = 'bingo';
         items[prevEl].status = 'bingo';
         succesSfx();
         setCount(count + 2);
         setItems([...items]);
         setPrevEl(-1);
        
         if (count=== (b-2)) {
            setWin(' win');
            victorySfx();
         }
      } else {
         items[current].status = 'uncorrect';
         items[prevEl].status = 'uncorrect';
         errorSfx()
         setItems([...items])
         setTimeout(() => {
            items[current].status = '';
            items[prevEl].status = '';
            setItems([...items]);
            setPrevEl(-1);
         }, 1000);
      }
   }
   function handleClick (id) {
      if (items[id].status === 'bingo') {
         return
      }
      setMove(move + 1)
      if (prevEl === -1) {
         items[id].status = 'active';
         beepSfx()
         setItems([...items])
         setPrevEl(id)
      } else {
         check(id)
      }
   }
   return (
      <div>
         <p className="count"><span>moves: {move}</span> <span>time: {sec}</span></p>
         <div className={container}>
            {items.map((item, index) => (
               <Card item={item} key={item.id} id={index} handleClick={handleClick}/>
            ))}
         </div>
         <div className={"modal" + win}><p>Congratulation. You win!</p></div>
      </div>
   )
}

export default Cards