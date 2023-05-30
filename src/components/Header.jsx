import { useEffect } from "react";

const Header = ({ handleNewGame, wins }) => {

    useEffect(() => { document.title = `${wins} wins` }, [wins])

    return (
        <header>
            <div>
            <h2>Tech Match</h2>
            <h4>{wins} wins</h4>
            </div>
            <button onClick={handleNewGame}>New Game</button>
        </header>
    )
}

export default Header