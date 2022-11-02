export interface CollaboarationItem {
  id: string;
  img: string;
  title: string;
  description: string;
  link: string;
  updated: string;
}

export interface CollaborationModel {
  data: CollaboarationItem[];
}
