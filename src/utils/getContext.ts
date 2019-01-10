import * as jwt from 'jsonwebtoken'
import { LibrariesIO } from '../models/LibrariesIOModel'
import { NpmsApiModel } from '../models/NpmsApiModel'
export interface Context {
  libs: LibrariesIO
  npms: NpmsApiModel
  request: any
}

export function getUserId(ctx: Context) {
  const Authorization = ctx.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
      userId: string
    }
    return userId
  }

  throw new AuthError()
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}
