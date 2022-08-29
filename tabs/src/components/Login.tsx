import './Styles.css';

import { Escape, View } from '@fluent-blocks/react';
import { Button } from '@fluentui/react-components';

export default function Login() {
  return (
    <View
      accentScheme="teams"
      themeName="light"
      main={{
        title: "",
        blocks: [
          {
            inputs: [
              {
                button: {
                  actionId: "login",
                  label: "Login",
                  variant: "primary",
                  onAction: () => {
                    alert("clicked");
                  },
                },
              },
            ],
            variant: "narrow-block",
          },
        ],
        message: {
          media: {
            illustration: "hello",
            label: "hello",
          },
        },
      }}
      onAction={function noRefCheck() {}}
    />
  );
}
