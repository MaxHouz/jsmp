export class NoteModel {
    constructor(
        public title: string,
        public text: string,
        public done: boolean,
        public archieved: boolean,
        public id?: number
    ){}
}