'use client';
import { GSP_NO_RETURNED_VALUE } from "next/dist/lib/constants";
import {useState } from "react";

export default function Page() {
    const [frontGear, setFrontGear] = useState('');
    const [backGear, setBackGear] = useState('');

    const changeFront = (e: React.ChangeEvent<HTMLInputElement>) => setFrontGear(e.target.value);
    const changeBack = (e: React.ChangeEvent<HTMLInputElement>) => setBackGear(e.target.value);

    function divide(a: number, b: number) {
        return a / b;
    }

    return (
      <div className="mb-32">
        <h2 className="my-2 text-2xl font-extrabold">Gear</h2>

        <div className="mb-2 mt-2">
        <b>NOTE:</b> Many people think we ride fixed. There are very few bike polo people (less than 1%) that still ride this way. Traditionally, in the early 2000s, people did indeed ride with a fixed gear 
            <ul className="ps-6 list-disc">
                <li>the wheel and pedals always stay rotating... aka feet always move </li>
            </ul>
        </div>

        <div className="mb-2 mt-2">
            But due to fast stopping and ability to hop, people moved to single speed freewheels! 
            <ul className="ps-6 list-disc">
                <li>basically a normal bike with 1 gear at back that can coast</li>
            </ul>
        </div>


      <h2 className="my-2 text-2xl font-extrabold">Start by buying a bike frame</h2>

      <p className="mb-2 mt-2">
        Can buy a starter frame from <a href="https://www.facebook.com/marketplace/">FB marketplace</a> for ~$100
      </p>

      <p className="mb-2 mt-2">
        A great deal is to buy an <a href="https://www.enforcerbikes.com/">Enforcer frame</a>
      </p>
      <ul className="ps-6 my-2 list-disc list-inside">
        <li>Runs at $300 for new aluminum frame from Portland</li>
        <li>Built out in China & Peru</li>
        <li>Made 4 polo</li>
      </ul>

      <h2 className="my-2 text-2xl font-extrabold">General bike specs</h2>
      <ol className="ps-6 list-decimal">
      <li className="font-bold">Gear Ratio</li>
      <ul className="ps-3 my-2 mt-2 list-disc ">
          <li><b>Single speeds with gear ratios of 1.5 to 1.8</b></li>
          <ul className="ps-6 list-disc">
            <li>So the gear on back wheel would have around 15 teeth</li>
            <ul className="ps-6 list-disc">
              <li>multiply that by 1.5 to 1.8 to get front chainring size</li>
              <li>so then the front chain ring will be around 22-27 teeth</li>
            </ul>
            <li>Smaller gears will make your bike a little lighter too</li>
          </ul>
      </ul>


        <div className="ml-0">

          <h2 className="my-2 text-l font-extrabold">Calculate your Gear Ratio</h2>
          <p>
            # of Teeth on Front Gear: {" "}
            <input type="number" value={frontGear} onChange={changeFront} id="myNumberInput" placeholder="FG" />
          </p>
          <p>
            --------------------------------
          </p>
          <p>
            # of Teeth on Back Gear:  {" "}
            <input type="number" value={backGear} onChange={changeBack} id="myNumberInput" placeholder="BG" />
          </p>
          <p>
            ================================
          </p>
          <p className="mb-4">
            QUOTIENT: {divide(Number(frontGear), Number(backGear))}
          </p>
          
        </div>

      <li className="font-bold">Frame</li>
      <ul className="ps-3 my-2 list-disc list-inside">
          <li>Strong frame (<b>steel or aluminum</b>)</li>
          <ul className="ps-6 list-disc list-inside">
            <li>I personally prefer aluminum cause it b lighter</li>
          </ul>
          <li>Single speed/track frame</li>
          <ul className="ps-6 list-disc list-inside">
            <li>No derailler, because its heavy and might break</li>
            <li>So these frames have the back wheel slide horizontally into frame</li>
            <li>Allows tensioning chain by pulling wheel backwards</li>
          </ul>
          <li>Effective top tube length being roughly 1 size smaller than recommended </li>
          <li>Backwheel close to bottom bracket</li>
          <ul className="ps-6 list-disc list-inside">
            <li>closer wheels makes bike feel less sluggish</li>
            <li>smaller bottom bracket gap, so better for blocking</li>
          </ul>
          <li>Short bike trail</li>
          <ul className="ps-6 list-disc list-inside">
            <li>quicker handling, aka can turn more quickly</li>
          </ul>

      </ul>
      <li className="font-bold">Wheels</li>
      <ul className="ps-3 my-2 list-disc list-inside">
          <li>Strong wheels ({">="}32 spokes, double walled rims)</li>
          <li><b>Cover for front wheel </b>(and optional back wheel)</li>
          <ul className="ps-6 list-disc list-inside">
            <li>Prevents ball from going between spokes when playin as goalie</li>
            <li>Also can prevent spokes from breaking</li>
          </ul>
          <li>Any size diameter of wheel (does not matter much)</li>
          <ul className="ps-6 list-disc list-inside">
            <li>bigger wheel makes it slightly better as a goalie</li>
          </ul>
          <li>Any rim and tire width </li>
      </ul>

      <li className="font-bold">Brakes and Handlebars</li>
        <ul className="ps-3 my-2 list-disc list-inside">
          <li>Brake on nondominant hand for front wheel (no need for back brakes)</li>
          <li>Flat bar</li>
          <li>Disc brakes</li>
          <li>Rim brakes are good to start</li> 
          <ul className="ps-6 list-disc list-inside">
            <li>but does not provide enough stopping power</li>
            <li>more brake power for wet weather</li>
            <li>and for certain tricks</li>
          </ul>
        </ul>

      <li className="font-bold">Pedals</li>
        <ul className="ps-3 my-2 list-disc list-inside">
          <li>Flat pedals to start</li>
          <ul className="ps-6 list-disc list-inside">
            <li>Plastic pedals because metal might cause injury to yourself</li>
          </ul>
          <li>Clipless once better</li>
          <ul className="ps-6 list-disc list-inside">
            <li>Some people who are used to straps, run straps</li>
            <li>BUT straps are rare/dangerous due to hard to remove feet</li>
          </ul>
        </ul>

      <li className="font-bold">Mallet</li>
        <ul className="ps-3 my-2 list-disc list-inside">
          <li>People have tried building mallet heads in the past but very complicated. </li>
          <li>Most people try 3d printing the head</li>
            <ul className="ps-6 list-disc list-inside">
          <li>But essentially all 3d print filament (PLA, PETG, etc) is too brittle and will shatter after a couple hits</li>
            </ul>
          <li>Some of us have old/spare mallets to donate to newbies</li>
          <li>But at some point just buy parts on <a href="hecklersalley.com">hecklersalley</a></li>
          <li>Will run around $100 for parts :(</li>
        </ul>

      <li className="font-bold">Balls</li>
        <ul className="ps-3 my-2 list-disc list-inside">
          <li>We have dozens of balls available in the shed on the courts</li>
          <li>No need to buy your own, just ask on slack!</li>
          <li>The balls are color coated, because they are suited to certain temperatures</li>
            <ul className="ps-6 list-disc list-inside">
              <li>In hot weather, the cold weather balls become to bouncy</li>
              <li>In cold weather, the warm weather balls become to brittle</li>
            </ul>
        </ul>

      <li className="font-bold">Safety Equipment</li>
        <ul className="ps-3 my-2 list-disc list-inside">
            Manditory:
            <ul className="ps-6 mb-2 list-disc list-inside">
                <li>Helmet (required in tournaments)</li>
                <li>Rotor Guard (required in tournaments)</li>
                <ul className="ps-6 list-disc list-inside">
                    <li>It is a sheild in front of disc break ring</li>
                    <li>Disc break gets very hot from breaking and if someone falls on it, it can burn skin</li>
                    <li>Many people make their own and are very unique <a href="https://www.instagram.com/no_words_just_guards/">instagram</a></li>
                    <li>Purchasable on <a href="hecklersalley.com">hecklersalley</a></li>
                </ul>
                <li>Bar End Caps</li>
                <ul className="ps-6 list-disc list-inside">
                    <li>At each end of the handlebar, you need a cap to protect someone from landing on it</li>
                </ul>
            </ul>
        </ul>
        <ul className="ps-3 my-2 list-disc list-inside">
          Common:
          <ul className="ps-6 mb-2 list-disc list-inside">
            <li>Gloves </li>
            <ul className="ps-6 list-disc list-inside">
              <li>something with knuckle protection</li>
              <li>generally ppl use lacross gloves (rather than hockey gloves)</li>
              <li>they have more thumb mobility</li>
            </ul>
            <li>Knee pads </li>
            <li>Eye protection </li>
          </ul>
          Less Common:
        <ul className="ps-6 list-disc list-inside pb-5">
          <li>Elbow pads</li>
          <li>Wrist guards</li>
          <li>Mouth guard</li>
          <li>Face shield</li>
          <li>Nard Guard</li>
          <li>Top Tube Sheath</li>
          </ul>
        </ul>
      </ol>
      </div>
    );
}
