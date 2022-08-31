import "./style/Banner.css";

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
      <Card>
        <CardPreview className="banner-img">
          <Image alt="file preview" src="top-img.jpg" fit="cover" />
        </CardPreview>
        <div className="banner-org-container">
          <Avatar image={{ src: "contoso.png" }} size={56} />
          <div className="banner-org-container-des">
            <Label weight="semibold" size="large">
              Contoso Team
            </Label>
            <div className="banner-org-container-desc-tooltip">
              <div className="banner-org-container-desc-tooltip-item">
                <Earth20Regular />
                <Label size="small">project.contoso.com</Label>
              </div>
              <div className="banner-org-container-desc-tooltip-item">
                <Person20Regular />
                <Label size="small">Team Lead: Contoso contoso</Label>
              </div>
              <div className="banner-org-container-desc-tooltip-item">
                <Star20Regular />
                <Label size="small">Service Type: Process Transformation</Label>
              </div>
            </div>
            <Label>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque mattis rutrum enim, eget vestibulum nisl fringilla
              in. Nullam nec justo fringilla, lobortis lectus in, interdum diam.
              Donec tempor, neque vel tincidunt volutpat, tellus odio ultricies
              dui, eu ultricies augue diam a odio. Suspendisse erat arcu, dictum
              eleifend aliquet nec, iaculis maximus ante.{" "}
            </Label>
          </div>
        </div>
      </Card>
    </div>
  );
}
