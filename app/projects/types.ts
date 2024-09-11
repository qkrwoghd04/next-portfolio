export interface NotionPage {
  id: string;
  properties: {
    이름: {
      title: Array<{ plain_text: string }>;
    };
    Description: {
      rich_text: Array<{ plain_text: string }>;
    };
    WorkPeriod: {
      date: { start: string; end: string | null } | null;
    };
    태그: {
      multi_select: Array<{ id: string, name: string , color: string}>;
    };
    github: {
      url: string | null;
    };
  };
  cover: {
    file?: { url: string };
    external?: { url: string };
  } | null;
}

export interface NotionResponse {
  results: NotionPage[];
}