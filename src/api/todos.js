import { HTTP } from "../axios";
export const todos = {
  get: async () => {
    try {
      let resp = await HTTP.get("?_limit=200");
      if (!resp.data) {
        throw Error("Empty todo list");
      }
      return resp;
    } catch (err) {
      return err;
    }
  },
  delete: async (id) => {
    try {
      await HTTP.delete(`/${id}`);
      return "Todo was deleted";
    } catch (err) {
      return err;
    }
  },
  update: async (id, body) => {
    try {
      await HTTP.put(`/${id}`, body);
      return "Todo completed";
    } catch (err) {
      return err;
    }
  },
  add: async (body) => {
    try {
      await HTTP.post("", body);
      return "Todo was added";
    } catch (err) {
      return err;
    }
  },
};
