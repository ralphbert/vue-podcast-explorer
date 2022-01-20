import Parser from "rss-parser";

export class PodcastLoader {
  parser: Parser;

  constructor() {
    this.parser = new Parser();
  }

  async load(feedUrl: string): Promise<Parser.Output<unknown>> {
    return this.parser.parseURL(feedUrl);
  }
}

export const podcastLoader = new PodcastLoader();
