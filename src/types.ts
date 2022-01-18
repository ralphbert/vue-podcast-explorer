export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  image: string;
  previewImage: string;
  user: User;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  image: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
