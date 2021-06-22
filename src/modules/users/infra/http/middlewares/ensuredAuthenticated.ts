import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void | Response {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.json({
      error: true,
      errorMessage: "JWT TOKEN inexistente"
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, "secredo");
    const { sub } = decoded as ITokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch (error) {
    return response.json({
      error: true,
      errorMessage: "JWT TOKEN INVALIDO"
    });
  }
}