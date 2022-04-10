import React from "react";

import { Grid, Image, Text } from "../elements/elements";

const Post = (props) => {
    return (
    <React.Fragment>
        <Grid margin='auto'>
            <Grid is_flex>
	            <Image shape="circle" src={props.user_info.user_profile}/>
                <Text bold>{props.user_info.user_name}</Text>
                <Text>{props.insert_dt}</Text>
                <div>is_me (edit btn)</div>
            </Grid> 
            <Grid padding='16px'>
                <Text>{props.contents}</Text>
            </Grid>
            <Grid>
                <Image shape="rectangle" src={props.image_url}/>
            </Grid>
            <Grid padding='16px'>
                <Text bold>댓글 {props.comment_cnt}개</Text>
            </Grid>
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