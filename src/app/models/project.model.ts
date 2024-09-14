export interface Project {
  id: number,
  name: string;
  imageSrc?: string;
  technologyStack?: string[];
  description?: string;
  gitUrl?: string;
  accessUrl?: string;
  media?: MediaData[];
}

export interface MediaData {
  type: 'img' | 'video',
  address: string,
  name: string,
  description?: string
}
