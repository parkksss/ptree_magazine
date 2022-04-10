import React from "react";

import Grid from "../elements/Grid";

const Post = (props) => {

    return (
    <React.Fragment>
        <Grid padding='16px'>
            <div>user profile / nickname / insert_dt / is_me (edit btn)</div>
            <div>contents</div>
            <div>image</div>
            <div>comment cnt</div>
        </Grid>
    </React.Fragment>
    );
}

Post.defaultProps = {
  user_info: {
    user_name: "mean0",
    user_profile: "https://user-images.githubusercontent.com/91959791/162607932-f8a28694-48b7-4d38-9ba2-271d6fdbf8ab.png",
  },
  image_url: "https://user-images.githubusercontent.com/91959791/162609551-bfa94b6e-3edb-4dfb-869c-e27326132c12.png",
  contents: "기본이미지에요!!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
};

export default Post;