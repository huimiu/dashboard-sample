import { FluentBlocksProvider, Illustration } from "@fluent-blocks/react";
import basicIcons from '@fluent-blocks/basic-icons/basic-icons.svg';

export default function Dashboard() {
  return (
    <FluentBlocksProvider iconSpriteUrl={basicIcons}>
      <Illustration illustration="hello" label="Hello" />
    </FluentBlocksProvider>
  );
}
