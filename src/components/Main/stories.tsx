import { Meta, Story } from '@storybook/react/types-6-0';

import Main, { Props } from '.';

export default {
  title: 'Main',
  component: Main
} as Meta;

const Basic: Story<Props> = (args) => <Main {...args} />;

export const Default = Basic.bind({});

Default.args = {
  title: 'React Avançado',
  description: 'Typescript, ReactJS, NextJS e Styled Components'
};
