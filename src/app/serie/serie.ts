export class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  URL: string;
  img: string;

  constructor (id: number, name: string, channel: string, seasons: number, description: string, URL: string, img: string){
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.URL = URL;
      this.img = img;
  }
}
