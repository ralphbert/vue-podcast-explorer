import Vue from "vue";
import Vuex from "vuex";
import { podcastLoader } from "@/services/podcast-loader";
import Parser from "rss-parser";

Vue.use(Vuex);

export type Feed = Parser.Output<unknown>;
export type FeedItem = Parser.Item & { image: { url: string } };

export interface PodcastSource {
  name: string;
  feed: string;
}

export interface StoreModel {
  sources: PodcastSource[];
  search: string;
  shownFeeds: string[];
  feeds: Feed[];
  read: string[];
  loading: boolean;
  error: Error | null;
  selectedItemId: string | null;
}

export interface FeedToggleItem {
  title: string;
  id: string;
  active: boolean;
}

const predefinedSources = [
  {
    name: "Bits und so",
    feed: "./bus-feed.rss",
  },
  {
    name: "Hoaxilla",
    feed: "./hoaxilla-feed.rss",
  },
  {
    name: "Methodisch inkorrekt",
    feed: "./minkorrekt-feed.rss",
  },
];

export const store = new Vuex.Store<StoreModel>({
  state: {
    sources: predefinedSources,
    feeds: [],
    read: [],
    loading: false,
    error: null,
    search: "",
    shownFeeds: [],
    selectedItemId: null,
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
    reset(state) {
      state.loading = false;
      state.feeds = [];
      state.error = null;
    },
    addFeed(state, feed: Feed) {
      state.loading = false;
      state.feeds = [...state.feeds, feed];
      state.shownFeeds = [...state.shownFeeds, feed.feedUrl || ""];
    },
    search(state, term) {
      state.search = term || "";
    },
    toggleFeed(state, feedId) {
      const feedIds = new Set(state.shownFeeds);

      if (feedIds.has(feedId)) {
        if (feedIds.size > 1) {
          feedIds.delete(feedId);
        }
      } else {
        feedIds.add(feedId);
      }

      state.shownFeeds = Array.from(feedIds);
    },
    select(state, itemId: string) {
      state.selectedItemId = itemId;
      state.read = [...state.read, itemId || ""];
    },
  },
  actions: {
    loadFeeds(context) {
      context.commit("reset");
      context.commit("setLoading", true);

      Promise.all(
        context.state.sources.map((source) =>
          podcastLoader.load(source.feed).then((feed) => {
            feed.feedUrl = feed.feedUrl || source.feed;
            context.commit("addFeed", feed);
          })
        )
      )
        .catch((error) => {
          context.commit("setError", error);
        })
        .finally(() => {
          context.commit("setLoading", false);
        });
    },
    search(context, term) {
      context.commit("search", term);
    },
    toggleFeed(context, feedId: string) {
      context.commit("toggleFeed", feedId);
    },
    select(context, itemId: string) {
      context.commit("select", itemId);
    },
  },
  getters: {
    sources: (state) => state.sources,
    searchTerm: (state) => state.search,
    error: (state) => state.error,
    loading: (state) => state.loading,
    feeds: (state) => state.feeds,
    readItems: (state) => state.read,
    selected(state, getters) {
      return (getters.feedList as FeedItem[]).find(
        (item) => item.guid === state.selectedItemId
      );
    },
    feedList(state): FeedItem[] {
      return state.feeds
        .filter((feed) => state.shownFeeds.includes(feed.feedUrl || ""))
        .reduce((all, feed) => {
          const feedItems = feed.items.map(
            (item) => ({ ...item, image: feed.image } as FeedItem)
          );
          return [...all, ...feedItems];
        }, [] as FeedItem[]);
    },
    filteredFeedList(state, getters) {
      let items: FeedItem[] = getters.feedList;

      if (state.search) {
        const term = state.search.toLowerCase();
        items = items.filter((item) => {
          return (item.title || "").toLowerCase().indexOf(term) !== -1;
        });
      }

      return items.sort(
        (a, b) =>
          new Date(b.pubDate || 0).getTime() -
          new Date(a.pubDate || 0).getTime()
      );
    },
    feedToggles(state): FeedToggleItem[] {
      return state.feeds.map((feed) => {
        return {
          title: feed.title,
          id: feed.feedUrl,
          active: state.shownFeeds.includes(feed.feedUrl || ""),
        } as FeedToggleItem;
      });
    },
  },
});
