import React from "react";

const Post = (props) => {

    return (
    <React.Fragment>
        <div>user profile / nickname / insert_dt / is_me (edit btn)</div>
        <div>contents</div>
        <div>image</div>
        <div>comment cnt</div>
    </React.Fragment>
    );
}

Post.defaultProps = {
  user_info: {
    user_name: "mean0",
    user_profile: "https://user-images.githubusercontent.com/91959791/162607932-f8a28694-48b7-4d38-9ba2-271d6fdbf8ab.png",
  },
  image_url: "https://user-images.githubusercontent.com/91959791/162609271-b1fe27c7-b364-4c5b-a15c-f139171d1c8b.png",
  contents: "고양이네요!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
};

export default Post;