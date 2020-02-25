export class Lesson {
    constructor(
        public id: number,
        public category: string,
        public section: string,
        public title: string,
        public content: string,
        public image: string,
        public created_time: string,
        public viewed: number,
        public list_comment: Comment[]
    ) {

    }
}