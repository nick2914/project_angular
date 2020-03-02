import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Lesson } from 'src/app/model/lesson.model';


// @Injectable({
//     providedIn: 'root'
// })
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const lessons = [
            {
                "id": 1,
                "category": "Angular",
                "section": "architect",
                "title": "DI Injector",
                "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, sapiente!",
                "image": "https://images.viblo.asia/ed0f8094-a9b4-44b1-a75d-085fd77dde69.jpg",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 2,
                "category": "Angular",
                "section": "architect",
                "title": "Import module",
                "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, sapiente!",
                "image": "https://images.viblo.asia/ed0f8094-a9b4-44b1-a75d-085fd77dde69.jpg",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 3,
                "category": "Angular",
                "section": "architect",
                "title": "Provider",
                "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, sapiente!",
                "image": "https://images.viblo.asia/ed0f8094-a9b4-44b1-a75d-085fd77dde69.jpg",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 4,
                "category": "Angular",
                "section": "routing",
                "title": "Component routing",
                "content": "Upload media file from Angular form...",
                "image": "https://malcoded.com/static/83a5e04fcd4136540e5215a91c9433e0/ba299/angular-file-upload-component.png",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 5,
                "category": "Angular",
                "section": "component",
                "title": "Component communication",
                "content": "How to use dynamic reactive form...",
                "image": "https://miro.medium.com/max/1200/1*uBQJCpEy4HPD3JAIp6rorQ.jpeg",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 6,
                "category": "Angular",
                "section": "component",
                "title": "NGClass",
                "content": "Dynamically add class to element",
                "image": "https://malcoded.com/static/211a1f00703b3ddef94272b080cec068/ba299/angular-ngclass.png",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 7,
                "category": "Angular",
                "section": "styling",
                "title": "Angular Bootstrap",
                "content": "Layout page with ngx-bootstrap",
                "image": "https://miro.medium.com/max/641/1*8LkrPsWqGBfnwCF3ir4vsg.png",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 8,
                "category": "Angular",
                "section": "styling",
                "title": "NgStyle",
                "content": "Lesson 3",
                "image": "https://i1.wp.com/blog.logrocket.com/wp-content/uploads/2019/05/6-useful-features-angular-cli.png?fit=1240%2C700&ssl=1",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 9,
                "category": "Angular",
                "section": "architect",
                "title": "Structure application",
                "content": "Structure application",
                "image": "https://media.graphcms.com/resize=w:4096,h:1703,fit:crop/output=format:webp/compress/k2b4YweWRWKu2IIoVSWL",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 10,
                "category": "Angular",
                "section": "architect",
                "title": "Structure application",
                "content": "Lesson 3",
                "image": "https://media.graphcms.com/resize=w:4096,h:1703,fit:crop/output=format:webp/compress/k2b4YweWRWKu2IIoVSWL",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 11,
                "category": "Angular",
                "section": "module",
                "title": "Structure application",
                "content": "Lesson 3",
                "image": "https://media.graphcms.com/resize=w:4096,h:1703,fit:crop/output=format:webp/compress/k2b4YweWRWKu2IIoVSWL",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 12,
                "category": "Angular",
                "section": "Component",
                "title": "Structure application",
                "content": "Lesson 3",
                "image": "https://media.graphcms.com/resize=w:4096,h:1703,fit:crop/output=format:webp/compress/k2b4YweWRWKu2IIoVSWL",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 13,
                "category": "Angular",
                "section": "binding",
                "title": "Binding hoạt động như thế nào ?",
                "content": "Làm thế nào Angular binding được data giữa view và component...",
                "image": "https://media.graphcms.com/resize=w:4096,h:1703,fit:crop/output=format:webp/compress/k2b4YweWRWKu2IIoVSWL",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 14,
                "category": "Angular",
                "section": "routing",
                "title": "Tìm hiểu về Routing",
                "content": "Lesson 3",
                "image": "https://media.graphcms.com/resize=w:4096,h:1703,fit:crop/output=format:webp/compress/k2b4YweWRWKu2IIoVSWL",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 15,
                "category": "Angular",
                "section": "architect",
                "title": "Structure application",
                "content": "Lesson 3",
                "image": "https://media.graphcms.com/resize=w:4096,h:1703,fit:crop/output=format:webp/compress/k2b4YweWRWKu2IIoVSWL",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 16,
                "category": "Angular",
                "section": "styling",
                "title": "Structure application",
                "content": "Lesson 3",
                "image": "https://media.graphcms.com/resize=w:4096,h:1703,fit:crop/output=format:webp/compress/k2b4YweWRWKu2IIoVSWL",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 17,
                "category": "Angular",
                "section": "routing",
                "title": "Routing animation",
                "content": "Lesson 3",
                "image": "https://media.graphcms.com/resize=w:4096,h:1703,fit:crop/output=format:webp/compress/k2b4YweWRWKu2IIoVSWL",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 18,
                "category": "Angular",
                "section": "component",
                "title": "Structure application",
                "content": "Lesson 3",
                "image": "https://media.graphcms.com/resize=w:4096,h:1703,fit:crop/output=format:webp/compress/k2b4YweWRWKu2IIoVSWL",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 19,
                "category": "Angular",
                "section": "architect",
                "title": "Structure application",
                "content": "Lesson 3",
                "image": "https://media.graphcms.com/resize=w:4096,h:1703,fit:crop/output=format:webp/compress/k2b4YweWRWKu2IIoVSWL",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            },
            {
                "id": 20,
                "category": "Angular",
                "section": "architect",
                "title": "Structure application",
                "content": "Lesson 3",
                "image": "https://media.graphcms.com/resize=w:4096,h:1703,fit:crop/output=format:webp/compress/k2b4YweWRWKu2IIoVSWL",
                "created_time": "25/02/2020",
                "viewed": 5,
                "list_comment": null
            }
        ];
        return { lessons };
    }

    genId(lessons: Lesson[]): number {
        return lessons.length > 0 ? Math.max(...lessons.map(lesson => lesson.id)) + 1 : 21;
    }
}