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
                    <div className="match game-complete">
                        <div className="game-title">Game 1</div>
                        <div className="team">Sergio/Jacq/Adam<input className="input-field" value={"0"}/></div>
                        <div className="team">Carol/Jordan/Ani<input className="input-field" value={"5"}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 2</div>
                        <div className="team">Isaac/Kenny/Eric<input className="input-field" value={"1"}/></div>
                        <div className="team">Gavin/Ari/Geluso<input className="input-field" value={"2"}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 3</div>
                        <div className="team">Josh/Phred/Walf<input className="input-field" value={4}/></div>
                        <div className="team">Darryl/Mike/Krista <input className="input-field" value={1}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 4</div>
                        <div className="team">B/J/J<input className="input-field" value={3}/></div>
                        <div className="team">OffVince/DeVince/Sabrina<input className="input-field" value={0}/></div>
                    </div>
                </div>
                {/* <!-- Round 2 --> */}
                <div className="round round-2">
                    <div className="round-title">ROUND 2</div>
                    <div className="match game-complete">
                        <div className="game-title">Game 9</div>
                        <div className="team">Carol/Jordan/Ani<input className="input-field" value={0} /></div>
                        <div className="team">Los Lobos (Timtim/Andrea/Mayo)<input className="input-field" value={1}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 5</div>
                        <div className="team">Sam/Tern/Mak<input className="input-field" value={1}/></div>
                        <div className="team">JoranJones/Drew/Yachi<input className="input-field" value={3}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 10</div>
                        <div className="team">Gavin/Ari/Geluso<input className="input-field" value={0}/></div>
                        <div className="team">Eggo/Nick/Mr Pickle<input className="input-field" value={3}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 6</div>
                        <div className="team">Arlyn/Jeff/Diego<input className="input-field" value={2}/></div>
                        <div className="team">Gabe/Aaron/Non<input className="input-field" value={4}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 11</div>
                        <div className="team">Josh/Phred/Walf<input className="input-field" value={2}/></div>
                        <div className="team">Kevin/Megan/ExecuSEANer<input className="input-field" value={1}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 7</div>
                        <div className="team">OG Hard Back Julian/LaRosa/Squigg<input className="input-field" value={3}/></div>
                        <div className="team">Kody/Ernie/MikeFosters<input className="input-field" value={2}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 12</div>
                        <div className="team">B/J/J<input className="input-field" value={3}/></div>
                        <div className="team">Weston/Cap/Kai<input className="input-field" value={1}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 8</div>
                        <div className="team">Andrew/Coop/Jason<input className="input-field" value={1}/></div>
                        <div className="team">Ty/J/Jillian<input className="input-field" value={3}/></div>
                    </div>
                </div>            
                {/* <!-- Round 3 --> */}
                <div className="round round-3">
                    <div className="match game-complete">
                        <div className="game-title">Game 21</div>
                        <div className="team">JoranJones/Drew/Yachi<input className="input-field" value={"2"}/></div>
                        <div className="team">Los Lobos (Timtim/Andrea/Mayo)<input className="input-field" value={"5"}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 22</div>
                        <div className="team">Gabe/Aaron/Non<input className="input-field" value={"5"}/></div>
                        <div className="team">Eggo/Nick/Mr Pickle<input className="input-field" value={"2"}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 23</div>
                        <div className="team">OG Hard Back Julian/LaRosa/Squigg<input className="input-field" value={"5"}/></div>
                        <div className="team">Josh/Phred/Walf<input className="input-field" value={"0"}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 24</div>
                        <div className="team">Ty/J/Jillian<input className="input-field" value={"1"}/></div>
                        <div className="team">B/J/J<input className="input-field" value={"2"}/></div>
                        
                    </div>
                </div>    
                {/* <!-- Round 4 --> */}
                <div className="round round-4">
                    <div className="match game-staged">
                        <div className="game-title">Game 31</div>
                        <div className="team">Los Lobos (TimTim/Andreas/Mayo)<input className="input-field" value={" "}/></div>
                        <div className="team">Gabe/Aaron/Non<input className="input-field" value={" "}/></div>
                    </div>
                    <div className="match game-staged">
                        <div className="game-title">Game 32</div>
                        <div className="team">OG Hard Back Julian/LaRosa/Squigg<input className="input-field" value={" "}/></div>
                        <div className="team">B/J/J<input className="input-field" value={" "}/></div>
                    </div>
                </div>
                {/* <!-- Round 5 --> */}
                <div className="round round-5">
                    <div className="match game-staged">
                        <div className="game-title">Game 35</div>
                        <div className="team">Winner G31 <input className="input-field" value={" "}/></div>
                        <div className="team">Winner G32 <input className="input-field" value={" "}/></div>
                    </div>
                </div>
                
                {/* <!-- Final Round --> */}
                <div className="round final-round">
                    <div className="match game-staged">
                        <div className="game-title">Final</div>
                        <div className="team">Winner G35 <input className="input-field" value={" "}/></div>
                        <div className="team">Winner G37 <input className="input-field" value={" "}/></div>
                    </div>
                </div>
                {/* <!-- Second Final --> */}
                <div className="round final-round">
                    <div className="match game-staged">
                        <div className="game-title">Second Final - IF NEEDED</div>
                        <div className="team">Winner G38 <input className="input-field" value={" "}/></div>
                        <div className="team">Loser G38 <input className="input-field" value={" "}/></div>
                    </div>
                </div>
            </div>
            <h1>Losers Bracket</h1>
            <div className="tournament-bracket">
                {/* <!-- Round 1 --> */}
                <div className="round round-1">
                    <div className="round-title">ROUND 1</div>
                    <div className="match game-complete">
                        <div className="game-title">Game 16</div>
                        <div className="team">Andrew/Coop/Jason<input className="input-field" value={5}/></div>
                        <div className="team">Sergio/Jacq/Adam<input className="input-field" value={2}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 15</div>
                        <div className="team">Carol/Jordan/Ani<input className="input-field" value={2}/></div>
                        <div className="team">Isaac/Kenny/Eric<input className="input-field" value={0}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 14</div>
                        <div className="team">Arlyn/Jeff/Diego<input className="input-field" value={3}/></div>
                        <div className="team">Darryl/Mike/Krista<input className="input-field" value={4}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 13</div>
                        <div className="team">Sam/Tern/Mak<input className="input-field" value={1}/></div>
                        <div className="team">OffVince/DeVince/Sabrina<input className="input-field" value={3}/></div>
                    </div>
                </div>

                {/* <!-- Round 2 --> */}
                <div className="round round-2">
                    <div className="round-title">ROUND 2</div>
                    <div className="match game-complete">
                        <div className="game-title">Game 20</div>
                        <div className="team">Weston/Cap/Kai<input className="input-field" value={"4"}/></div>
                        <div className="team">Andrew/Coop/Jason<input className="input-field" value={"1"}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 19</div>
                        <div className="team">Kevin/Megan/ExecuSEANer<input className="input-field" value ={"2"}/></div>
                        <div className="team">Carol/Jordan/Ani<input className="input-field" value={"4"}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 18</div>
                        <div className="team">Gavin/Ari/Geluso<input className="input-field" value={"3"}/></div>
                        <div className="team">Darryl/Mike/Krista<input className="input-field" value={"1"}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 17</div>
                        <div className="team">Kody/Ernie/MikeFosters<input className="input-field" value={"4"}/></div>
                        <div className="team">OffVince/DeVince/Sabrina<input className="input-field" value={"1"}/></div>
                    </div>
                </div>

                {/* <!-- Round 3 --> */}
                <div className="round round-3">
                    <div className="round-title">ROUND 3</div>
                    <div className="match game-complete">
                        <div className="game-title">Game 26</div>
                        <div className="team">Eggo/Nick/Shawnauld<input className="input-field" value={"0"}/></div>
                        <div className="team">Weston/Cap/Kai<input className="input-field" value={"2"}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 25</div>
                        <div className="team">JoranJones/Drew/Yachi<input className="input-field" value={"3"}/></div>
                        <div className="team">Carol/Jordan/Ani<input className="input-field" value={"4"}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 28</div>
                        <div className="team">Ty/J/Jillian<input className="input-field" value={"2"}/></div>
                        <div className="team">Gavin/Ari/Geluso <input className="input-field" value={"1"}/></div>
                    </div>
                    <div className="match game-complete">
                        <div className="game-title">Game 27</div>
                        <div className="team">Josh/Phred/Walf<input className="input-field" value={"1"}/></div>
                        <div className="team">Kody/Ernie/MikeFosters<input className="input-field" value={"4"}/></div>
                    </div>
                </div>                   

                {/* <!-- Round 4 --> */}
                <div className="round round-4">
                    <div className="round-title">ROUND 4</div>
                    <div className="match game-complete">
                        <div className="game-title">Game 29</div>
                        <div className="team">Weston/Cap/Kai<input className="input-field" value={"3"}/></div>
                        <div className="team">Carol/Jordan/Ani<input className="input-field" value={"1"}/></div>
                    </div>
                    <div className="match game-current">
                        <div className="game-title">Game 30</div>
                        <div className="team">Ty/J/Jillian<input className="input-field" value={" "}/></div>
                        <div className="team">Kody/Ernie/MikeFosters<input className="input-field" value={" "}/></div>
                    </div>
                </div>

                {/* <!-- Round 5 --> */}
                <div className="round round-5">
                    <div className="round-title">ROUND 5</div>
                    <div className="match game-staged">
                        <div className="game-title">Game 34</div>
                        <div className="team">Loser G32 <input className="input-field" value={" "}/></div>
                        <div className="team">Weston/Cap/Kai<input className="input-field" value={" "}/></div>
                    </div>
                    <div className="match game-staged">
                        <div className="game-title">Game 33</div>
                        <div className="team">Loser G31 <input className="input-field" value={" "}/></div>
                        <div className="team">Winner G30 <input className="input-field" value={" "}/></div>
                    </div>
                </div>    

                {/* <!-- Round 6 --> */}
                <div className="round round-6">
                    <div className="round-title">Round 6</div>
                    <div className="match game-staged">
                        <div className="game-title">Game 36</div>
                        <div className="team">Winner G34 <input className="input-field" value={" "}/></div>
                        <div className="team">Winner G33 <input className="input-field" value={" "}/></div>
                    </div>
                </div>

                {/* <!-- Round 7 --> */}
                <div className="round round-5">
                    <div className="round-title">Round 7</div>
                    <div className="match game-staged">
                        <div className="game-title">Game 37</div>
                        <div className="team">Loser G35 <input className="input-field" value={" "}/></div>
                        <div className="team">Winner G36 <input className="input-field" value={" "}/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}