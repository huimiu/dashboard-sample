import { Avatar, Body1, Caption1, Image, mergeClasses } from '@fluentui/react-components';
import { Card, CardHeader, CardPreview } from '@fluentui/react-components/unstable';
import { Comment16Regular } from '@fluentui/react-icons';

import Task from '../widget/Task';
import { useStyles } from './Styles';

export default function Home() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Card>
        <CardPreview
          logo={
            <Image
              alt="app logo"
              src="logoipsum-223.svg"
              className={styles.logoBadge}
              fit="cover"
            />
          }
        >
          <Image alt="file preview" src="900x100.jpg" />
        </CardPreview>
        <CardHeader
          image={<Avatar image={{ src: "20x20.jpg" }} />}
          header={<Body1 weight="semibold">Classroom Collaboration</Body1>}
          description={
            <Caption1
              className={mergeClasses(styles.flexContainer, styles.caption)}
            >
              <Comment16Regular color="#D83B01" />
              <span>Colin replied to a comment</span>
            </Caption1>
          }
        />
      </Card>
      <Card>
        <CardHeader
          image={<Avatar image={{ src: "20x20.jpg" }} />}
          header={<Body1 weight="semibold">Classroom Collaboration</Body1>}
          description={
            <Caption1
              className={mergeClasses(styles.flexContainer, styles.caption)}
            >
              <Comment16Regular color="#D83B01" />
              <span>Colin replied to a comment</span>
            </Caption1>
          }
        />
      </Card>
      <Task />
    </div>
  );
}
