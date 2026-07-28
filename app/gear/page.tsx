"use client";
import { GSP_NO_RETURNED_VALUE } from "next/dist/lib/constants";
import { useState } from "react";

export default function Page() {
  const [frontGear, setFrontGear] = useState("");
  const [backGear, setBackGear] = useState("");

  const changeFront = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFrontGear(e.target.value);
  const changeBack = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBackGear(e.target.value);

  function divide(a: number, b: number) {
    if (!b) return "";
    return a / b;
  }

  return (
    <div className="page">
      <h2>Gear</h2>

      <p>Tired of using loaners at newbie night? <b>Let{"'"}s get geared up!</b></p>

      <h2>Mallets</h2>
      <ul className="pb-4 ps-3 my-2 list-disc">
         <li>People in the Slack may have old spare mallets to donate to newbies</li>
         <li>
          Mallet parts and a mallet guide can be bought on{" "}
            <a href="https://hecklersalley.com" target="_blank">
              Heckler{"'"}s Alley
            </a>
        </li>
        <ul className="ps-6 list-disc list-inside">
          <li>They{"'"}re selling a complete Donata mallet setup for $45</li>
          <li>Our local polo shop{" "}
            <a href="https://www.instagram.com/whisperwheelworks/" target="_blank">
              Whisper Wheelworks
            </a>{" "}
            also stocks Donata parts</li>
        </ul>
        <li>Mallets consist of a head, a shaft, and some part to connect the two</li>
        <li>Shafts are either aluminum or carbon fiber</li>
        <ul className="ps-6 list-disc list-inside">
          <li>Aluminum are heavier and can bend but usually won{"'"}t break</li>
          <li>Carbon is lighter but is much more likely to snap</li>
        </ul>
        <li>Depending on which shaft you get, you{"'"}ll need a different part to connect the head and shaft</li>
        <ul className="ps-6 list-disc list-inside">
          <li>For example, the Donata shafts and some (but not all) other aluminum shafts use{" "}
            <a href="https://hecklersalley.com/collections/mallet-parts/products/connect-bike-polo-mounting-device" target="_blank">this connect</a>
          </li>
          <li>Carbon mallets are skinny and have a completely different mounting device</li>
          <li>Milk mallets don{"'"}t use a connector at all, but they need a compatible head</li>
        </ul>
        <li>There are many different shapes of heads</li>
        <ul className="ps-6 list-disc list-inside">
          <li>If you don{"'"}t know which to get, try a Donata like the Tutori or Bellela</li>
          <li>Mallet heads do wear out, which is annoying because they are 30 bucks each</li>
          <li>Rotate your head every few months to get the most life out of it!</li>
        </ul>
        <li>How to assemble a mallet:</li>
        <ul className="ps-6 list-disc list-inside">
          <li>Use a pipe cutter to cut the shaft down to your preferred length</li>
          <li>Make a grip out of hockey tape (or buy a grip)</li>
          <li>Put a plug on the bottom of the mallet to protect people from the sharp edge of the shaft</li>
          <li>No plug? Just tape a coin over the end</li>
        </ul>
      </ul>

      <h2>Gloves</h2>
      <ul className="pb-4 ps-3 my-2 list-disc">
         <li>The most common choice are lacrosse gloves</li>
        <ul className="ps-6 list-disc list-inside">
          <li>New lacrosse gloves are expensive, so buy used ones</li>
          <li>Look on ebay, marketplace, or other sporting goods sites. They should be around $40 plus shipping</li>
          <li>Common brands are Brine, Maverik, Warrior, and STX</li>
          <li>Check a sizing guide to see if you need 10{'"'}, 12{'"'}, or 13{'"'}</li>
        </ul>
        <li>Another option is the $30 Mechanix Impact Resistant gloves from AutoZone</li>
        <ul className="ps-6 list-disc list-inside">
          <li>Available in the autozone store near the courts</li>
          <li>Not as much finger protection as the lacrosse gloves</li>
        </ul>
      </ul>

      <h2>Balls</h2>
      <ul className="pb-4 ps-3 my-2 list-disc list-inside">
          <li>We have dozens of balls available in the shed on the courts</li>
          <li>No need to buy your own, just ask on slack! We often do group orders</li>
          <li>
            The <a href="https://hecklersalley.com/collections/bike-polo-balls">balls</a> are color coated, because they are suited to certain temperatures.
          </li>
          <ul className="ps-6 list-disc list-inside">
            <li>In hot weather, the cold weather balls are too soft</li>
            <li>In cold weather, the warm weather balls are too brittle (and will break)</li>
            <table style={{ width: '50%',border: '1px solid black' }}>
              <thead>
                <tr style={{textAlign: 'left'}}>
                  <th >Ball</th>
                  <th>Hot</th>
                  <th>Cool</th>
                  <th>Cold</th>
                </tr>
              </thead>
              <tbody style={{border: '1px solid black' }} >
                <tr>
                  <td>Color</td>
                  <td>Orange</td>
                  <td>Pink</td>
                  <td>Yellow</td>
                </tr>
                <tr>
                  <td>Temp Rating (F)</td>
                  <td>60</td>
                  <td>50-70</td>
                  <td>{"<"}50</td>
                </tr>
              </tbody>
            </table>
          </ul>
        </ul>

      <h2>The Polo Bike</h2>
      <div className="mb-2 mt-2">
        This is our guide to building your own polo bike. If you need help, advice, or have
        no idea what you{"'"}re doing, you can reach our local polo bike expert Julian at{" "}
        <b><a href="https://www.instagram.com/whisperwheelworks/" target="_blank">
          Whisper Wheelworks
        </a></b>.
      </div>

      <b>Attributes of a polo bike:</b>
      <ul>
        <li>Single speed track bike</li>
        <ul className="ps-6 list-disc list-inside">
            <li>Steel or aluminum frame</li>
            <li>No derailleur, back wheel slides horizontally into frame to tension chain</li>
        </ul>
        <li>Flat handlebars (so bikes don{"'"}t get tangled up)</li>
        <li>Polo bikes are not fixies. Contrary to popular belief, modern polo bikes all have freewheels</li>
        <li>The back wheel is close to bottom bracket</li>
        <ul className="ps-6 list-disc list-inside">
            <li>Closer wheels makes the bike more agile</li>
            <li>Smaller bottom bracket gap is better for blocking shots</li>
        </ul>
        <li>Front brake only</li>
        <li>Strong wheels that can take an impact (32 or more spokes, double walled rims)</li>
        <li>700c or 26{'"'} wheels</li>
         <ul className="ps-6 list-disc list-inside">
            <li>26{'"'} is smaller, lighter, and more maneuverable</li>
            <li>700c is better for blocking shots and for tall people</li>
            <li>There{"'"}s also 650b if you want a compromise between the two</li>
        </ul>
      </ul>


      <h3>Frame</h3>

      <p className="mb-2 mt-2">
        The cheapest option is to ask around for a used frame on our slack channel or on{" "}
        <a href="https://www.facebook.com/marketplace/" target="_blank">FB marketplace</a>.
        You can probably find something usable for ~$100.
      </p>

      <p className="mb-2 mt-2">
        If you{"'"}d rather buy something purpose-built for polo, the{" "}
        <a href="https://www.enforcerbikes.com/" target="_blank">Enforcer frame</a> is the most popular choice.
      </p>
      <ul>
        <li>Runs at $300 for new aluminum frame from Portland</li>
        <li>Steel or Aluminum options</li>
        <li>Comes with a fork</li>
        <li>Popular even at the highest levels of play</li>
      </ul>

      <h3>Wheels</h3>
      <ul className="ps-3 my-2 list-disc">
        <li>Strong wheels ({">="}32 spokes, double walled rims)</li>
        <li>Cheap wheels are fine to start with, but will probably get bent/taco{"'"}d</li>
        <li>(Optional) Wheel covers</li>
        <ul className="ps-6 list-disc list-inside">
          <li>
            Prevents ball from going between spokes when playin as goalie
          </li>
          <li>Also can prevent spokes from breaking</li>
        </ul>
      </ul>

      <h3>Brakes</h3>
      <ul className="ps-3 my-2 list-disc">
        <li>Having a strong front brake is crucial to playing polo</li>
        <li>No need for rear brakes on a polo bike</li>
        <li>Hydraulic disc brakes are the best option</li>
        <li>Rim brakes are fine to start</li>
        <ul className="ps-6 list-disc list-inside">
          <li>but does not provide enough stopping power</li>
          <li>more brake power for wet weather</li>
          <li>and for certain tricks</li>
        </ul>
        <li>If you have a disc brake, you need a rotor guard</li>
        <ul className="ps-6 list-disc list-inside">
          <li>Protects the disc from impact, and protects other people from the sharp disc</li>
          <li>Many people make their own and there are many{" "}
            <a href="https://www.instagram.com/no_words_just_guards/" target="_blank">unique designs</a>
          </li>
          <li>You can find rotor guards for sale on Heckler{"'"}s Alley</li>
        </ul>
      </ul>

      <h3>Pedals</h3>
       <ul className="ps-3 my-2 list-disc">
          <li>Flat pedals to start</li>
          <ul className="ps-6 list-disc list-inside">
            <li>Plastic pedals because metal might cause injury to yourself</li>
          </ul>
          <li>Eventually you can try playing clipped in</li>
          <ul className="ps-6 list-disc list-inside">
            <li>Time Atac are considered the best for polo</li>
            <li>But many people play with SPD or Crankbrothers pedals too</li>
          </ul>
        </ul>

      <h3>Gear Ratio</h3>
      <ul className="ps-3 my-2 mt-2 list-disc ">
        <li>
          <b>Single speeds with gear ratios of 1.5 to 1.8</b>
        </li>
        <ul className="ps-6 list-disc">
          <li>So the gear on back wheel would have around 15 teeth</li>
          <ul className="ps-6 list-disc">
            <li>multiply that by 1.5 to 1.8 to get front chainring size</li>
            <li>so then the front chain ring will be around 22-27 teeth</li>
          </ul>
          <li>Smaller gears will make your bike a little lighter too</li>
        </ul>
      </ul>

      <div className="m-6 p-2 border border-black border-dashed w-fit">
        <p><b>Calculate your Gear Ratio</b></p>
         <p>
          # of Teeth on Front Gear:{" "}
          <input
            type="number"
            value={frontGear}
            onChange={changeFront}
            id="myNumberInput"
            placeholder="FG"
          />
        </p>
        <p>--------------------------------</p>
        <p>
          # of Teeth on Back Gear:{" "}
          <input
            type="number"
            value={backGear}
            onChange={changeBack}
            id="myNumberInput"
            placeholder="BG"
          />
        </p>
        <p>================================</p>
        <p>
          RATIO: {divide(Number(frontGear), Number(backGear))}
        </p>
      </div>
      <br/>
    </div>
  );
}
