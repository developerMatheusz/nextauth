import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    res.send({
      content:
        "Este é um conteúdo protegido. Você pode acessar este conteúdo porque está conectado."
    });
  }

  res.send({
    error:
      "Você deve estar conectado para visualizar o conteúdo protegido nesta página."
  });
};
