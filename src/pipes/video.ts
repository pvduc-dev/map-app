import {Video} from "../types/video";

type Payload = {
  title: string;
  createdAt: string;
}

type VideoPipe = (payload: Payload) => Video;

export const videoPipe: VideoPipe = (payload) => ({
  title: payload.title,
  createdAt: new Date(payload.createdAt)
})
