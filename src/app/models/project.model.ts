export interface Project {
  id: number,
  name: string;
  imageSrc?: string;
  technologyStack?: TechnologyStackItem[];
  description?: string;
  gitUrl?: string;
  accessUrl?: string;
  media?: MediaData[];
}

export interface MediaData {
  id: number,
  type: 'img' | 'video',
  address: string,
  name: string,
  description?: string
}

export interface TechnologyStackItem{
  id: number,
  name: string
}