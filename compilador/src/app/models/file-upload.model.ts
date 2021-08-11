export class FileUpload {
    key!: string;
    name!: string;
    url!: string;
    file: File;
    subida!:number;
    constructor(file: File) {
      this.file = file;
    }
  }