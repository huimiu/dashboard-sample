import React, { useState } from 'react';

import { Body1, Button, Link, mergeClasses, TabList, Text, Tab } from '@fluentui/react-components';
import { Card, CardFooter, CardHeader } from '@fluentui/react-components/unstable';
import { MoreHorizontal20Filled } from '@fluentui/react-icons';

import FilesModel from '../model/FilesModel';
import { getFiles } from '../service/Requests';
import { useStyles } from './Styles';

export default function Files() {
  const [files, setFiles] = useState<FilesModel[]>();

  const initFiles = () => {
    const res = getFiles();
    setFiles(res);
    return res;
  };

  const filterFiles = (tag: string) => {
    const filtedRes = files?.filter((file: FilesModel) => {
      file.tag == tag;
    });
    setFiles(filtedRes);
    return filtedRes
  };

  const styles = useStyles();
  return (
    <Card
      className={mergeClasses(styles.cardContainer)}
      appearance="filled-alternative"
    >
      <CardHeader
        header={
          <Text weight="semibold" size={400}>
            Files
          </Text>
        }
      />

      <CardHeader 
      header={
        <TabList>
          <Tab value="all">All</Tab>
          <Tab value="recently">Recently opened</Tab>
          <Tab value="shared">Shared</Tab>
          <Tab value="favorites">Favorites</Tab>
        </TabList>
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

      <CardFooter
        className={styles.footerContainer}
        action={
          <Button size="small" appearance="transparent">
            View More
          </Button>
        }
      />
    </Card>
  );
}
