import { useSession, signOut, signIn } from "next-auth/react";

export default function Home() {

  const { data: session } = useSession();

  if (session) {

    return(

      <>
        Logado no sistema como {session.user?.email}<br/>
        <button onClick={() => signOut()}>
          Encerrar sessão
        </button>
      </>

    );

  }

  return(

    <>
      Você não está logado no sistema<br/>
      <button onClick={() => signIn()}>Criar sessão</button>
    </>

  );

}
