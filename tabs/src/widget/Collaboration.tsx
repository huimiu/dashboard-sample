import "./style/Collaboration.css";
import "./Styles.css";
import { Avatar, Image, Label, Text, Button } from "@fluentui/react-components";
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
      <div className="flex-content">
        <div className="card-container-row">
          <div className="collaborationItem">
            <Image
              height="110px"
              width="180px"
              src="content1.jpg"
              shape="rounded"
              onClick={() => alert("ss")}
            />
            <div className="collaborationDes">
              <Label weight="semibold">Code Repository</Label>
              <Label size="small">Uploaded 1h ago</Label>
            </div>
          </div>
          <div className="collaborationItem">
            <Image
              bordered
              height="110px"
              width="180px"
              src="content2.png"
              shape="rounded"
            />
            <div className="collaborationDes">
              <Label weight="semibold">Azure DevOps</Label>
              <Label size="small">Uploaded 1h ago</Label>
            </div>
          </div>
          <div className="collaborationItem">
            <Image
              height="110px"
              width="180px"
              src="content3.jpg"
              shape="rounded"
            />
            <div className="collaborationDes">
              <Label weight="semibold">Data Analytics</Label>
              <Label size="small">Uploaded 1h ago</Label>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
