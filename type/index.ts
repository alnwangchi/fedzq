export interface KindeUser {
  family_name: string;
  given_name: string;
  picture: string;
  email: string;
  id: string;
}

export interface CommonPost {
  postId?: string;
  userId: string;
  title: string;
  description: string;
  answer: string;
  share: boolean;
}
