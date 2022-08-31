import "./Styles.css";
import { Avatar, Image, Label, Text, Button } from "@fluentui/react-components";
import { Card, CardHeader } from "@fluentui/react-components/unstable";

export default function TableWidget() {
  return (
    <Card className="card">
      <CardHeader
        header={
          <Text weight="semibold" size={300}>
            Features backlog
          </Text>
        }
      />
      <div className="flex-content"></div>
    </Card>
  );
}
