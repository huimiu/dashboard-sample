import "../style/banner.css";

import { Image } from "@fluentui/react-components";

export default function Banner() {
  return (
    <div className="banner">
      <Image alt="preview" src="banner.png" fit="cover" />
    </div>
  );
}
