import { FC } from 'react';
import { useForm } from 'react-hook-form'; // Importe o hook useForm
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { useAuth } from '~/hooks/useAuth';
import ImageLogin from './images/ImageLogin.jpeg';
import LogoBSafra from './images/LogoBSafra.png';
import { ContainerLogin, Content, ContentImg, ContentLogin, CustomLink, Logo } from './style';

type FormData = {
  username: string;
  password: string;
};

export const Login: FC = () => {
  const { handleSignIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await handleSignIn(data.username, data.password);
  };

  return (
    <ContainerLogin>
      <ContentImg src={ImageLogin} />
      <ContentLogin>
        <Logo src={LogoBSafra} />
        <Content onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Nome:"
            type="text"
            hasError={!!errors.username}
            errorDescription={errors.username && errors.username.message}
            {...register('username', { required: 'Usuário é obrigatório' })}
          />

          <Input
            label="Senha:"
            type="password"
            hasError={!!errors.password}
            errorDescription={errors.password && errors.password.message}
            {...register('password', { required: 'Senha é obrigatória' })}
          />

          <CustomLink to="reset-password">Esqueceu sua senha?</CustomLink>
          <Button type="submit" label="Acessar Portal" />
        </Content>
      </ContentLogin>
    </ContainerLogin>
  );
};
