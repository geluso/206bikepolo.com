'use client';
import React from "react";

import { Obfuscate } from "@south-paw/react-obfuscate-ts";

const DiscordLink: React.FC = () => {
  // Obfuscation to avoid spam bots. There are two places we need to
  // obfuscate. The first is our site itself. The Obfuscate component
  // uses javascript and css tricks to hide the link from spambots while
  // still rendering it properly for visitors to the sitse.
  // The second, and probably more important place we need to obfuscate
  // is in the source code because this is an open source project. That's
  // why the link only appears in the source backwards.
  const backwardsLink = 'zAeYhuy5W/gg.dro' + 'csid//:sptth';
  return (
      <Obfuscate href={backwardsLink.split('').reverse().join('')}>
        Discord
      </Obfuscate>
  );
};

export default DiscordLink;
