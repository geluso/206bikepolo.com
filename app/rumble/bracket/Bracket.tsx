import FinalTeams from "../rounds/finals-teams/FinalTeams"

export function Bracket() {
    return <div>
        <div className="container">
            <FinalTeams />
            <h2>Winners Bracket</h2>
            <div className="tournament-bracket">
                {/* <!-- Round 1 --> */}
                <div className="round round-1">
                    <div className="round-title">ROUND 1</div>
                    <div className="match">
                        <div className="game-title">Game 1</div>
                        <div className="team">Team 16 <input className="input-field" value={"0"}/></div>
                        <div className="team">Team 17 <input className="input-field" value={"5"}/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 2</div>
                        <div className="team">Team 13 <input className="input-field" value={"1"}/></div>
                        <div className="team">Team 20 <input className="input-field" value={"2"}/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 3</div>
                        <div className="team">Team 15 <input className="input-field" value={4}/></div>
                        <div className="team">Team 18 <input className="input-field" value={1}/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 4</div>
                        <div className="team">Team 14 <input className="input-field" value={3}/></div>
                        <div className="team">Team 19 <input className="input-field" value={0}/></div>
                    </div>
                </div>
                {/* <!-- Round 2 --> */}
                <div className="round round-2">
                    <div className="round-title">ROUND 2</div>
                    <div className="match">
                        <div className="game-title">Game 9</div>
                        <div className="team">Winner G1 <input className="input-field"/></div>
                        <div className="team">Team 1 <input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 5</div>
                        <div className="team">Team 8 <input className="input-field" value={1}/></div>
                        <div className="team">Team 9 <input className="input-field" value={3}/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 10</div>
                        <div className="team">Winner G2 <input className="input-field"/></div>
                        <div className="team">Team 4 <input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 6</div>
                        <div className="team">Team 5 <input className="input-field"/></div>
                        <div className="team">Team 12 <input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 11</div>
                        <div className="team">Winner G3 <input className="input-field"/></div>
                        <div className="team">Team 2 <input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 7</div>
                        <div className="team">Team 7 <input className="input-field"/></div>
                        <div className="team">Team 10 <input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 12</div>
                        <div className="team">Winner G4 <input className="input-field"/></div>
                        <div className="team">Team 3 <input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 8</div>
                        <div className="team">Team 6 <input className="input-field"/></div>
                        <div className="team">Team 11 <input className="input-field"/></div>
                    </div>
                </div>            
                {/* <!-- Round 3 --> */}
                <div className="round round-3">
                    <div className="match">
                        <div className="game-title">Game 21</div>
                        <div className="team">Winner G5 <input className="input-field"/></div>
                        <div className="team">Winner G9 <input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 22</div>
                        <div className="team">Winner G6 <input className="input-field"/></div>
                        <div className="team">Winner G10 <input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 23</div>
                        <div className="team">Winner G7 <input className="input-field"/></div>
                        <div className="team">Winner G11 <input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 24</div>
                        <div className="team">Winner G8 <input className="input-field"/></div>
                        <div className="team">Winner G12 <input className="input-field"/></div>
                        
                    </div>
                </div>    
                {/* <!-- Round 4 --> */}
                <div className="round round-4">
                    <div className="match">
                        <div className="game-title">Game 31</div>
                        <div className="team">Winner G21 <input className="input-field"/></div>
                        <div className="team">Winner G22 <input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 32</div>
                        <div className="team">Winner G23 <input className="input-field"/></div>
                        <div className="team">Winner G24 <input className="input-field"/></div>
                    </div>
                </div>
                {/* <!-- Round 5 --> */}
                <div className="round round-5">
                    <div className="match">
                        <div className="game-title">Game 36</div>
                        <div className="team">Winner G31 <input className="input-field"/></div>
                        <div className="team">Winner G32 <input className="input-field"/></div>
                    </div>
                </div>
                
                {/* <!-- Final Round --> */}
                <div className="round final-round">
                    <div className="match">
                        <div className="game-title">Final</div>
                        <div className="team">Winner G36 <input className="input-field"/></div>
                        <div className="team">Winner G37 <input className="input-field"/></div>
                    </div>
                </div>
                {/* <!-- Second Final --> */}
                <div className="round final-round">
                    <div className="match">
                        <div className="game-title">Second Final - IF NEEDED</div>
                        <div className="team">Winner G38 <input className="input-field"/></div>
                        <div className="team">Loser G38 <input className="input-field"/></div>
                    </div>
                </div>
            </div>
            <h1>Losers Bracket</h1>
            <div className="tournament-bracket">
                {/* <!-- Round 1 --> */}
                <div className="round round-1">
                    <div className="round-title">ROUND 1</div>
                    <div className="match">
                        <div className="game-title">Game 16</div>
                        <div className="team">Loser G8<input className="input-field"/></div>
                        <div className="team">Loser G1<input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 15</div>
                        <div className="team">Loser G7<input className="input-field"/></div>
                        <div className="team">Loser G2<input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 14</div>
                        <div className="team">Loser G6 <input className="input-field"/></div>
                        <div className="team">Loser G3 <input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 13</div>
                        <div className="team">Loser G5<input className="input-field"/></div>
                        <div className="team">Loser G4 <input className="input-field"/></div>
                    </div>
                </div>
                {/* <!-- Round 2 --> */}
                <div className="round round-2">
                    <div className="round-title">ROUND 2</div>
                    <div className="match">
                        <div className="game-title">Game 20</div>
                        <div className="team">Loser G12 <input className="input-field"/></div>
                        <div className="team">Winner G16 <input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 19</div>
                        <div className="team">Loser G11<input className="input-field"/></div>
                        <div className="team">Winner G15<input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 18</div>
                        <div className="team">Loser G10 <input className="input-field"/></div>
                        <div className="team">Winner G14 <input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 26</div>
                        <div className="team">Loser G22 <input className="input-field"/></div>
                        <div className="team">Winner G20<input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 25</div>
                        <div className="team">Loser G21 <input className="input-field"/></div>
                        <div className="team">Winner G29<input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 28</div>
                        <div className="team">Loser G24 <input className="input-field"/></div>
                        <div className="team">Winner G18 <input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 27</div>
                        <div className="team">Loser G23 <input className="input-field"/></div>
                        <div className="team">Winner G17 <input className="input-field"/></div>
                    </div>
                </div>                   
                {/* <!-- Round 3 --> */}
                <div className="round round-3">
                    <div className="round-title">ROUND 3</div>
                    <div className="match">
                        <div className="game-title">Game 34</div>
                        <div className="team">Loser G32 <input className="input-field"/></div>
                        <div className="team">Winner G29 <input className="input-field"/></div>
                    </div>
                    <div className="match">
                        <div className="game-title">Game 33</div>
                        <div className="team">Loser G31 <input className="input-field"/></div>
                        <div className="team">Winner G30 <input className="input-field"/></div>
                    </div>
                </div>    
                <div className="round round-4">
                    <div className="round-title">LOSERS BRACKET SEMI-FINAL</div>
                    <div className="match">
                        <div className="game-title">Game 35</div>
                        <div className="team">Winner G34 <input className="input-field"/></div>
                        <div className="team">Winner G33 <input className="input-field"/></div>
                    </div>
                </div>    
                {/* <!-- Round 5 --> */}
                <div className="round round-5">
                    <div className="round-title">LOSERS BRACKET FINAL</div>
                    <div className="match">
                        <div className="game-title">Game 37</div>
                        <div className="team">Loser G36 <input className="input-field"/></div>
                        <div className="team">Winner G35 <input className="input-field"/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}