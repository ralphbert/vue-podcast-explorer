import Parser from "rss-parser";

export type Feed = Parser.Output<unknown>;
export type FeedItem = Parser.Item & { image: { url: string } };

export interface PodcastSource {
  name: string;
  feed: string;
}

export interface FeedToggleItem {
  title: string;
  id: string;
  active: boolean;
}

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
