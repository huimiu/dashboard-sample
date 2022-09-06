export default interface FilesModel {
  id?: string;
  icon?: string;
  name: string;
  createdBy: string,
  lastModifiedBy: string,
  createdDateTime: string,
  lastModifiedDateTime: string,
  tag?: string;
  weburl?: string;
  webDavurl?: string;
}
