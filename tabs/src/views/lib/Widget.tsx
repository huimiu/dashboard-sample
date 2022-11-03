import React from "react";

import { Card, Flex } from "@fluentui/react-northstar";

import { cardStyles, headerStyles } from "./Widget.styles";

/**
 * Defined a widget, it's also a react component.
 * For more information about react component, please refer to https://reactjs.org/docs/react-component.html
 * T is the model type of the widget.
 */
export abstract class Widget<T> extends React.Component<{}, { data?: T }> {
  constructor(props: any) {
    super(props);
    this.state = { data: undefined };
  }

  /**
   * This method is invoked immediately after a component is mounted.
   * It's a good place to fetch data from server.
   * For more information about react lifecycle, please refer to https://reactjs.org/docs/react-component.html#componentdidmount
   */
  async componentDidMount() {
    this.setState({ data: await this.getData() });
    console.log(this.state.data);
  }

  /**
   * Define your widget layout, you can edit the code here to customize your widget.
   */
  render() {
    return (
      <Card
        fluid
        elevated
        style={cardStyles()}
        styles={{
          ":hover": "backgroud-color: var(--Foreground)",
        }}
      >
        {/** Card header */}
        {this.headerContent() && (
          <Card.Header style={headerStyles()}>
            {this.headerContent()}
          </Card.Header>
        )}

        {/** Card content */}
        <Flex fill column gap="gap.medium" vAlign="stretch" hAlign="stretch">
          {this.bodyContent() && <Card.Body>{this.bodyContent()}</Card.Body>}
        </Flex>

        {/** Card footer */}
        {this.footerContent() && (
          <Card.Footer fitted>{this.footerContent()}</Card.Footer>
        )}
      </Card>
    );
  }

  /**
   * Get data required by the widget, you can get data from a api call or static data stored in a file. Override this method according to your needs.
   * @returns data for the widget
   */
  protected async getData(): Promise<T> {
    return new Promise<T>(() => {});
  }

  /**
   * Override this method to customize the widget header.
   * @returns JSX component for the widget body
   */
  protected headerContent(): JSX.Element | undefined {
    return undefined;
  }

  /**
   * Override this method to customize the widget body.
   * @returns JSX component for the widget body
   */
  protected bodyContent(): JSX.Element | undefined {
    return undefined;
  }

  /**
   * Override this method to customize the widget footer.
   * @returns react node for the widget footer
   */
  protected footerContent(): JSX.Element | undefined {
    return undefined;
  }
}
