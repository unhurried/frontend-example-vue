import { BasicQueryStringUtils, LocationLike, StringMap } from '@openid/appauth';

export default class NoHashQueryStringUtils extends BasicQueryStringUtils {
  parse(input: LocationLike, useHash?: boolean): StringMap {
    return super.parse(input, false /* never use hash */);
  }
}
