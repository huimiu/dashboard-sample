import './Styles.css';

import { Escape } from '@fluent-blocks/react';
import { Image, Label } from '@fluentui/react-components';

export default function Collaboration() {
  return {
    card: {
      title: [{ text: "Team collaborations" }],
      body: [
        <Escape contentMeetsAccessibilityAndDesignStandards>
          <div className="collaboration">
            <div className="collaborationItem">
              <Image height="110px" width="180px" src="content1.jpg" />
              <div className="collaborationDes">
                <Label weight="semibold">Code Repository</Label>
                <Label size="small">Uploaded 1h ago</Label>
              </div>
            </div>
            <div className="collaborationItem">
              <Image bordered height="110px" width="180px" src="content2.png" />
              <div className="collaborationDes">
                <Label weight="semibold">Azure DevOps</Label>
                <Label size="small">Uploaded 1h ago</Label>
              </div>
            </div>
            <div className="collaborationItem">
              <Image height="110px" width="180px" src="content3.jpg" />
              <div className="collaborationDes">
                <Label weight="semibold">Data Analytics</Label>
                <Label size="small">Uploaded 1h ago</Label>
              </div>
            </div>
          </div>
        </Escape>,
      ],
    },
  };
}
