import React, {useState,useEffect} from 'react'
import Cell from './Cell'
import './Board.css'

export default function Board(props) {
    const {nrows,ncols,level} = props
    let [mat,setMat] = useState( Array.from({length : nrows}, () => Array.from({length : ncols}, () => false) ) )

    function flipCell(x,y){
        if(x >= 0 && x < nrows && y >= 0 && y < ncols){
            let cpy = [...mat]
            cpy[x][y] = !cpy[x][y]
            setMat(cpy)
        }
    }

    function toggleCells(x,y){
        flipCell(x,y)
        flipCell(x-1,y)
        flipCell(x+1,y)
        flipCell(x,y-1)
        flipCell(x,y+1)
    }

    function createBoard(){
        let moves = Array.from({length : level}, () => (
            [Math.floor(Math.random()*nrows) , Math.floor(Math.random()*ncols)]
        ))

        console.log(moves)

        moves.forEach(ele => {
            toggleCells(ele[0], ele[1])
        })
    }

    useEffect(()=>{
        createBoard()
    },[])

    return (
        <div className={['board']}>
            {mat.map((x,i) => (
                <tr>
                    {x.map( (y,j) => (
                        <Cell
                        isLit={y}
                        x={i}
                        y={j}
                        toggleCells={toggleCells}
                        />
                    ))}
                </tr>
            ))}
        </div>
    )
}
