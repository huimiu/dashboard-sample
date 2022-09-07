import "../style/collaboration.css";
import "../style/cardLayout.css";

import { Image, Label, Text, Button } from "@fluentui/react-components";
import { Card, CardHeader } from "@fluentui/react-components/unstable";

import {
  Share20Regular,
  CircleSmall20Filled,
  ArrowRight16Filled,
} from "@fluentui/react-icons";

export default function Collaboration() {
  return (
    <Card className="card">
      <CardHeader
        header={
          <Text
            weight="semibold"
            size={400}
            style={{ marginLeft: "20px", marginTop: "10px" }}
          >
            Teams Collaboration
          </Text>
        }
      />
      <div className="card-content">
        <div className="card-container-row">
          <div className="collaboration-item">
            <Image
              height="80px"
              width="200px"
              src="content6.png"
              shape="rounded"
            />
            <div className="collaboration-des">
              <Label weight="semibold">Code Repository</Label>
              <Text
                size={300}
                style={{ color: "#616161", marginTop: "4px" }}
                wrap
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim,
                elementum sed
              </Text>
            </div>
            <div className="collaboration-share">
              <Share20Regular />
              <div className="collaboration-time">
                <CircleSmall20Filled color="#616161" />
                <Text size={300} style={{ color: "#616161" }}>
                  2 hrs ago
                </Text>
              </div>
            </div>
          </div>
          <div className="collaboration-item">
            <Image
              height="80px"
              width="200px"
              src="content7.png"
              shape="rounded"
            />
            <div className="collaboration-des">
              <Label weight="semibold">Azure DevOps</Label>
              <Text
                size={300}
                style={{ color: "#616161", marginTop: "4px" }}
                wrap
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim,
                elementum sed
              </Text>
            </div>
            <div className="collaboration-share">
              <Share20Regular />
              <div className="collaboration-time">
                <CircleSmall20Filled color="#616161" />
                <Text size={300} style={{ color: "#616161" }}>
                  2 hrs ago
                </Text>
              </div>
            </div>
          </div>
          <div className="collaboration-item">
            <Image
              height="80px"
              width="200px"
              src="content8.png"
              shape="rounded"
            />
            <div className="collaboration-des">
              <Label weight="semibold">Data Analytics</Label>
              <Text
                size={300}
                style={{ color: "#616161", marginTop: "4px" }}
                wrap
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim,
                elementum sed
              </Text>
            </div>
            <div className="collaboration-share">
              <Share20Regular />
              <div className="collaboration-time">
                <CircleSmall20Filled color="#616161" />
                <Text size={300} style={{ color: "#616161" }}>
                  2 hrs ago
                </Text>
              </div>
            </div>
          </div>
          <div className="collaboration-item">
            <Image
              height="80px"
              width="200px"
              src="content5.png"
              shape="rounded"
            />
            <div className="collaboration-des">
              <Label weight="semibold">Data Analytics</Label>
              <Text
                size={300}
                style={{ color: "#616161", marginTop: "4px" }}
                wrap
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim,
                elementum sed
              </Text>
            </div>
            <div className="collaboration-share">
              <Share20Regular />
              <div className="collaboration-time">
                <CircleSmall20Filled color="#616161" />
                <Text size={300} style={{ color: "#616161" }}>
                  2 hrs ago
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-action">
          <Button
            appearance="transparent"
            size="small"
            icon={<ArrowRight16Filled />}
            iconPosition="after"
            style={{ color: "#5B5FC7" }}
          >
            View all
          </Button>
        </div>
      </div>
    </Card>
  );
}
