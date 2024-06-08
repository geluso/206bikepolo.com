import '../css/style.css'
import Link from 'next/link'

export default function Page() {
    return (
        <html>
            <title>206 Seattle Bike Polo</title>
            <body>
                <div id="main">
                    <div className='tournament-nav-container'>
                        <Link href="/">
                            <button>Home</button>
                        </Link>
                        <Link href="/tournaments">
                            <button>2024 Cascadia Qualifier &#x2728;</button>
                        </Link>
                    </div>
                    <div className="logo">
                        <img src="./206_seattle_bike_polo_logo.png" />
                    </div>
                    <div>
                        <ul>
                            <li>We play at Judkins Park <a href="https://maps.app.goo.gl/UxkWUMPTLsNPhg5WA">47.591401,-122.302915</a></li>
                            <ul>
                            <li>Saturdays 2PM till dark</li>
                            <li>Sundays 11AM till dark</li>
                            <li>Wednesdays 6PM till dark</li>
                            </ul>
                            <li>Come out June 1st and 2nd 2024 for the <a
                                href="https://bikepolocalendar.com/event/nah-cascadia-qualifier">Cascadia Qualifier</a></li>
                            <li><a href="https://www.instagram.com/206bikepolo/">@206bikepolo</a> on Instagram</li>
                            <li>Talk to everyone on <a
                                href="https://join.slack.com/t/seattlebikepolo/shared_invite/zt-2im5od2df-FlTl~Oc9YVC8feu95iVM8g">Slack</a>
                            </li>
                            <li>Edit this website on <a href="">GitHub</a>. FTP and GitHub access avaialble upon request.</li>
                        </ul>
                    </div>
                    <img src="./judkins_play_times.png" />
                    <img src="./cascadia_qualifier_2024.png" />
                    <img src="./april_newbie_day.png" />
                </div>
            </body>
        </html>
    )
}