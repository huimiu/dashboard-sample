import "../style/banner.css";

import { Avatar, Image, Label } from "@fluentui/react-components";
import { Card, CardPreview } from "@fluentui/react-components/unstable";
import {
  Earth20Regular,
  Person20Regular,
  Star20Regular,
} from "@fluentui/react-icons";

export default function Banner() {
  return (
    <div className="banner">
      <Image alt="preview" src="banner.png" fit="cover" />
    </div>
  );
}
