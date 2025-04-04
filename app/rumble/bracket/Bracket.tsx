export function Bracket() {
    return <div className="container">
        <h1>Winners Bracket</h1>
        <div className="tournament-bracket">
            {/* <!-- Round 1 --> */}
            <div className="round round-1">
                <div className="match">
                    <div className="game-title">Game 1</div>
                    <div className="team">Cooper, Tyrone, Annika <input type="number" value={0} /></div>
                    <div className="team">Mak, Ralph, Ari <input type="number" value={0} /></div>
                </div>
                <div className="match">
                    <div className="game-title">Game 2</div>
                    <div className="team">Team 13 <input type="number" /></div>
                    <div className="team">Team 20 <input type="number" /></div>
                </div>
                <div className="match">
                    <div className="game-title">Game 3</div>
                    <div className="team">Team 15 <input type="number" /></div>
                    <div className="team">Team 18 <input type="number" /></div>
                </div>
                <div className="match">
                    <div className="game-title">Game 4</div>
                    <div className="team">Team 14 <input type="number" /></div>
                    <div className="team">Team 19 <input type="number" /></div>
                </div>
            </div>
        
            {/* <!-- Round 2 --> */}
            <div className="round round-2">
                <div className="match">
                    <div className="game-title">Game 9</div>
                    <div className="team">Winner G1 <input type="number" /></div>
                    <div className="team">Team 1 <input type="number" /></div>
                </div>
                <div className="match">
                    <div className="game-title">Game 5</div>
                    <div className="team">Team 8 <input type="number" /></div>
                    <div className="team">Team 9 <input type="number" /></div>
                </div>
                <div className="match">
                    <div className="game-title">Game 10</div>
                    <div className="team">Winner G2 <input type="number" /></div>
                    <div className="team">Team 4 <input type="number" /></div>
                </div>
                <div className="match">
                    <div className="game-title">Game 6</div>
                    <div className="team">Team 5 <input type="number" /></div>
                    <div className="team">Team 12 <input type="number" /></div>
                </div>
                <div className="match">
                    <div className="game-title">Game 11</div>
                    <div className="team">Winner G3 <input type="number" /></div>
                    <div className="team">Team 4 <input type="number" /></div>
                </div>
                <div className="match">
                    <div className="game-title">Game 7</div>
                    <div className="team">Team 7 <input type="number" /></div>
                    <div className="team">Team 10 <input type="number" /></div>
                </div>
                <div className="match">
                    <div className="game-title">Game 12</div>
                    <div className="team">Winner G4 <input type="number" /></div>
                    <div className="team">Team 3 <input type="number" /></div>
                </div>
                <div className="match">
                    <div className="game-title">Game 8</div>
                    <div className="team">Team 6 <input type="number" /></div>
                    <div className="team">Team 11 <input type="number" /></div>
                </div>
            </div>
            <div className="line"></div>
    
            {/* <!-- Round 3 --> */}
            <div className="round round-3">
                <div className="match">
                    <div className="game-title">Game 21</div>
                    <div className="team">Winner G5 <input type="number" /></div>
                    <div className="team">Winner G9 <input type="number" /></div>
                </div>
                <div className="match">
                    <div className="game-title">Game 22</div>
                    <div className="team">Winner G6 <input type="number" /></div>
                    <div className="team">Winner G10 <input type="number" /></div>
                </div>
                <div className="match">
                    <div className="game-title">Game 23</div>
                    <div className="team">Winner G7 <input type="number" /></div>
                    <div className="team">Winner G11 <input type="number" /></div>
                </div>
                <div className="match">
                    <div className="game-title">Game 24</div>
                    <div className="team">Winner G8 <input type="number" /></div>
                    <div className="team">Winner G12 <input type="number" /></div>
                    
                </div>
            </div>
            <div className="line"></div>
    
            {/* <!-- Round 4 --> */}
            <div className="round round-4">
                <div className="match">
                    <div className="game-title">Game 31</div>
                    <div className="team">Winner G21 <input type="number" /></div>
                    <div className="team">Winner G22 <input type="number" /></div>
                </div>
                <div className="match">
                    <div className="game-title">Game 32</div>
                    <div className="team">Winner G23 <input type="number" /></div>
                    <div className="team">Winner G24 <input type="number" /></div>
                </div>
            </div>
            <div className="line"></div>
    
            {/* <!-- Round 5 --> */}
            <div className="round round-5">
                <div className="match">
                    <div className="game-title">Game 36</div>
                    <div className="team">Winner G31 <input type="number" /></div>
                    <div className="team">Winner G32 <input type="number" /></div>
                </div>
            </div>
            <div className="line"></div>
    
            {/* <!-- Final Round --> */}
            <div className="round final-round">
                <div className="match">
                    <div className="game-title">Final</div>
                    <div className="team">Winner G36 <input type="number" /></div>
                    <div className="team">Winner G37 <input type="number" /></div>
                </div>
            </div>
    
            <div className="line"></div>
    
            {/* <!-- Second Final --> */}
            <div className="round final-round">
                <div className="match">
                    <div className="game-title">Second Final - IF NEEDED</div>
                    <div className="team">Winner G38 <input type="number" /></div>
                    <div className="team">Loser G38 <input type="number" /></div>
                </div>
            </div>
        </div>
    </div>
}