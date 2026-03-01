export interface WeddingEvent {
  title: string;
  date: string;
  addressGroom: string;
  mapLinkGroom: string;
  addressBride: string;
  mapLinkBride: string;
}

export interface WeddingData {
  events: {
    engagement: WeddingEvent;
    wedding: WeddingEvent;
  };
  content: {
    venue: {
      title: string;
    };
    [key: string]: any;
  };
}

export interface Location {
  label: string;
  address: string;
  mapEmbed: string;
}
