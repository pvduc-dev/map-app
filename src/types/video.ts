export type Video = {
  title: string;
  createdAt: Date;

  paginate: Promise<Video[]>;
}
