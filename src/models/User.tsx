import { API_URL } from '../config/constant';
import fetchWrapper, {
  FetchConfig,
  FetchError,
  MethodType,
} from '../utils/fetchWrapper';

const User = {
  name: '/users',

  async getUserInfo(
    uid_or_url_slug: string,
    token?: string
  ): Promise<any> {
    const route = `${API_URL + this.name}/${uid_or_url_slug}`;
    const data = await fetchWrapper(this.route, MethodType.GET, null, token);
    return data as any;
  },
};

export default User;
