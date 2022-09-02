import "../style/Collaboration.css";
import "./Styles.css";
import "../style/CardLayout.css";

import { Image, Label, Text } from "@fluentui/react-components";
import { Card, CardHeader } from "@fluentui/react-components/unstable";

export default function Collaboration() {
  return (
    <Card className="card">
      <CardHeader
        header={
          <Text weight="semibold" size={400}>
            Teams Collaboration
          </Text>
        }
      />
      <div className="card-container-row">
        <div className="collaboration-item">
          <Image
            height="110px"
            width="180px"
            src="content1.jpg"
            shape="rounded"
            onClick={() => alert("ss")}
          />
          <div className="collaboration-des">
            <Label weight="semibold">Code Repository</Label>
            <Label size="small">Uploaded 1h ago</Label>
          </div>
        </div>
        <div className="collaboration-item">
          <Image
            bordered
            height="110px"
            width="180px"
            src="content2.png"
            shape="rounded"
          />
          <div className="collaboration-des">
            <Label weight="semibold">Azure DevOps</Label>
            <Label size="small">Uploaded 1h ago</Label>
          </div>
        </div>
        <div className="collaboration-item">
          <Image
            height="110px"
            width="180px"
            src="content3.jpg"
            shape="rounded"
          />
          <div className="collaboration-des">
            <Label weight="semibold">Data Analytics</Label>
            <Label size="small">Uploaded 1h ago</Label>
          </div>
        </div>
      </div>
    </Card>
  );
}
