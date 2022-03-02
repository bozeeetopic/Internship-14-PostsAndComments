import { getPosts } from "./actions/posts.js";

(async () => {
  let postsCount = await getPosts(0);
})();
