export interface Project {
  id: number,
  name: string;
  imageSrc?: string;
  technologyStack?: string[];
  description?: string;
  gitUrl?: string;
  mediaId?: number[];
}
