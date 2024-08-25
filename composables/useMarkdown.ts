import { marked } from "marked";
import TurndownService from "turndown";

export const useMarkdown = () => {
  const turndownService = new TurndownService();

  const htmlToMarkdown = (value: string) => {
    return turndownService.turndown(value);
  };

  const markdownToHtml = (value: string) => {
    return marked(value);
  };

  return { htmlToMarkdown, markdownToHtml };
};
