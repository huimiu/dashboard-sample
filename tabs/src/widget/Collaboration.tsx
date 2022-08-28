import './Styles.css';

import { Escape } from '@fluent-blocks/react';
import { Avatar, Body1, Caption1, Image, Label } from '@fluentui/react-components';
import { Card, CardHeader, CardPreview } from '@fluentui/react-components/unstable';
import { Comment16Regular } from '@fluentui/react-icons';

export default function Collaboration() {
  return {
    card: {
      title: [{ text: "Team collaborations" }],
      body: [
        <Escape contentMeetsAccessibilityAndDesignStandards>
          <div className="connect">
            <div className="connectItem">
              <Image height="110px" width="180px" src="content1.jpg" />
              <Label weight='semibold'>
                Code Repository
              </Label>
              <Label size="small">
                Uploaded 1h ago
              </Label>
            </div>
            <div className="connectItem">
              <Image bordered height="110px" width="180px" src="content2.png" />
              <Label weight='semibold'>
                Azure DevOps
              </Label>
              <Label size="small">
                Uploaded 1h ago
              </Label>
            </div>
            <div className="connectItem">
              <Image height="110px" width="180px" src="content3.jpg" />
              <Label weight='semibold'>
                Data Analytics
              </Label>
              <Label size="small">
                Uploaded 1h ago
              </Label>
            </div>
          </div>
        </Escape>,
      ],
    },
  };
}
