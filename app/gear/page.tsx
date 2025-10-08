export default function Page() {
    return (
      <div className="mb-32">
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
      <li>Gear Ratio</li>
      <ul className="ps-3 my-2 mt-2 list-disc ">
          <li><b>Single speeds with gear ratios of 1.5 to 1.8</b></li>
          <ul className="ps-6 list-disc">
            <li>So the gear on back wheel would have around 15 teeth</li>
            <ul className="ps-6 list-disc">
              <li>multiply that by 1.5 to 1.8 to get front chainring size</li>
              <li>so then the front chain ring will be around 22-27 teeth</li>
            </ul>
            <li>Smaller gears will make bike a little lighter too</li>
          </ul>
      </ul>
      <li>Frame</li>
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
      <li>Wheels</li>
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

      <li>Brakes and Handlebars</li>
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

      <li>Pedals</li>
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

      <li>Safety Equipment</li>
        <ul className="ps-3 my-2 list-disc list-inside">
          Common:
          <ul className="ps-6 mb-2 list-disc list-inside">
            <li>Gloves </li>
            <ul className="ps-6 list-disc list-inside">
              <li>something with knuckle protection</li>
              <li>generally ppl use lacross gloves (rather than hockey gloves)</li>
              <li>they have more thumb mobility</li>
            </ul>
            <li>Helmet (required in tournaments)</li>
            <li>Knee pads </li>
            <li>Eye protection </li>
          </ul>
          Less Common:
        <ul className="ps-6 list-disc list-inside pb-5">
          <li>Elbow pads</li>
          <li>Wrist guards</li>
          <li>Mouth guard</li>
          <li>Face shield</li>
          </ul>
        </ul>
      </ol>
      </div>
    );
}
