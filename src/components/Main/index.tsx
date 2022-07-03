import * as Styles from './styles';

export interface Props {
  title: string;
  description: string;
}

const Main = ({ title, description }: Props) => {
  return (
    <Styles.Wrapper>
      <Styles.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e react avançado escrito ao lado."
      />
      <Styles.Title>{title}</Styles.Title>
      <Styles.Description>{description}</Styles.Description>
      <Styles.Ilustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para um tela com código."
      />
    </Styles.Wrapper>
  );
};

export default Main;
