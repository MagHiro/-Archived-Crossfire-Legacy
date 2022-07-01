import Cookie from "universal-cookie";

const cookie = new Cookie();

class Cookies {
  getItem(key) {
    return cookie.get(key);
  }

  setItem(key, value, options) {
    cookie.set(key, value, options);
  }

  removeItem(key) {
    cookie.remove(key);
  }
}

export default new Cookies();