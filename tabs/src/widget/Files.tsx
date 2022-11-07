import '@fluent-blocks/basic-icons';

import { Escape } from '@fluent-blocks/react';
import { WidgetPropsOrElement } from '@fluent-blocks/react/types/blocks/Card/exemplars/Widget';
import { Body1, Button, ToggleButton } from '@fluentui/react-components';
import { CardHeader } from '@fluentui/react-components/unstable';
import {
    Box20Regular, Clock20Regular, MoreHorizontal20Filled, People20Regular, Star20Regular
} from '@fluentui/react-icons';

import FilesModel from '../model/FilesModel';
import { getFiles } from '../service/Requests';
import { useStyles } from './Styles';

export default function FilesWidget(): WidgetPropsOrElement {
  const files = getFiles();
  const styles = useStyles();
  return {
    widget: {
      title: "Files",
      label: "files widget",
      tabs: [
        {
          tab: { label: "files" },
          panel: [
            <Escape contentMeetsAccessibilityAndDesignStandards>
              <div className={styles.cardListContainer}>
                <CardHeader
                  header={
                    <div className={styles.toggleContainer}>
                      <ToggleButton
                        icon={<Box20Regular />}
                        size="small"
                        shape="circular"
                      >
                        All
                      </ToggleButton>
                      <ToggleButton
                        icon={<Clock20Regular />}
                        size="small"
                        shape="circular"
                      >
                        Recently
                      </ToggleButton>
                      <ToggleButton
                        icon={<People20Regular />}
                        size="small"
                        shape="circular"
                      >
                        Shared
                      </ToggleButton>
                      <ToggleButton
                        icon={<Star20Regular />}
                        size="small"
                        shape="circular"
                      >
                        Favorites
                      </ToggleButton>
                    </div>
                  }
                />

                {files?.map((file: FilesModel, i) => {
                  return (
                    <CardHeader
                      key={file.id}
                      image={{
                        as: "img",
                        src: "20x20.jpg",
                        alt: "",
                        height: 30,
                        width: 30,
                      }}
                      header={<Body1>{file.name}</Body1>}
                      action={
                        <Button
                          appearance="transparent"
                          icon={<MoreHorizontal20Filled />}
                        />
                      }
                    />
                  );
                })}
              </div>
            </Escape>,
          ],
        },
      ],
      footerAction: {
        actionId: "more",
        label: "View More",
        icon: "arrow_right",
        iconPosition: "after",
      },
    },
  };
}
