import { RequestService } from './APIClient'
import { PackageCoordinate, PackageSchema } from './interfaces'

export class PackageModel extends RequestService {
  constructor() {
    super()
  }

  async req(name: string): Promise<PackageCoordinate> {
    const pkg = await this.npms.get(`/package/${name}`)
    return pkg.data
  }

  async mget(names: string[]): Promise<PackageSchema[]> {
    try {
      const pkgs = await this.npms.post('/package/mget', names)
      const keys = Object.values(pkgs.data)
      return keys.map((key: any) => pkgs.data[key])
    } catch (e) {
      return e
    }
  }
}
