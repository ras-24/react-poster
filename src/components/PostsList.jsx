import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';

function PostsList() {
  return (
    <>
    <NewPost />
    <ul className={classes.posts}>
      <Post author="Ras" body="React.js is awesome!" />
      <Post author="Ros" body="Check out the Course!" />
    </ul>
    </>
  );
}

export default PostsList;
