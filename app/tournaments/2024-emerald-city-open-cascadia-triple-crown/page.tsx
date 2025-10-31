import Image from "next/image";

export default function Page() {
  return <div>
    <h1>2024 Emerald City Open: Cascadia Triple Crown</h1>

    <h1>
      <a href="https://docs.google.com/spreadsheets/d/10KEAhz9imGsgOnUdHGiN0hnuGsIBvT-qL-43DHuy_v8/edit?pli=1&fbclid=IwZXh0bgNhZW0CMTEAAR1zNNee6uk2-Pz1wL3LUmD8V_yTQi6GvTFJT6IOf1VU9TP4JgeDLlFGwEs_aem_vKr3IFWviVSN2hhgp-shdQ&gid=1040872743#gid=1040872743">spreadsheet</a>
    </h1>

    <h2>
      Registration is open.
    </h2>
    <ul>
      <li>
        Click <a href="https://forms.gle/6z6ba3aCkqtqJS416">here</a> to register.
      </li>
      <li>
        Or, click the image below.
      </li>
      <li>
        Or, navigate your browser to this location https://forms.gle/6z6ba3aCkqtqJS416
      </li>
      <li>
        Or, send news via carrier pigeon to the top of the Space Needle.
      </li>
    </ul>
    <div>
      <a href="https://forms.gle/6z6ba3aCkqtqJS416">
        <Image src={"/img/2024_eco_3xcrown1.png"} alt=""/>

      </a>
    </div>
  </div>
}
