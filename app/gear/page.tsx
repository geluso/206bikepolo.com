export default function Page() {
    return (
        <div>
      <h2 className="my-2 text-2xl font-extrabold">Start by buying a bike frame</h2>

      <p className="mb-2 mt-2">
        Can buy a starter frame from FB marketplace for ~$100
      </p>

      <ul className="ps-6 my-2 list-disc list-inside">
        <li>A great deal is to buy an enforcer frame </li>
        <li>Runs at $300 for new aluminum frame from Portland</li>
        <li>Built out in Peru</li>
        <li>Made 4 polo</li>
      </ul>

      <h2 className="my-2 text-2xl font-extrabold">General bike specs</h2>

      1. Gear Ratio

      <ul className="ps-6 my-2 list-disc list-inside">
          <li><b>Single speeds with gear ratios of 1.5 to 1.8</b></li>
          <ul className="ps-6 list-disc list-inside">
            <li>So the gear on back wheel would have around 15 teeth</li>
            <ul className="ps-6 list-disc list-inside">
              <li>multiply that by 1.5 to 1.8 to get front chainring size</li>
              <li>so then the front chain ring will be around 22-27 teeth</li>
            </ul>
            <li>Smaller gears will make bike a little lighter too</li>
          </ul>
      </ul>

      2. Frame
      <ul className="ps-6 my-2 list-disc list-inside">
          <li>Strong frame (<b>steel or aluminum</b>)</li>
          <li>Single speed/track frame</li>
          <li>Smaller frame sizes (49-54cm)</li>
          <li><b>Compact geometry</b></li>
          <li>Short chainstays (15-16 inches)</li>
          <li>Short bike trail</li>

      </ul>
      3. Wheels
      <ul className="ps-6 my-2 list-disc list-inside">
          <li>Strong wheels ({">"}32 spokes, double walled rims)</li>
          <li><b>Cover for front wheel </b>(and optional back wheel)</li>
          <ul className="ps-6 list-disc list-inside">
            <li>Prevents ball from going between spokes when playin as goalie</li>
            <li>Also can prevent spokes from breaking</li>
          </ul>
          <li>Any size diameter of wheel (does not matter much)</li>
          <li>bigger wheel makes it slightly better as a goalie</li>
          <li>Any rim width (generally 19mm-30mm)</li>
          <li>Any tire width (generally 28mm-40mm)</li>
      </ul>

      4. Brakes and Handlebars

        <ul className="ps-6 my-2 list-disc list-inside">
          <li>Brake on nondominant hand for front wheel (no need for back brakes)</li>
          <li>Flat bar</li>
          <li>Disc brakes</li>
          <li>Rim brakes are good to start, but does not provide enough stopping power (especially in wet conditions)</li>
        </ul>

      5. Pedals

        <ul className="ps-6 my-2 list-disc list-inside">
          <li>Flat pedals to start</li>
          <li>Plastic pedals because metal might cause injury to yourself</li>
          <li>Clipless once better</li>
          <li>Some people who are used to straps, run straps (rare/dangerous due to hard to remove feet)</li>
        </ul>

      6. Safety Equipment

        <ul className="ps-6 my-2 list-disc list-inside">
          <li>Gloves (something with knuckle protection. Generally ppl use lacross gloves (rather than hockey gloves) due to more thumb mobility)</li>
          <li>Helmet (required in tournaments)</li>
          <li>Knee pads (optional, common)</li>
          <li>Elbow pads (optional, not common)</li>
          <li>Wrist guards (optional, not common)</li>
          <li>Mouth guard</li>
          <li>Eye protection (common)</li>
          <li>Face shield (optional, not common)</li>
        </ul>
      </div>
    );
}
