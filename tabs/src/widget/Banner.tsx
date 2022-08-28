import './Styles.css';

import { Avatar, Body1, Caption1, Image } from '@fluentui/react-components';
import { Card, CardHeader, CardPreview } from '@fluentui/react-components/unstable';
import { Comment16Regular } from '@fluentui/react-icons';

export default function Banner() {
  return (
    <div style={{ width: "100%" }}>
      <Card>
        <CardPreview
          logo={<Image alt="app logo" src="logoipsum-223.svg" fit="cover" />}
        >
          <Image alt="file preview" src="900x100.jpg" />
        </CardPreview>
        <CardHeader
          image={<Avatar image={{ src: "20x20.jpg" }} />}
          header={<Body1 weight="semibold">Classroom Collaboration</Body1>}
          description={
            <Caption1 className="bannerContainer">
              <Comment16Regular color="#D83B01" />
              <span>Colin replied to a comment</span>
            </Caption1>
          }
        />
      </Card>
    </div>
  );
}
