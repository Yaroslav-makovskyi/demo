import { Post } from '@app/posts/entities/post.entity';
import { fakeUser } from '@app/users/fakes/user.fake';

const fakePost = new Post();
fakePost.id = '8e59c99e-446a-4ad9-8b32-09d2c3f6e4f6';
fakePost.title = 'Hello Word';
fakePost.body = 'Lorem ipsum';
fakePost.authorId = fakeUser.id;
fakePost.author = fakeUser;

export { fakePost };
